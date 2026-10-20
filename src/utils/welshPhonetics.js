/**
 * Welsh Phonetics & North Welsh (Gogledd) Dialect Evaluation Engine
 * Runs completely on-device with zero cloud costs.
 */

// Normalized comparison removing punctuation and standardizing spaces
export function normalizeWelsh(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/['’]/g, "'")
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Levenshtein distance for fuzzy matching
export function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],     // deletion
          dp[i][j - 1],     // insertion
          dp[i - 1][j - 1]  // substitution
        );
      }
    }
  }
  return dp[m][n];
}

// Key Gogledd vs De dialect word pairs
export const DIALECT_PAIRS = [
  { north: 'rŵan', south: 'nawr', meaning: 'now', tip: "North Wales uses 'rŵan' (South uses 'nawr')." },
  { north: 'efo', south: 'gyda', meaning: 'with', tip: "North Wales uses 'efo' (South uses 'gyda')." },
  { north: 'isio', south: 'eisiau', meaning: 'want', tip: "North Wales uses 'isio' or 'isie' (South uses 'eisiau' or 'moyn')." },
  { north: 'dallt', south: 'deall', meaning: 'understand', tip: "North Wales uses 'dallt' (South uses 'deall')." },
  { north: 'fo', south: 'fe', meaning: 'him/he', tip: "North Wales uses 'fo' (South uses 'fe')." },
  { north: 'paned', south: 'dishgled', meaning: 'cuppa', tip: "North Wales says 'paned' for a cup of tea (South says 'dishgled')." },
  { north: 'lle', south: 'ble', meaning: 'where', tip: "North Wales often drops the 'B' in 'Ble' to say 'Lle'." },
  { north: 'gen i', south: 'gyda fi', meaning: 'I have', tip: "North uses 'mae gen i' (South uses 'mae gyda fi')." },
  { north: 'ydy', south: 'yw', meaning: 'is', tip: "North Wales standardly uses 'ydy' (South often uses 'yw')." }
];

// Special Welsh digraphs and pronunciation tips
export const WELSH_SOUNDS = {
  ll: {
    symbol: '[ɬ]',
    name: "The 'LL' Sound",
    guide: "Put your tongue behind your top teeth as for 'L', then gently blow air around the sides. Do not vibrate your vocal cords."
  },
  ch: {
    symbol: '[x]',
    name: "The 'CH' Sound",
    guide: "A voiceless friction sound at the back of the throat, exactly like Scottish 'loch' or German 'Bach'."
  },
  dd: {
    symbol: '[ð]',
    name: "The 'DD' Sound",
    guide: "Pronounced like the soft 'th' in English 'this', 'that', or 'breathe'."
  },
  rh: {
    symbol: '[r̥]',
    name: "The 'RH' Sound",
    guide: "A trilled 'r' with a puff of breath at the same time."
  },
  u: {
    symbol: '[ɨ]',
    name: "Northern 'U' / 'Y'",
    guide: "In North Wales, 'u' is a high central vowel pronounced further back than English 'ee', without rounded lips."
  }
};

/**
 * Evaluates spoken user transcript against target phrase
 * @param {string} spoken - Transcript from speech recognition
 * @param {string} target - The expected North Welsh phrase
 * @returns {Object} evaluation report
 */
export function evaluateWelshSpeech(spoken, target) {
  const normSpoken = normalizeWelsh(spoken);
  const normTarget = normalizeWelsh(target);

  if (!normSpoken) {
    return {
      score: 0,
      grade: 'Dim llais wedi ei ganfod',
      gradeEn: 'No speech detected',
      feedback: 'Please tap the microphone and speak clearly in Welsh.',
      dialectPraise: null,
      phonemeTips: []
    };
  }

  // Exact or Levenshtein match ratio
  const maxLen = Math.max(normSpoken.length, normTarget.length);
  const dist = levenshteinDistance(normSpoken, normTarget);
  const rawSimilarity = maxLen === 0 ? 1 : (maxLen - dist) / maxLen;
  
  // Word by word analysis
  const targetWords = normTarget.split(' ');
  const spokenWords = normSpoken.split(' ');
  
  let matchedWordCount = 0;
  const wordDetails = targetWords.map(tWord => {
    const isMatched = spokenWords.some(sWord => {
      const wDist = levenshteinDistance(sWord, tWord);
      return wDist <= Math.max(1, Math.floor(tWord.length * 0.3));
    });
    if (isMatched) matchedWordCount++;
    return { word: tWord, matched: isMatched };
  });

  const wordMatchRatio = targetWords.length > 0 ? (matchedWordCount / targetWords.length) : 0;
  
  // Weighted overall score (0 - 100)
  const combinedRatio = (rawSimilarity * 0.4) + (wordMatchRatio * 0.6);
  const score = Math.min(100, Math.max(0, Math.round(combinedRatio * 100)));

  // Identify Gogledd dialect highlights
  let dialectPraise = null;
  for (const pair of DIALECT_PAIRS) {
    if (normTarget.includes(pair.north) && normSpoken.includes(pair.north)) {
      dialectPraise = `Ardderchog! Authentic North Welsh '${pair.north}' recognized! (${pair.tip})`;
      break;
    } else if (normTarget.includes(pair.north) && normSpoken.includes(pair.south)) {
      dialectPraise = `Good attempt! You used the Southern '${pair.south}'. For North Welsh, remember to say '${pair.north}'.`;
      break;
    }
  }

  // Find relevant phoneme tips for this target
  const phonemeTips = [];
  if (normTarget.includes('ll')) phonemeTips.push(WELSH_SOUNDS.ll);
  if (normTarget.includes('ch')) phonemeTips.push(WELSH_SOUNDS.ch);
  if (normTarget.includes('dd')) phonemeTips.push(WELSH_SOUNDS.dd);
  if (normTarget.includes('rh')) phonemeTips.push(WELSH_SOUNDS.rh);
  if (normTarget.includes('u') || normTarget.includes('ŷ')) phonemeTips.push(WELSH_SOUNDS.u);

  // Welsh Grade & Encouragement
  let grade = 'Rhowch gynnig arall';
  let gradeEn = 'Keep practicing!';
  let feedback = 'Try breaking down the words slowly and focusing on the vowels.';

  if (score >= 90) {
    grade = 'Ardderchog!';
    gradeEn = 'Outstanding!';
    feedback = 'Flawless North Welsh pronunciation! Sounds natural and fluent.';
  } else if (score >= 75) {
    grade = 'Da iawn!';
    gradeEn = 'Very good!';
    feedback = 'Clear and easily understood. Great cadence and intonation.';
  } else if (score >= 55) {
    grade = 'Da!';
    gradeEn = 'Good effort!';
    feedback = 'Most words came through well. Polish the tricky sounds and try again!';
  }

  return {
    score,
    grade,
    gradeEn,
    feedback,
    wordDetails,
    dialectPraise,
    phonemeTips,
    spokenRaw: spoken,
    targetRaw: target
  };
}
