import React from 'react';
import { Cloud, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(139, 92, 246, 0.2)',
      padding: '3rem 0',
      background: 'rgba(7, 5, 14, 0.9)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>
        
        {/* Left Column */}
        <div style={{ maxWidth: '28rem' }}>
          <strong style={{ fontSize: '1.15rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            {personalInfo.name}
          </strong>
          <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '0.25rem', fontStyle: 'italic' }}>
            "{personalInfo.motto}"
          </p>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', marginTop: '0.25rem', display: 'block' }}>
            {personalInfo.college} • {personalInfo.degree} ({personalInfo.specialization})
          </span>
        </div>

        {/* Right Column: Attribution Badge & Top Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="glass-badge" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <Cloud size={14} color="#C4B5FD" />
            AWS Student Builder Challenge 2026
          </span>
          <button
            onClick={scrollToTop}
            className="glass-button"
            style={{ padding: '0.55rem', borderRadius: '0.65rem' }}
            title="Back to top"
            aria-label="Back to top of page"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}

