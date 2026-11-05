import { UNITS, LEVELS, SOUNDS } from "./course.js";

/* ---------- Spaced review ---------- */
const DAY = 86400000;
const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // days for boxes 1..7
const MASTERED = 4;
const UNIT_BY_ID = Object.fromEntries(UNITS.map(u => [u.id, u]));
const ORDERED_UNITS = LEVELS.flatMap(l => l.units.map(id => UNIT_BY_ID[id]));
const ALL = ORDERED_UNITS.flatMap(u => u.cards.map(c => ({ ...c, unit: u.id })));
const BY_ID = Object.fromEntries(ALL.map(c => [c.id, c]));
const LS_KEY = "gogledd_v2";
let tab = "practise", session = null, openUnit = null;
const main = document.getElementById("main");
// Older copies of index.html have no Sgwrs tab; add it so this file works with either.
if (!document.querySelector('[data-tab="chat"]')) {
  const before = document.querySelector('[data-tab="sounds"]');
  const b = document.createElement("button");
  b.setAttribute("role", "tab"); b.dataset.tab = "chat"; b.setAttribute("aria-selected", "false"); b.textContent = "Sgwrs";
  if (before) before.before(b);
}

function todayStr(t = Date.now()) { const d = new Date(t); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function startOfDay(t) { const d = new Date(t); d.setHours(4, 0, 0, 0); if (d.getTime() > t) d.setDate(d.getDate() - 1); return d.getTime(); }
function freshState() { return { v: 2, cards: {}, day: { date: "", newCount: 0 }, settings: { newPerDay: 8, rate: 0.9 }, focus: null, updatedAt: 0 }; }
function normalize(s) {
  const f = freshState();
  if (!s || typeof s !== "object") return f;
  return { v: 2, cards: s.cards && typeof s.cards === "object" ? s.cards : {}, day: s.day || f.day,
    settings: Object.assign(f.settings, s.settings || {}), focus: s.focus || null, updatedAt: s.updatedAt || 0 };
}
let S = freshState();
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = normalize(JSON.parse(raw)); } catch (e) {}

function rollDay() { const t = todayStr(); if (S.day.date !== t) S.day = { date: t, newCount: 0 }; }
function dueCards(now = Date.now()) { return ALL.filter(c => S.cards[c.id] && S.cards[c.id].due <= now).sort((a, b) => S.cards[a.id].due - S.cards[b.id].due); }
function unseenInOrder() {
  const unseen = ALL.filter(c => !S.cards[c.id]);
  if (!S.focus) return unseen;
  return unseen.filter(c => c.unit === S.focus).concat(unseen.filter(c => c.unit !== S.focus));
}
function newAllowance() { rollDay(); return Math.max(0, S.settings.newPerDay + (S.day.bonus || 0) - S.day.newCount); }

// rating: 0 missed, 1 shaky, 2 got it
function schedule(id, rating, isRepeat) {
  const now = Date.now();
  const st = S.cards[id] || { box: 1, due: now, reps: 0 };
  if (rating === 0) { st.box = 1; st.due = now; }
  else if (isRepeat || rating === 1) { st.box = Math.max(1, isRepeat ? 1 : st.box); st.due = startOfDay(now) + DAY; }
  else { st.box = Math.min(7, st.box + 1); st.due = startOfDay(now) + INTERVALS[st.box] * DAY; }
  st.reps = (st.reps || 0) + 1;
  S.cards[id] = st;
  save();
  return st;
}

/* ---------- Saving: this device always; the person's private store when available ---------- */
let dbRef = null, syncing = false, pending = false, syncTimer = null;
function save() {
  S.updatedAt = Date.now();
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
  if (dbRef) { clearTimeout(syncTimer); syncTimer = setTimeout(pushDb, 1200); }
}
async function pushDb() {
  if (!dbRef) return;
  if (syncing) { pending = true; return; }
  syncing = true;
  try { await dbRef.set(JSON.parse(JSON.stringify(S))); setFoot("Progress synced to your account."); }
  catch (e) { setFoot("Progress is saved on this device. Account sync isn't available right now."); }
  syncing = false;
  if (pending) { pending = false; pushDb(); }
}
function setFoot(t) { document.getElementById("foot").textContent = t; }
async function initDb() {
  try {
    if (!window.claude || !window.claude.use) return;
    const [user, db] = await Promise.all([window.claude.use("user"), window.claude.use("db")]);
    if (!user || !db) return;
    const id = await user.id();
    if (!id) return;
    const ref = db.collection("data/users/" + id).doc("progress");
    const snap = await ref.get();
    dbRef = ref;
    if (snap.exists) {
      const remote = normalize(JSON.parse(JSON.stringify(snap.data())));
      if (remote.updatedAt > S.updatedAt && !session) { S = remote; try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {} render(); }
      else if (S.updatedAt > remote.updatedAt) pushDb();
    } else if (S.updatedAt) pushDb();
    setFoot("Progress synced to your account, so it follows you between devices.");
  } catch (e) { /* stay on device storage */ }
}

