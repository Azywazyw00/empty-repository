
/* ---------- Course content (North Wales spoken forms) ---------- */
const UNITS = [
 { id: "u1", title: "Cyfarch", en: "Greetings", cards: [
  { id: "u1_1", en: "Good morning", cy: "Bore da", say: "BOR-eh DAH" },
  { id: "u1_2", en: "Good afternoon", cy: "Pnawn da", say: "PNOWN DAH", note: "Short for prynhawn. Nobody says the full word in everyday speech." },
  { id: "u1_3", en: "How are you? (to a friend)", cy: "Sut wyt ti?", say: "sɨt OOT tee", note: "The u in sut is the Northern sound ɨ (see Seiniau). You'll also hear Su'mae? for a quick hello." },
  { id: "u1_4", en: "How are you? (polite, or to more than one person)", cy: "Sut dach chi?", say: "sɨt DAKH khee", note: "Dach chi is the Northern spoken form. The South says dych chi." },
  { id: "u1_5", en: "Very well, thanks", cy: "Da iawn, diolch", say: "dah YOWN, DEE-olkh" },
  { id: "u1_6", en: "And you? (to a friend)", cy: "A chdi?", say: "ah KHDEE", note: "Chdi is a very Northern way of saying 'you'. It marks you out as a Gog straight away." },
  { id: "u1_7", en: "Thank you very much", cy: "Diolch yn fawr", say: "DEE-olkh un VOWR", note: "Mawr (big) becomes fawr after yn. This change is called soft mutation." },
  { id: "u1_8", en: "Bye for now", cy: "Hwyl rŵan", say: "HOO-il ROO-an", note: "Rŵan (now) is the classic Northern word. The South says nawr." },
  { id: "u1_9", en: "See you later (to a friend)", cy: "Wela i di wedyn", say: "WEL-ah ee dee WED-in" }
 ]},
 { id: "u2", title: "Amdana i", en: "About me", cards: [
  { id: "u2_1", en: "My name is Az", cy: "Az ydy fy enw i", say: "az UH-dee vuh EN-oo ee", note: "Also common: Az dw i (I'm Az)." },
  { id: "u2_2", en: "I'm from Caernarfon", cy: "Dw i'n dod o Gaernarfon", say: "doo een DOHD oh gire-NAR-von", note: "After o (from), C softens to G. Swap in your own town." },
  { id: "u2_3", en: "I live in Bali", cy: "Dw i'n byw yn Bali", say: "doo een BYOO un BAH-lee", note: "Welsh place names change after yn (yng Nghaernarfon). Foreign names are usually left alone." },
  { id: "u2_4", en: "I'm learning Welsh", cy: "Dw i'n dysgu Cymraeg", say: "doo een DUS-gɨ kum-RAIG" },
  { id: "u2_5", en: "I'm vegan", cy: "Dw i'n figan", say: "doo een VEE-gan" },
  { id: "u2_6", en: "I work with animals", cy: "Dw i'n gweithio efo anifeiliaid", say: "doo een GWAITH-yo EH-vo an-ee-VAIL-yaid", note: "Efo (with) is Northern. The South says gyda." },
  { id: "u2_7", en: "I don't speak much Welsh yet", cy: "Dw i ddim yn siarad llawer o Gymraeg eto", say: "doo ee DHIM un SHAR-ad HLAU-er oh gum-RAIG EH-to", note: "In fast speech: Dw i'm yn siarad… Cymraeg softens to Gymraeg after o." },
  { id: "u2_8", en: "Can you speak more slowly, please?", cy: "Fedrwch chi siarad yn arafach, plîs?", say: "VED-rookh khee SHAR-ad un ar-AV-akh, pleess", note: "Medru (to be able) is the Northern verb. The South prefers gallu." }
 ]},
 { id: "u3", title: "Geiriau'r Gogledd", en: "Northern essentials", cards: [
  { id: "u3_1", en: "I want a cuppa", cy: "Dw i isio paned", say: "doo ee ISH-o PAN-ed", note: "No 'n after Dw i with isio. Paned is the everyday word for a cup of tea or coffee." },
  { id: "u3_2", en: "Do you want a cuppa? (polite)", cy: "Dach chi isio paned?", say: "DAKH khee ISH-o PAN-ed" },
  { id: "u3_3", en: "I understand", cy: "Dw i'n dallt", say: "doo een DAHLT", note: "Dallt is Northern for deall." },
  { id: "u3_4", en: "I don't understand", cy: "Dw i ddim yn dallt", say: "doo ee DHIM un DAHLT", note: "Often squashed to Dw i'm yn dallt." },
  { id: "u3_5", en: "I have a cat", cy: "Mae gen i gath", say: "my GEN ee GAHTH", note: "Mae gen i (I have) is Northern; the South says mae gyda fi. Cath softens to gath." },
  { id: "u3_6", en: "Have you got a dog? (to a friend)", cy: "Oes gen ti gi?", say: "OYS gen tee GEE", note: "Answer Oes (yes) or Nac oes (no). Ci softens to gi." },
  { id: "u3_7", en: "Where's the shop?", cy: "Lle mae'r siop?", say: "HLEH mire SHOP", note: "Lle (where) is the everyday Northern word. Ble is used more in the South." },
  { id: "u3_8", en: "What are you doing now?", cy: "Be' ti'n neud rŵan?", say: "beh teen NAYD ROO-an", note: "Be' is short for beth, neud for gwneud." }
 ]},
 { id: "u4", title: "Bwyd a diod", en: "Food and drink", cards: [
  { id: "u4_1", en: "I'm hungry", cy: "Mae gen i isio bwyd", say: "my gen ee ISH-o BOO-id", note: "A Northern idiom: literally 'I have a want of food'." },
  { id: "u4_2", en: "Can I have a coffee with oat milk, please?", cy: "Ga i goffi efo llefrith ceirch, plîs?", say: "gah ee GOF-ee EH-vo HLEV-rith KAIRKH, pleess", note: "Llefrith is Northern for milk; the South says llaeth. Ceirch means oats." },
  { id: "u4_3", en: "I don't eat meat", cy: "Dw i ddim yn bwyta cig", say: "doo ee DHIM un BOO-ee-ta KEEG" },
  { id: "u4_4", en: "Is there meat in this?", cy: "Oes 'na gig yn hwn?", say: "OYS na GEEG un HOON", note: "Cig softens to gig after oes 'na." },
  { id: "u4_5", en: "Is there milk in this?", cy: "Oes 'na lefrith yn hwn?", say: "OYS na LEV-rith un HOON", note: "Llefrith softens to lefrith: LL becomes a plain L." },
  { id: "u4_6", en: "Delicious!", cy: "Blasus!", say: "BLAS-is", note: "The u here is the Northern ɨ sound, close to 'is'." },
  { id: "u4_7", en: "I'm tired", cy: "Dw i wedi blino", say: "doo ee WED-ee BLEE-no" }
 ]},
 { id: "u5", title: "Anifeiliaid", en: "Animals", cards: [
  { id: "u5_1", en: "The pigs are happy", cy: "Mae'r moch yn hapus", say: "mire MOKH un HAP-is" },
  { id: "u5_2", en: "The cow is in the field", cy: "Mae'r fuwch yn y cae", say: "mire VIOOKH un uh KYE", note: "Buwch is feminine, so it softens to fuwch after 'r (the)." },
  { id: "u5_3", en: "There are six sheep in the field", cy: "Mae 'na chwe dafad yn y cae", say: "my na KHWEH DAV-ad un uh KYE", note: "Chwech becomes chwe before a noun, and the noun stays singular after a number." },
  { id: "u5_4", en: "The goat is naughty", cy: "Mae'r afr yn ddrwg", say: "mire AH-vr un DHROOG", note: "Gafr is feminine: the G drops after 'r. Drwg softens to ddrwg after yn." },
  { id: "u5_5", en: "The dog is sleeping", cy: "Mae'r ci'n cysgu", say: "mire KEEN KUS-gɨ" },
  { id: "u5_6", en: "The hens are eating", cy: "Mae'r ieir yn bwyta", say: "mire YAIR un BOO-ee-ta", note: "Iâr is one hen, ieir is hens." },
  { id: "u5_7", en: "I have an animal sanctuary in Bali", cy: "Mae gen i noddfa anifeiliaid yn Bali", say: "my gen ee NODH-va an-ee-VAIL-yaid un BAH-lee" },
  { id: "u5_8", en: "Be kind to animals", cy: "Byddwch yn garedig wrth anifeiliaid", say: "BUDH-ookh un gar-ED-ig OORTH an-ee-VAIL-yaid", note: "Caredig wrth means kind to. Caredig softens to garedig after yn." }
 ]},
 { id: "u6", title: "Y tywydd", en: "The weather", cards: [
  { id: "u6_1", en: "What's the weather like?", cy: "Sut mae'r tywydd?", say: "sɨt mire TUH-widh" },
  { id: "u6_2", en: "It's raining", cy: "Mae hi'n bwrw glaw", say: "my heen BOO-roo GLAU" },
  { id: "u6_3", en: "It's lovely today", cy: "Mae hi'n braf heddiw", say: "my heen BRAHV HEDH-ee-oo" },
  { id: "u6_4", en: "It's cold", cy: "Mae hi'n oer", say: "my heen OYR" },
  { id: "u6_5", en: "It's hot", cy: "Mae hi'n boeth", say: "my heen BOYTH", note: "Poeth softens to boeth after yn." },
  { id: "u6_6", en: "It's windy", cy: "Mae hi'n wyntog", say: "my heen WUN-tog", note: "Gwyntog loses its G after yn." },
  { id: "u6_7", en: "It was cold yesterday", cy: "Roedd hi'n oer ddoe", say: "roydh heen OYR DHOY" }
 ]},
 { id: "u7", title: "Holi", en: "Asking questions", cards: [
  { id: "u7_1", en: "Where do you live? (to a friend)", cy: "Lle wyt ti'n byw?", say: "HLEH oot teen BYOO", note: "In quick speech: Lle ti'n byw?" },
  { id: "u7_2", en: "Do you speak Welsh? (polite)", cy: "Dach chi'n siarad Cymraeg?", say: "DAKH kheen SHAR-ad kum-RAIG" },
  { id: "u7_3", en: "Yes (I do)", cy: "Ydw", say: "UH-doo", note: "Welsh has no single word for yes. You answer with the verb. In the North you'll often hear Yndw." },
  { id: "u7_4", en: "No (I don't)", cy: "Nac ydw", say: "NAK UH-doo", note: "Often shortened to Nac'dw." },
  { id: "u7_5", en: "What time is it?", cy: "Faint o'r gloch ydy hi?", say: "VYNT oar GLOKH UH-dee hee" },
  { id: "u7_6", en: "How much is it?", cy: "Faint ydy o?", say: "VYNT UH-dee oh", note: "O (it/him) is Northern. The South says e." },
  { id: "u7_7", en: "Who is that?", cy: "Pwy ydy hwnna?", say: "POO-ee UH-dee HOON-a" },
  { id: "u7_8", en: "Why?", cy: "Pam?", say: "PAM" }
 ]},
 { id: "u8", title: "Ddoe", en: "Yesterday (past tense)", cards: [
  { id: "u8_1", en: "What did you do yesterday?", cy: "Be' wnest ti ddoe?", say: "beh WNEST tee DHOY" },
  { id: "u8_2", en: "I went to Bangor", cy: "Es i i Fangor", say: "ES ee ee VANG-or", note: "Bangor softens to Fangor after i (to)." },
  { id: "u8_3", en: "I didn't go", cy: "Es i ddim", say: "ES ee DHIM" },
  { id: "u8_4", en: "I had lunch", cy: "Ges i ginio", say: "GES ee GIN-yo", note: "Cinio softens to ginio as the object of the verb." },
  { id: "u8_5", en: "I saw a fox", cy: "Welais i lwynog", say: "WEL-ice ee LOO-ee-nog", note: "Said Weles i or Welis i in the North. Llwynog softens to lwynog." },
  { id: "u8_6", en: "Did you have a good time? (to a friend)", cy: "Gest ti amser da?", say: "GEST tee AM-ser DAH" },
  { id: "u8_7", en: "It was great", cy: "Roedd o'n wych", say: "roydh OHN WEEKH", note: "Gwych loses its G after yn ('n)." }
 ]}
];

