import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { WELSH_SOUNDS } from '../utils/welshPhonetics';
import { useSpeech } from '../hooks/useSpeech';

export function SoundClinic() {
  const { speak, isSpeaking } = useSpeech();
  const [activeSoundKey, setActiveSoundKey] = useState('ll');

  const soundProfiles = [
    {
      key: 'll',
      title: "The 'LL' Sound",
      ipa: '[ɬ]',
      description: "Voiceless alveolar lateral fricative",
      howToMakeIt: [
        "Place the tip of your tongue firmly against the roof of your mouth, just behind your top front teeth (as if about to say an English 'L').",
        "Keep your vocal cords silent (do not make a humming or buzzing sound).",
        "Firmly blow air out so it hisses around the sides of your tongue.",
        "You will hear a distinct rushing hiss of air—that is the authentic Welsh LL!"
      ],
      sampleWords: [
        { welsh: "Llanberis", meaning: "Town at the foot of Snowdon / Yr Wyddfa" },
        { welsh: "Llaw", meaning: "Hand" },
        { welsh: "Lle", meaning: "Place / Where (Gogledd)" },
        { welsh: "Dallt", meaning: "Understand (Gogledd verb)" }
      ]
    },
    {
      key: 'ch',
      title: "The 'CH' Sound",
      ipa: '[x]',
      description: "Voiceless velar / uvular fricative",
      howToMakeIt: [
        "Position the back of your tongue near the soft palate at the back of your throat.",
        "Do not vibrate your vocal cords.",
        "Exhale steadily so friction builds up at the back of the palate.",
        "Exactly like the Scottish 'loch' in Loch Ness or German 'Bach'."
      ],
      sampleWords: [
        { welsh: "Chwech", meaning: "Six" },
        { welsh: "Chwarae", meaning: "Play" },
        { welsh: "Coch", meaning: "Red (as in Y Ddraig Goch)" },
        { welsh: "Diolch", meaning: "Thank you" }
      ]
    },
    {
      key: 'u',
      title: "Northern 'U' and 'Y'",
      ipa: '[ɨ]',
      description: "Close central unrounded vowel (Gogledd hallmark)",
      howToMakeIt: [
        "In North Wales, the letters 'U' and single-syllable 'Y' have a unique sound distinct from South Wales.",
        "Start by shaping your mouth as if saying 'ee'.",
        "Without moving your lips or rounding them, pull your tongue slightly back into the center of your mouth.",
        "Make a clear, steady vowel sound. It sounds crisper and deeper than English 'ee'."
      ],
      sampleWords: [
        { welsh: "Tŷ", meaning: "House" },
        { welsh: "Dŵr", meaning: "Water" },
        { welsh: "Sul", meaning: "Sunday (Dydd Sul)" },
        { welsh: "Cymru", meaning: "Wales" }
      ]
    },
    {
      key: 'dd',
      title: "The 'DD' Sound",
      ipa: '[ð]',
      description: "Voiced dental fricative",
      howToMakeIt: [
        "Place your tongue gently between your upper and lower teeth.",
        "Vibrate your vocal cords as you exhale gently.",
        "Identical to the soft 'th' in English words like 'this', 'weather', or 'breathe'."
      ],
      sampleWords: [
        { welsh: "Heddiw", meaning: "Today" },
        { welsh: "Braf", meaning: "Pleasant / Fine" },
        { welsh: "Da boch chi", meaning: "Goodbye" },
        { welsh: "Gogledd", meaning: "North" }
      ]
    },
    {
      key: 'rh',
      title: "The 'RH' Sound",
      ipa: '[r̥]',
      description: "Voiceless alveolar trill",
      howToMakeIt: [
        "Curl the tip of your tongue near the alveolar ridge.",
        "Blow air with a whispery breath as you let the tongue flutter/tap.",
        "Think of it as combining a breath of 'h' at the exact same moment as a rolling 'r'."
      ],
      sampleWords: [
        { welsh: "Rŵan", meaning: "Now (North Welsh)" },
        { welsh: "Rhedodd", meaning: "Ran" },
        { welsh: "Rhaid", meaning: "Must / Necessity" }
      ]
    }
  ];

  const currentSound = soundProfiles.find(s => s.key === activeSoundKey) || soundProfiles[0];

  return (
    <div className="clinic-container">
      <div className="section-intro">
        <h2>Labordy Seiniau • Sound Clinic</h2>
        <p>Master the unique phonemes and physical tongue placements of North Welsh speech.</p>
      </div>

      {/* Sound Selection Chips */}
      <div className="sound-chips-row">
        {soundProfiles.map(sound => (
          <button
            key={sound.key}
            className={`sound-chip ${activeSoundKey === sound.key ? 'active' : ''}`}
            onClick={() => setActiveSoundKey(sound.key)}
          >
            <span className="chip-ipa">{sound.ipa}</span>
            <span className="chip-label">{sound.title}</span>
          </button>
        ))}
      </div>

      {/* Sound Detail Card */}
      <div className="sound-profile-card">
        <div className="profile-header">
          <div>
            <span className="ipa-badge">{currentSound.ipa}</span>
            <h3 className="sound-title">{currentSound.title}</h3>
            <p className="sound-phonetic-name">{currentSound.description}</p>
          </div>
        </div>

        {/* Step by Step Placement */}
        <div className="guide-box">
          <h4 className="guide-title">
            <Sparkles size={16} className="text-gold" />
            <span>Sut i'w ynganu • How to form the sound</span>
          </h4>
          <ol className="steps-list">
            {currentSound.howToMakeIt.map((step, idx) => (
              <li key={idx}>
                <span className="step-num">{idx + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Interactive Practice Words */}
        <div className="practice-words-section">
          <h4 className="words-title">Geiriau Ymarfer • Practice Words:</h4>
          <div className="words-grid">
            {currentSound.sampleWords.map((item, idx) => (
              <div 
                key={idx} 
                className="word-card"
                onClick={() => speak(item.welsh, 0.8)}
              >
                <div className="word-card-top">
                  <span className="welsh-word">{item.welsh}</span>
                  <button className="play-word-btn" title="Gwrando">
                    <Volume2 size={16} />
                  </button>
                </div>
                <span className="word-meaning">{item.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