/* ---------- Voice: Welsh only, never an English voice reading Welsh ---------- */
let welshVoice = null;
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices() || [];
  const cy = vs.filter(v => /^cy/i.test(v.lang) || /welsh|cymraeg/i.test(v.name));
  welshVoice = cy.find(v => /natural|online|neural/i.test(v.name)) || cy[0] || null;
  if (tab === "practise" && !session) render();
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; setTimeout(pickVoice, 800); }
function speak(text) {
  if (!welshVoice) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/'/g, ""));
    u.voice = welshVoice; u.lang = welshVoice.lang; u.rate = S.settings.rate;
    speechSynthesis.speak(u);
  } catch (e) {}
}
/* ---------- Speak now: record yourself and play it back ---------- */
const MIC_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 0 5 0v-4A2.5 2.5 0 0 0 8 1zm-4.5 6.5a.75.75 0 0 0-1.5 0 6 6 0 0 0 5.25 5.95V15h1.5v-1.55A6 6 0 0 0 14 7.5a.75.75 0 0 0-1.5 0 4.5 4.5 0 0 1-9 0z"/></svg>';
const STOP_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3.5" width="9" height="9" rx="1.5"/></svg>';
let micState = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) ? "ok" : "none";
const rec = { state: "idle", url: null, mr: null, stream: null, timer: null, secs: 0 };
function resetRec() {
  if (rec.mr && rec.state === "rec") { rec.mr.onstop = null; try { rec.mr.stop(); } catch (e) {} }
  if (rec.stream) rec.stream.getTracks().forEach(t => t.stop());
  if (rec.url) URL.revokeObjectURL(rec.url);
  clearInterval(rec.timer);
  Object.assign(rec, { state: "idle", url: null, mr: null, stream: null, timer: null, secs: 0 });
}
function playMine() { if (rec.url) { try { new Audio(rec.url).play(); } catch (e) {} } }
async function startRec() {
  resetRec();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    const mr = new MediaRecorder(stream);
    const chunks = [];
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      clearInterval(rec.timer);
      const blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" });
      rec.url = blob.size ? URL.createObjectURL(blob) : null;
      rec.state = rec.url ? "done" : "idle";
      rec.stream = null;
      render();
      playMine();
    };
    Object.assign(rec, { mr, stream, state: "rec", secs: 0 });
    mr.start();
    rec.timer = setInterval(() => { rec.secs++; const t = document.getElementById("rectime"); if (t) t.textContent = rec.secs + "s"; if (rec.secs >= 8) stopRec(); }, 1000);
    render();
  } catch (e) {
    micState = (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) ? "blocked" : "none";
    resetRec();
    render();
  }
}
function stopRec() { if (rec.mr && rec.state === "rec") { try { rec.mr.stop(); } catch (e) {} } }
function recControls(revealed) {
  if (micState === "none") return "";
  if (micState === "blocked") return `<div class="cue">Microphone is off for Gogledd. To record yourself, allow the microphone in your phone's settings for this app.</div>`;
  if (rec.state === "rec") return `<div class="row"><button class="mic on" id="recstop">${STOP_SVG} Stop <span id="rectime">${rec.secs}s</span></button><span class="cue">Speak now…</span></div>`;
  if (rec.state === "done") return `<div class="row"><button class="play" id="mine">${PLAY_SVG} Play yours</button><button class="mic" id="recgo">${MIC_SVG} Again</button></div>`;
  return `<div class="row"><button class="mic" id="recgo">${MIC_SVG} Speak now</button>${revealed ? "" : `<span class="cue">Record yourself, then check.</span>`}</div>`;
}
function wireRec() {
  const g = document.getElementById("recgo"); if (g) g.onclick = startRec;
  const s = document.getElementById("recstop"); if (s) s.onclick = stopRec;
  const m = document.getElementById("mine"); if (m) m.onclick = playMine;
}

