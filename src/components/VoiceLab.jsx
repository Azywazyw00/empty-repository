import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Mic, 
  MicOff, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  Sparkles, 
  Info,
  HelpCircle,
  Award
} from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech';
import { evaluateWelshSpeech } from '../utils/welshPhonetics';

export function VoiceLab({ unit, onBack, onSaveProgress, existingProgress }) {
  const phrases = unit.phrases || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [evaluation, setEvaluation] = useState(null);
  const [isSlowAudio, setIsSlowAudio] = useState(false);
  const currentPhrase = phrases[currentIndex] || phrases[0];

  const {
    isListening,
    transcript,
    isSpeaking,
    speechSupported,
    speak,
    startListening,
    stopListening
  } = useSpeech();

  // Load existing progress for current phrase if any
  useEffect(() => {
    setEvaluation(null);
    if (existingProgress && existingProgress[currentPhrase.id]) {
      setEvaluation(existingProgress[currentPhrase.id]);
    }
  }, [currentIndex, currentPhrase.id]);

  // When speech recognition ends and we have a transcript, evaluate it
  useEffect(() => {
    if (!isListening && transcript && transcript.trim().length > 0) {
      const result = evaluateWelshSpeech(transcript, currentPhrase.welsh);
      setEvaluation(result);
      if (onSaveProgress) {
        onSaveProgress(currentPhrase.id, result);
      }
    }
  }, [isListening, transcript, currentPhrase.welsh, currentPhrase.id, onSaveProgress]);

  const handleSpeak = () => {
    const speed = isSlowAudio ? 0.7 : (currentPhrase.audioSpeed || 0.85);
    speak(currentPhrase.welsh, speed);
  };

  const handleToggleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      setEvaluation(null);
      startListening();
    }
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="voice-lab-container">
      {/* Top Bar */}
      <div className="lab-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Yn ôl (Back)</span>
        </button>

        <div className="phrase-stepper">
          <span>{currentIndex + 1} o {phrases.length}</span>
          <div className="step-dots">
            {phrases.map((p, idx) => (
              <span
                key={p.id}
                className={`step-dot ${idx === currentIndex ? 'active' : ''} ${
                  existingProgress?.[p.id]?.score >= 70 ? 'passed' : ''
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        <button 
          className={`speed-toggle-btn ${isSlowAudio ? 'active' : ''}`}
          onClick={() => setIsSlowAudio(!isSlowAudio)}
          title="Toglo cyflymder llafar / Toggle slower speech"
        >
          {isSlowAudio ? '0.7x Araf' : '1.0x Arferol'}
        </button>
      </div>

      {/* Main Flashcard */}
      <div className="phrase-card">
        <div className="phrase-tag">
          <Sparkles size={14} className="text-gold" />
          <span>{currentPhrase.dialectFocus}</span>
        </div>

        <h2 className="welsh-text">{currentPhrase.welsh}</h2>
        <p className="phonetic-text">/{currentPhrase.phonetic}/</p>
        <p className="english-text">"{currentPhrase.english}"</p>

        {currentPhrase.notes && (
          <div className="phrase-notes">
            <Info size={16} />
            <span>{currentPhrase.notes}</span>
          </div>
        )}

        {/* Listen Action */}
        <div className="card-actions">
          <button 
            className={`listen-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleSpeak}
          >
            <Volume2 size={22} />
            <span>{isSpeaking ? 'Yn siarad...' : 'Gwrando (Listen)'}</span>
          </button>
        </div>
      </div>

      {/* Mic Section */}
      <div className="mic-section">
        {!speechSupported ? (
          <div className="compat-notice">
            <p>Mae porwr hwn angen caniatâd meicroffon.</p>
            <p className="small">Please allow microphone access in your browser or Android settings.</p>
          </div>
        ) : (
          <>
            <div className={`mic-button-wrapper ${isListening ? 'listening' : ''}`}>
              {isListening && <div className="pulse-ring pulse-1" />}
              {isListening && <div className="pulse-ring pulse-2" />}
              <button 
                className={`mic-btn ${isListening ? 'active' : ''}`}
                onClick={handleToggleListen}
              >
                {isListening ? <MicOff size={36} /> : <Mic size={36} />}
              </button>
            </div>
            
            <p className="mic-instruction">
              {isListening ? 'Yn gwrando... Siaradwch rŵan! (Listening... Speak now!)' : 'Tapiwch y meicroffon i siarad (Tap mic to speak)'}
            </p>

            {isListening && transcript && (
              <div className="live-transcript">
                <span className="live-badge">Llais:</span>
                <span className="transcript-text">"{transcript}"</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Evaluation Feedback */}
      {evaluation && (
        <div className={`evaluation-card ${evaluation.score >= 75 ? 'eval-high' : evaluation.score >= 50 ? 'eval-mid' : 'eval-low'}`}>
          <div className="eval-header">
            <div className="score-badge">
              <span className="score-number">{evaluation.score}%</span>
              <span className="score-label">Sgôr</span>
            </div>
            <div>
              <h3 className="grade-welsh">{evaluation.grade}</h3>
              <p className="grade-english">{evaluation.gradeEn}</p>
            </div>
          </div>

          <p className="eval-feedback">{evaluation.feedback}</p>

          {/* Word Matching Breakdown */}
          {evaluation.wordDetails && evaluation.wordDetails.length > 0 && (
            <div className="word-pills-row">
              {evaluation.wordDetails.map((item, idx) => (
                <span 
                  key={idx} 
                  className={`word-pill ${item.matched ? 'pill-matched' : 'pill-missed'}`}
                >
                  {item.matched ? <Check size={12} /> : null}
                  {item.word}
                </span>
              ))}
            </div>
          )}

          {/* Gogledd Dialect Praise */}
          {evaluation.dialectPraise && (
            <div className="dialect-praise-box">
              <Award size={18} className="text-gold" />
              <span>{evaluation.dialectPraise}</span>
            </div>
          )}

          {/* Phonetic Sound Tips for this specific phrase */}
          {evaluation.phonemeTips && evaluation.phonemeTips.length > 0 && (
            <div className="phoneme-tips-container">
              <div className="tips-title">
                <HelpCircle size={16} />
                <span>Awgrymiadau Ynganu (Pronunciation Clinic):</span>
              </div>
              <div className="tips-list">
                {evaluation.phonemeTips.map((tip, idx) => (
                  <div key={idx} className="tip-chip">
                    <span className="tip-symbol">{tip.symbol} {tip.name}</span>
                    <p className="tip-guide">{tip.guide}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation Footer */}
      <div className="lab-footer">
        <button 
          className="nav-btn prev-btn" 
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ArrowLeft size={18} />
          <span>Blaenorol (Prev)</span>
        </button>

        <button 
          className="nav-btn next-btn" 
          onClick={handleNext}
          disabled={currentIndex === phrases.length - 1}
        >
          <span>Nesaf (Next)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
