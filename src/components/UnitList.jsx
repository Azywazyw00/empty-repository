import React from 'react';
import { ChevronRight, CheckCircle2, PlayCircle, BookOpen } from 'lucide-react';

export function UnitList({ lessons, progress, onSelectUnit }) {
  return (
    <div className="unit-list-container">
      <div className="section-intro">
        <h2>Llwybr Siarad • Speaking Pathway</h2>
        <p>Step-by-step verbal practice focusing on conversational North Welsh dialect words and pronunciation.</p>
      </div>

      <div className="units-grid">
        {lessons.map((unit, index) => {
          const unitPhrases = unit.phrases || [];
          const completedInUnit = unitPhrases.filter(
            p => (progress[p.id]?.score || 0) >= 70
          ).length;
          const isFinished = unitPhrases.length > 0 && completedInUnit === unitPhrases.length;

          return (
            <div
              key={unit.id}
              className={`unit-card ${isFinished ? 'unit-complete' : ''}`}
              onClick={() => onSelectUnit(unit)}
            >
              <div className="unit-card-header">
                <span className="unit-number">Uned {index + 1}</span>
                <span className="unit-level">{unit.level}</span>
              </div>

              <h3 className="unit-title">{unit.title}</h3>
              <p className="unit-subtitle">{unit.subtitle}</p>
              <p className="unit-desc">{unit.description}</p>

              <div className="unit-card-footer">
                <div className="progress-indicator">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${unitPhrases.length > 0 ? (completedInUnit / unitPhrases.length) * 100 : 0}%`
                      }}
                    />
                  </div>
                  <span className="progress-text">
                    {completedInUnit} / {unitPhrases.length} wedi meistroli
                  </span>
                </div>

                <button className="start-unit-btn">
                  {isFinished ? (
                    <>
                      <CheckCircle2 size={18} className="text-green" />
                      <span>Adolygu</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle size={18} />
                      <span>Ymarfer</span>
                    </>
                  )}
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