const PLAY_SVG = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z"/></svg>';

/* ---------- Session ---------- */

function buildSession() {
  const reviews = dueCards().map(c => ({ id: c.id, kind: "review" }));
  const fresh = unseenInOrder().slice(0, newAllowance()).map(c => ({ id: c.id, kind: "new" }));
  const q = [];
  // Mix: a new phrase after every two reviews, so new material sits among familiar material.
  let r = 0, n = 0;
  while (r < reviews.length || n < fresh.length) {
    if (r < reviews.length) q.push(reviews[r++]);
    if (r < reviews.length) q.push(reviews[r++]);
    if (n < fresh.length) q.push(fresh[n++]);
  }
  return { queue: q, pos: 0, revealed: false, total: q.length, done: 0, got: 0 };
}
function current() { return session && session.queue[session.pos]; }
function insertLater(item, gap) { const at = Math.min(session.queue.length, session.pos + 1 + gap); session.queue.splice(at, 0, item); session.total++; }

function introduceDone() {
  const it = current();
  S.cards[it.id] = { box: 1, due: Date.now(), reps: 0 };
  rollDay(); S.day.newCount++; save();
  insertLater({ id: it.id, kind: "repeat" }, 3);
  advance();
}
function rate(r) {
  const it = current(); if (!it || !session.revealed) return;
  schedule(it.id, r, it.kind === "repeat");
  if (r === 0) insertLater({ id: it.id, kind: "repeat" }, 3);
  if (r === 2) session.got++;
  advance();
}
function advance() { resetRec(); session.pos++; session.done++; session.revealed = false; render(); }
function reveal() { if (!session || session.revealed) return; session.revealed = true; render(); const it = current(); if (it) speak(BY_ID[it.id].cy); }

/* ---------- Rendering ---------- */
function esc(s) { return String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])); }
function sayHtml(s) { return esc(s).replace(/\b([A-ZɨƗŴ]{2,}[A-ZɨƗ]*)\b/g, "<b>$1</b>"); }
function voiceNote() {
  if (welshVoice) return `<div class="voice-note">Audio: <strong>${esc(welshVoice.name)}</strong>. A computer voice is a guide; copy real Gogs whenever you can.</div>`;
  return `<div class="voice-note"><strong>No Welsh voice on this device.</strong> The app won't read Welsh in an English voice, because that teaches the wrong sounds. Use the sound-it-out spelling under each phrase. Android doesn't include a Welsh voice, so audio isn't available in this app.</div>`;
}

function renderHome() {
  rollDay();
  const due = dueCards().length, allow = newAllowance(), unseen = unseenInOrder().length;
  const newToday = Math.min(allow, unseen);
  const seen = Object.keys(S.cards).length;
  const mastered = Object.values(S.cards).filter(c => c.box >= MASTERED).length;
  const heading = seen === 0 ? "Croeso. Let's start talking." : (due + newToday ? "Barod? Here's today." : "Dyna ni. All done for today.");
  const focusU = S.focus && UNIT_BY_ID[S.focus];
  main.innerHTML = `
    <section class="today">
      <h2>${heading}</h2>
      <div class="counts">
        <div class="count"><b>${due}</b><span>To review</span></div>
        <div class="count"><b>${newToday}</b><span>New today</span></div>
        <div class="count"><b>${mastered}<small style="font-size:.9rem;color:var(--muted)"> / ${ALL.length}</small></b><span>Well known</span></div>
      </div>
      <div class="row">
        <button class="primary" id="go" ${due + newToday ? "" : "disabled"}>${seen === 0 ? "Start the first lesson" : "Start practising"}</button>
        ${!(due + newToday) && unseen ? `<button class="ghost" id="more">Learn 5 more</button>` : ""}
      </div>
      ${focusU ? `<div class="how">New phrases are coming from <strong>${esc(focusU.title)}</strong> (${esc(focusU.en)}). <button class="ghost" id="clearfocus">Go in order</button></div>` : ""}
    </section>
    ${voiceNote()}
    <section class="how">
      <strong style="color:var(--ink)">How it works</strong>
      <ol>
        <li>You see the English. Say the Welsh <em>out loud</em> before you check. Saying it is the practice.</li>
        <li>Reveal the answer and be honest: missed, shaky or got it.</li>
        <li>Phrases you know come back less often. Ones you miss come back in a few minutes.</li>
      </ol>
    </section>
    <section class="settings">
      <label for="npd">New phrases a day</label>
      <select id="npd">${[4, 6, 8, 12, 16].map(n => `<option ${n === S.settings.newPerDay ? "selected" : ""}>${n}</option>`).join("")}</select>
      ${welshVoice ? `<label for="spd">Voice speed</label><select id="spd">${[[0.7, "Slow"], [0.9, "Steady"], [1, "Natural"]].map(([v, l]) => `<option value="${v}" ${v === S.settings.rate ? "selected" : ""}>${l}</option>`).join("")}</select>` : ""}
    </section>`;
  const go = document.getElementById("go"); if (go) go.onclick = () => { session = buildSession(); render(); };
  const more = document.getElementById("more"); if (more) more.onclick = () => { S.day.bonus = (S.day.bonus || 0) + 5; save(); session = buildSession(); render(); };
  const cf = document.getElementById("clearfocus"); if (cf) cf.onclick = () => { S.focus = null; save(); render(); };
  document.getElementById("npd").onchange = e => { S.settings.newPerDay = +e.target.value; save(); render(); };
  const spd = document.getElementById("spd"); if (spd) spd.onchange = e => { S.settings.rate = +e.target.value; save(); };
}