const SOUNDS = [
 { letters: "ll", sp: "written HL in the guides", body: "Put your tongue where you'd say an English L, keep it there, and blow air out past the sides of your tongue. No voice, just a hiss. It is one sound, not 'thl' or 'cl'.", ex: [["llaw","hand"],["Llanberis",""],["llefrith","milk"],["dallt","understand"]] },
 { letters: "ch", sp: "KH", body: "The sound in Scottish loch or German Bach. Friction at the back of the mouth. Never 'tch' as in church.", ex: [["chwech","six"],["diolch","thanks"],["coch","red"],["chdi","you"]] },
 { letters: "dd", sp: "DH", body: "The voiced 'th' in this and that. Plain th in Welsh is always the voiceless sound in thin.", ex: [["heddiw","today"],["ddoe","yesterday"],["Gogledd","north"],["noddfa","sanctuary"]] },
 { letters: "u and y", sp: "ɨ", body: "The Northern hallmark. Say 'ee', then pull your tongue back towards the middle of your mouth without rounding your lips. The South says a plain 'ee'. Y in the last syllable of a word gets this sound too; elsewhere y is usually 'uh'.", ex: [["sut","how"],["tŷ","house"],["dysgu","learn"],["Cymru","Wales"]] },
 { letters: "rh", sp: "HR", body: "A rolled r with a puff of breath at the start.", ex: [["rhaid","must"],["rhedeg","run"],["rhif","number"]] },
 { letters: "f and ff", sp: "V / F", body: "A single f is always a v sound. Ff is the English f.", ex: [["fawr","big"],["ffermwr","farmer"],["fuwch","cow"]] },
 { letters: "w", sp: "OO", body: "W is often a vowel, like the oo in moon. Before another vowel it's a w as in English.", ex: [["cwm","valley"],["bwrw","to rain"],["wedyn","later"]] },
 { letters: "si", sp: "SH", body: "Si before a vowel sounds like English sh.", ex: [["siop","shop"],["siarad","speak"],["isio","want"]] }
];

