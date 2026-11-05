import React from 'react';
import { GitCommit, GraduationCap, CloudLightning, Award, Atom } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getMilestoneIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={18} color="#FFFFFF" />;
      case 'CloudLightning': return <CloudLightning size={18} color="#FFFFFF" />;
      case 'Award': return <Award size={18} color="#FFFFFF" />;
      case 'Atom': return <Atom size={18} color="#FFFFFF" />;
      default: return <GitCommit size={18} color="#FFFFFF" />;
    }
  };

  return (
    <section id="milestones" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <GitCommit size={14} />
            <span>Trajectory</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Milestones & Learning Roadmap
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            A disciplined progression of growth from first-year foundational learning to long-term research innovation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{
          maxWidth: '46rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'relative'
        }}>
          {achievementsData.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              
              {/* Timeline Node */}
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: idx === 1 ? 'linear-gradient(135deg, #8B5CF6, #6366F1)' : '#1F153E',
                border: '3px solid #090713',
                boxShadow: idx === 1 ? '0 0 15px rgba(139, 92, 246, 0.6)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getMilestoneIcon(item.icon)}
              </div>

              {/* Timeline Card */}
              <div className="glass-card" style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#DDD6FE',
                    background: 'rgba(46, 16, 101, 0.6)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                  }}>
                    {item.year}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: idx === 1 ? '#34D399' : '#A78BFA'
                  }}>
                    {item.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6 }}>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