function renderCard() {
  const it = current();
  if (!it) {
    const msg = session.total ? `You said ${session.done} phrase${session.done === 1 ? "" : "s"} out loud${session.got ? `, ${session.got} of them spot on` : ""}.` : "Nothing to practise right now.";
    main.innerHTML = `<section class="done"><h2>Da iawn!</h2><p>${msg}</p><p class="how">Come back tomorrow. Little and often beats long sessions.</p><button class="primary" id="home">Back to today</button></section>`;
    document.getElementById("home").onclick = () => { session = null; render(); };
    return;
  }
  const c = BY_ID[it.id];
  const unit = UNIT_BY_ID[c.unit];
  const pct = Math.round(100 * session.done / Math.max(1, session.total));
  const bar = `<div class="session-bar"><button class="ghost" id="quit">Stop</button><div class="meter"><i style="width:${pct}%"></i></div><small>${session.done} / ${session.total}</small></div>`;
  const answer = `
      <div class="welsh" lang="cy">${esc(c.cy)}</div>
      <div class="say">Say: ${sayHtml(c.say)}</div>
      ${welshVoice ? `<div class="row"><button class="play" id="play">${PLAY_SVG} Gwrando</button></div>` : ""}
      ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}`;
  let body;
  if (it.kind === "new") {
    body = `
      <div class="kind"><span class="new">New phrase</span><span>${esc(unit.title)} · ${esc(unit.en)}</span></div>
      <div class="prompt">${esc(c.en)}</div>
      ${answer}
      <div class="cue">Say it out loud three times. Slowly first, then at normal speed.</div>
      ${recControls(true)}
      <button class="primary" id="ok">I've said it. Next</button>`;
  } else {
    body = `
      <div class="kind"><span>${it.kind === "repeat" ? "Once more" : "Say it in Welsh"}</span><span>${esc(unit.title)}</span></div>
      <div class="prompt">${esc(c.en)}</div>
      ${session.revealed ? answer + recControls(true) + `
        <div class="rate">
          <button class="r-miss" id="r0">Missed<small>again soon</small></button>
          <button class="r-shaky" id="r1">Shaky<small>tomorrow</small></button>
          <button class="r-got" id="r2">Got it<small>${it.kind === "repeat" ? "tomorrow" : "later"}</small></button>
        </div>
        <div class="keys">Keys: 1 missed · 2 shaky · 3 got it</div>`
      : `<div class="cue">Say it out loud first. Then check.</div>
        ${recControls(false)}
        <button class="primary" id="rev">Show answer</button>
        <div class="keys">Key: space</div>`}`;
  }
  main.innerHTML = bar + `<section class="card">${body}</section>`;
  document.getElementById("quit").onclick = () => { resetRec(); session = null; render(); };
  wireRec();
  const play = document.getElementById("play"); if (play) play.onclick = () => speak(c.cy);
  const ok = document.getElementById("ok"); if (ok) ok.onclick = introduceDone;
  const rv = document.getElementById("rev"); if (rv) { rv.onclick = () => { stopRec(); reveal(); }; if (rec.state === "idle") rv.focus({ preventScroll: true }); }
  [0, 1, 2].forEach(r => { const b = document.getElementById("r" + r); if (b) b.onclick = () => rate(r); });
}

