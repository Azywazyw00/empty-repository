import React, { useState, useEffect } from 'react';
import lessonsData from './data/lessons.json';
import { Header } from './components/Header';
import { UnitList } from './components/UnitList';
import { VoiceLab } from './components/VoiceLab';
import { SoundClinic } from './components/SoundClinic';
import './App.css';

export function App() {
  const [activeTab, setActiveTab] = useState('lessons'); // 'lessons' | 'sounds'
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('gogledd_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Calculate total phrase progress
  const allPhrases = lessonsData.flatMap(u => u.phrases || []);
  const totalCount = allPhrases.length;
  const completedCount = allPhrases.filter(p => (progress[p.id]?.score || 0) >= 70).length;

  const handleSaveProgress = (phraseId, result) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [phraseId]: {
          score: Math.max(prev[phraseId]?.score || 0, result.score),
          lastResult: result,
          timestamp: Date.now()
        }
      };
      try {
        localStorage.setItem('gogledd_progress', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  const handleBackToUnits = () => {
    setSelectedUnit(null);
  };

  return (
    <div className="app-container">
      <Header 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedUnit(null);
        }}
        completedCount={completedCount}
        totalCount={totalCount}
      />

      <main className="main-content">
        {activeTab === 'lessons' && (
          selectedUnit ? (
            <VoiceLab
              unit={selectedUnit}
              onBack={handleBackToUnits}
              onSaveProgress={handleSaveProgress}
              existingProgress={progress}
            />
          ) : (
            <UnitList
              lessons={lessonsData}
              progress={progress}
              onSelectUnit={handleSelectUnit}
            />
          )
        )}

        {activeTab === 'sounds' && (
          <SoundClinic />
        )}
      </main>

      <footer className="app-footer">
        <p>Gogledd • Cymraeg y Gogledd • Zero Cloud Spend Speech Engine</p>
      </footer>
    </div>
  );
}

export default App;
