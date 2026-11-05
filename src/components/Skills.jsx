import React from 'react';
import { Cpu, Code2, Brain, Cloud } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} color="#C4B5FD" />;
      case 'Brain': return <Brain size={22} color="#C4B5FD" />;
      case 'Cloud': return <Cloud size={22} color="#C4B5FD" />;
      default: return <Cpu size={22} color="#C4B5FD" />;
    }
  };

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <Cpu size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Skills & Foundations Matrix
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            Categorized with full transparency: actual coding foundations, active data science practice, and technologies in progress.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {skillsData.map((category, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                paddingBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.65rem',
                    background: 'rgba(46, 16, 101, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF' }}>{category.category}</h3>
                </div>
                <span style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#C4B5FD',
                  background: 'rgba(30, 20, 68, 0.8)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.35rem',
                  border: '1px solid rgba(139, 92, 246, 0.25)'
                }}>
                  Verified
                </span>
              </div>

              {/* Skill Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '600', color: '#FFFFFF', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: item.type === 'Active Builder' ? '#34D399' : item.type === 'Future Horizon' ? '#38BDF8' : '#A78BFA'
                        }}></span>
                        {item.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C4B5FD' }}>
                        {item.level}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