function renderUnits() {
  main.innerHTML = `<p class="how">${ALL.length} phrases in ${UNITS.length} units. Tap a unit to see its phrases. Dots show how well you know each one.</p>` + LEVELS.map(l => `<h2 class="level"><span lang="cy">${esc(l.title)}</span> <small>${esc(l.en)}</small></h2>` + l.units.map(id => UNIT_BY_ID[id]).map(u => {
    const seen = u.cards.filter(c => S.cards[c.id]).length;
    const known = u.cards.filter(c => (S.cards[c.id] || {}).box >= MASTERED).length;
    const open = openUnit === u.id;
    return `<section class="unit">
      <button class="uhead" data-u="${u.id}" aria-expanded="${open}">
        <h3 lang="cy">${esc(u.title)}</h3>
        <p>${esc(u.en)}${S.focus === u.id ? ` · <span class="focus-tag">Learning next</span>` : ""}</p>
        <span class="prog">${seen}/${u.cards.length} started<br>${known} well known</span>
      </button>
      ${open ? `<div class="ubody">
        ${u.cards.map(c => {
          const b = (S.cards[c.id] || {}).box || 0;
          return `<div class="phr"><span class="cy" lang="cy">${esc(c.cy)}</span><span class="en">${esc(c.en)} · <em>${esc(c.say)}</em></span>
            <span class="side"><span class="dots" title="${b ? "Box " + b + " of 7" : "Not started"}">${[1, 2, 3, 4].map(i => `<i class="${b >= i ? "on" : ""}"></i>`).join("")}</span>
            ${welshVoice ? `<button class="mini" data-say="${esc(c.cy)}" aria-label="Play ${esc(c.cy)}">${PLAY_SVG}</button>` : ""}</span></div>`;
        }).join("")}
        ${seen < u.cards.length && S.focus !== u.id ? `<div class="row" style="padding-top:10px"><button class="ghost" data-focus="${u.id}">Learn this unit next</button></div>` : ""}
      </div>` : ""}
    </section>`;
  }).join("")).join("");
  main.querySelectorAll("[data-u]").forEach(b => b.onclick = () => { openUnit = openUnit === b.dataset.u ? null : b.dataset.u; render(); });
  main.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
  main.querySelectorAll("[data-focus]").forEach(b => b.onclick = () => { S.focus = b.dataset.focus; save(); tab = "practise"; render(); });
}

function renderSounds() {
  main.innerHTML = `<p class="how">Each phrase has a sound-it-out spelling. Capitals mark the stressed syllable, which is nearly always the second to last. These are the letters that work differently from English.</p>` +
    SOUNDS.map(s => `<section class="sound">
      <h3><span class="letters" lang="cy">${esc(s.letters)}</span><span class="sp">${esc(s.sp)}</span></h3>
      <p>${esc(s.body)}</p>
      <div class="ex">${s.ex.map(([w, m]) => welshVoice
        ? `<button data-say="${esc(w)}" lang="cy">${esc(w)}${m ? `<small>${esc(m)}</small>` : ""}</button>`
        : `<button disabled lang="cy" style="cursor:default">${esc(w)}${m ? `<small>${esc(m)}</small>` : ""}</button>`).join("")}</div>
    </section>`).join("") +
    `<p class="key">Other spellings in the guides: <b>ai</b> as in eye, <b>au</b> as in cow, <b>oy</b> as in boy, <b>uh</b> as in the a of about.</p>`;
  main.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
}

function render() {
  document.querySelectorAll("nav.tabs button").forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === tab)));
  if (tab === "practise") (session ? renderCard : renderHome)();
  else if (tab === "units") renderUnits();
  else if (tab === "chat") renderChat();
  else renderSounds();
}