/* ---------- Spaced review ---------- */
const DAY = 86400000;
const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // days for boxes 1..7
const MASTERED = 4;
const ALL = UNITS.flatMap(u => u.cards.map(c => ({ ...c, unit: u.id })));
const BY_ID = Object.fromEntries(ALL.map(c => [c.id, c]));
const LS_KEY = "gogledd_v2";
let tab = "practise", session = null, openUnit = null;
const main = document.getElementById("main");

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
function advance() { session.pos++; session.done++; session.revealed = false; render(); }
function reveal() { if (!session || session.revealed) return; session.revealed = true; render(); const it = current(); if (it) speak(BY_ID[it.id].cy); }

/* ---------- Rendering ---------- */
function esc(s) { return String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])); }
function sayHtml(s) { return esc(s).replace(/\b([A-ZɨŴ]{2,}[A-Zɨ]*)\b/g, "<b>$1</b>"); }
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
  const focusU = S.focus && UNITS.find(u => u.id === S.focus);
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
  const unit = UNITS.find(u => u.id === c.unit);
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
      <button class="primary" id="ok">I've said it. Next</button>`;
  } else {
    body = `
      <div class="kind"><span>${it.kind === "repeat" ? "Once more" : "Say it in Welsh"}</span><span>${esc(unit.title)}</span></div>
      <div class="prompt">${esc(c.en)}</div>
      ${session.revealed ? answer + `
        <div class="rate">
          <button class="r-miss" id="r0">Missed<small>again soon</small></button>
          <button class="r-shaky" id="r1">Shaky<small>tomorrow</small></button>
          <button class="r-got" id="r2">Got it<small>${it.kind === "repeat" ? "tomorrow" : "later"}</small></button>
        </div>
        <div class="keys">Keys: 1 missed · 2 shaky · 3 got it</div>`
      : `<div class="cue">Say it out loud first. Then check.</div>
        <button class="primary" id="rev">Show answer</button>
        <div class="keys">Key: space</div>`}`;
  }
  main.innerHTML = bar + `<section class="card">${body}</section>`;
  document.getElementById("quit").onclick = () => { session = null; render(); };
  const play = document.getElementById("play"); if (play) play.onclick = () => speak(c.cy);
  const ok = document.getElementById("ok"); if (ok) ok.onclick = introduceDone;
  const rv = document.getElementById("rev"); if (rv) { rv.onclick = reveal; rv.focus({ preventScroll: true }); }
  [0, 1, 2].forEach(r => { const b = document.getElementById("r" + r); if (b) b.onclick = () => rate(r); });
}

function renderUnits() {
  main.innerHTML = `<p class="how">Tap a unit to see its phrases. Dots show how well you know each one.</p>` + UNITS.map(u => {
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
  }).join("");
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
  else renderSounds();
}

document.querySelectorAll("nav.tabs button").forEach(b => b.onclick = () => { tab = b.dataset.tab; render(); window.scrollTo(0, 0); });
document.addEventListener("keydown", e => {
  if (tab !== "practise" || !session || e.target.tagName === "SELECT") return;
  const it = current(); if (!it) return;
  if (it.kind === "new" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); introduceDone(); return; }
  if (!session.revealed && (e.key === " " || e.key === "Enter")) { e.preventDefault(); reveal(); return; }
  if (session.revealed && ["1", "2", "3"].includes(e.key)) rate(+e.key - 1);
});

render();
initDb();
