import React from 'react';
import { Compass, Sparkles, Volume2, Award } from 'lucide-react';

export function Header({ activeTab, setActiveTab, completedCount, totalCount }) {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand">
          <div className="brand-badge">CY</div>
          <div>
            <h1 className="brand-title">Gogledd</h1>
            <p className="brand-sub">Cymraeg y Gogledd • North Welsh</p>
          </div>
        </div>
        <div className="stats-pill">
          <Award size={18} className="text-gold" />
          <span>{percentage}% Meistroli</span>
        </div>
      </div>

      <nav className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          <Compass size={18} />
          <span>Gwersi (Lessons)</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'sounds' ? 'active' : ''}`}
          onClick={() => setActiveTab('sounds')}
        >
          <Volume2 size={18} />
          <span>Labordy Seiniau (Sound Clinic)</span>
        </button>
      </nav>
    </header>
  );
}