document.querySelectorAll("nav.tabs button").forEach(b => b.onclick = () => { if (tab === "practise" && b.dataset.tab !== "practise") stopRec(); tab = b.dataset.tab; render(); window.scrollTo(0, 0); });
document.addEventListener("keydown", e => {
  if (tab !== "practise" || !session || e.target.tagName === "SELECT") return;
  const it = current(); if (!it) return;
  if (it.kind === "new" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); introduceDone(); return; }
  if (!session.revealed && (e.key === " " || e.key === "Enter")) { e.preventDefault(); reveal(); return; }
  if (session.revealed && ["1", "2", "3"].includes(e.key)) rate(+e.key - 1);
});

/* ---------- Sgwrs: conversation practice with an AI tutor ---------- */
const TOPICS = [
  ["Introduce yourself", "Get me to introduce myself: name, where I live, what I do."],
  ["At the café", "Role-play: you work in a café in Caernarfon and I'm ordering."],
  ["Animals", "Chat with me about animals and my sanctuary."],
  ["The weather", "Chat with me about the weather today."],
  ["My weekend", "Ask me what I did last weekend and what I'm doing next weekend."],
  ["Free chat", "Just chat with me about anything."]
];
const chat = { msgs: [], busy: false, topic: null, help: "lots", error: "" };
let sampleFn = null, sampleChecked = false;
async function getSample() {
  if (sampleChecked) return sampleFn;
  sampleChecked = true;
  try { if (window.claude && window.claude.use) sampleFn = await window.claude.use("sample"); } catch (e) { sampleFn = null; }
  return sampleFn;
}
function tutorBrief() {
  const known = ALL.filter(c => S.cards[c.id]).slice(-40).map(c => c.cy).join(" | ");
  return `You are Nia, a friendly Welsh tutor from Caernarfon, chatting with an adult learner of North Wales Welsh on their phone.
Rules:
- Speak natural, colloquial NORTH Wales Welsh only: dw i, ti'n, dach chi, efo, rŵan, isio, gen i, chdi, dallt, adra, llefrith, nain, taid, licio, medru, be', lle, mi before verbs. Never use Southern forms (nawr, gyda, moyn, mas, gyda fi, dych chi, llaeth, cwrdd, winwns, mam-gu, tad-cu). Say cyfarfod, not cwrdd.
- The learner is a beginner. Use short sentences (one or two per reply) and common words. Ask one simple question each time to keep the conversation going.
- English help level: ${chat.help === "lots" ? "give a full English translation of your Welsh" : "give English only for words a beginner probably doesn't know"}.
- If the learner wrote Welsh with a mistake (grammar, mutation, wrong word, Southern form), give one gentle correction. If they wrote English, show how to say it in Welsh. Don't correct missing accents or capital letters.
- Be warm and encouraging. Never lecture.
- Phrases the learner has practised recently: ${known || "(none yet)"}. Reuse these where natural.
Reply with JSON only, no other text:
{"cy": "your reply in Welsh", "en": "English help as instructed (may be empty)", "fix": null or {"yours": "what they wrote", "better": "corrected Welsh", "why": "short reason in English"}, "try": ["two short Welsh replies the learner could give next, each with English in brackets"]}`;
}
async function sendChat(text) {
  const fn = await getSample();
  if (!fn) { chat.error = "unavailable"; render(); return; }
  if (text) chat.msgs.push({ role: "user", text });
  chat.busy = true; chat.error = ""; render();
  const convo = chat.msgs.map(m => ({ role: m.role, content: m.role === "user" ? m.text : JSON.stringify({ cy: m.cy, en: m.en }) }));
  const opening = `${tutorBrief()}\n\nScenario: ${chat.topic ? chat.topic[1] : "Free chat."}`;
  const input = convo.length ? [{ role: "user", content: opening + "\n\nThe learner says: " + convo[0].content }, ...convo.slice(1)]
                             : [{ role: "user", content: opening + "\n\nStart the conversation with a short greeting and a first question." }];
  try {
    const r = await fn.json(input, { modelTier: "default", cache: false });
    const v = r && typeof r === "object" && "cy" in r ? r : (r && r.value) || r;
    chat.msgs.push({ role: "assistant", cy: String(v.cy || ""), en: String(v.en || ""), fix: v.fix || null, try: Array.isArray(v.try) ? v.try.slice(0, 3) : [] });
  } catch (e) {
    chat.error = e && e.code === "not_granted" ? "denied" : e && e.code === "rate_limited" ? "busy" : "failed";
    if (text) { chat.msgs.pop(); chat.draft = text; }
  }
  chat.busy = false; render();
  const log = document.getElementById("chatlog"); if (log) log.scrollTop = log.scrollHeight;
}
function renderChat() {
  const inApp = !(window.claude && window.claude.use);
  if (inApp || chat.error === "unavailable") {
    main.innerHTML = `<section class="today"><h2>Sgwrs efo Nia</h2>
      <p class="how">Nia is an AI conversation tutor who chats with you in North Wales Welsh and corrects you gently. She runs through your Claude account, so she lives in the web version of Gogledd, not in this phone app. Open the web version in Chrome or the Claude app on your phone to chat with her. Your phrase progress there is separate from this app.</p></section>`;
    return;
  }
  if (!chat.topic) {
    main.innerHTML = `<section class="today"><h2>Sgwrs efo Nia</h2>
      <p class="how">Nia is an AI tutor from Caernarfon. Type in Welsh, or in English when you're stuck, and she'll reply in North Wales Welsh and correct you gently. She's a computer, so she can make mistakes. Treat her as practice, not as the final word.</p>
      <div class="settings"><label for="help">English help</label><select id="help"><option value="lots" ${chat.help === "lots" ? "selected" : ""}>Translate everything</option><option value="some" ${chat.help === "some" ? "selected" : ""}>Only hard words</option></select></div>
      <div class="topics">${TOPICS.map((t, i) => `<button class="ghost" data-topic="${i}">${esc(t[0])}</button>`).join("")}</div></section>`;
    document.getElementById("help").onchange = e => { chat.help = e.target.value; };
    main.querySelectorAll("[data-topic]").forEach(b => b.onclick = () => { chat.topic = TOPICS[+b.dataset.topic]; chat.msgs = []; sendChat(""); });
    return;
  }
  const errText = { denied: "Nia needs your permission to use Claude. Allow it when the page asks, then try again.", busy: "Nia is getting a lot of messages. Wait a minute and try again.", failed: "That message didn't go through. Try sending it again." }[chat.error] || "";
  main.innerHTML = `<div class="session-bar"><button class="ghost" id="endchat">New topic</button><small>${esc(chat.topic[0])}</small></div>
    <section class="chatlog" id="chatlog">${chat.msgs.map((m, i) => m.role === "user"
      ? `<div class="bubble me" lang="cy">${esc(m.text)}</div>`
      : `<div class="bubble nia">
          ${m.fix && m.fix.better ? `<div class="fix"><span>Better:</span> <b lang="cy">${esc(m.fix.better)}</b>${m.fix.why ? `<small>${esc(m.fix.why)}</small>` : ""}</div>` : ""}
          <div class="cy" lang="cy">${esc(m.cy)}</div>${m.en ? `<div class="en">${esc(m.en)}</div>` : ""}
          ${welshVoice ? `<button class="mini" data-say="${esc(m.cy)}" aria-label="Play">${PLAY_SVG}</button>` : ""}
          ${i === chat.msgs.length - 1 && m.try && m.try.length ? `<div class="tries">${m.try.map(t => `<button class="try" data-try="${esc(t.replace(/\s*\(.*\)\s*$/, ""))}">${esc(t)}</button>`).join("")}</div>` : ""}
        </div>`).join("")}
      ${chat.busy ? `<div class="bubble nia typing">Nia is typing…</div>` : ""}
      ${errText ? `<div class="cue">${esc(errText)}</div>` : ""}
    </section>
    <form class="composer" id="composer"><label for="say" class="sr">Your reply</label><input id="say" autocomplete="off" placeholder="Type your reply in Welsh…" value="${esc(chat.draft || "")}"><button class="primary" ${chat.busy ? "disabled" : ""}>Send</button></form>`;
  chat.draft = "";
  document.getElementById("endchat").onclick = () => { chat.topic = null; chat.msgs = []; chat.error = ""; render(); };
  main.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say));
  main.querySelectorAll("[data-try]").forEach(b => b.onclick = () => { const f = document.getElementById("say"); f.value = b.dataset.try; f.focus(); });
  document.getElementById("composer").onsubmit = e => { e.preventDefault(); const v = document.getElementById("say").value.trim(); if (v && !chat.busy) sendChat(v); };
  const log = document.getElementById("chatlog"); if (log) log.scrollTop = log.scrollHeight;
}

render();
initDb();
