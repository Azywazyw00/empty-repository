import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeech() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [voices, setVoices] = useState([]);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'cy-GB'; // Standard Welsh locale

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognition.onresult = (event) => {
      let current = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        current += event.results[i][0].transcript;
      }
      setTranscript(current);
    };

    recognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    // Load available voices for TTS
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  // Native TTS Audio playback
  const speak = useCallback((text, rate = 0.85) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Try to find a Welsh voice, fallback to GB voice
    const welshVoice = voices.find(v => v.lang.startsWith('cy') || v.lang.includes('Welsh'));
    const gbVoice = voices.find(v => v.lang === 'en-GB');

    if (welshVoice) {
      utterance.voice = welshVoice;
      utterance.lang = welshVoice.lang;
    } else if (gbVoice) {
      utterance.voice = gbVoice;
      utterance.lang = 'cy-GB';
    } else {
      utterance.lang = 'cy-GB';
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [voices]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      window.speechSynthesis?.cancel(); // Cancel any speech playback before listening
      setTranscript('');
      recognitionRef.current.start();
    } catch (e) {
      console.warn('Speech recognition start failed, restarting:', e);
      try {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      } catch (err) {}
    }
  }, []);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
    } catch (e) {}
  }, []);

  return {
    isListening,
    transcript,
    isSpeaking,
    speechSupported,
    speak,
    startListening,
    stopListening,
    setTranscript
  };
}
