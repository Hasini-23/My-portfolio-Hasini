import React from 'react';
import { UserCheck, GraduationCap, Compass, Hammer, Atom, Sparkle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <GraduationCap size={24} color="#C4B5FD" />,
      title: "Amrita Engineering Rigor",
      desc: "Pursuing B.Tech in CSE with AI/ML specialization at Amrita Vishwa Vidyapeetham. Building rock-solid mathematical foundations in linear algebra, multivariable calculus, and algorithmic structures."
    },
    {
      icon: <Compass size={24} color="#C4B5FD" />,
      title: "The Beginner Mindset",
      desc: "I don't view being in my first year as a boundary—it is my greatest advantage. It allows me to question assumptions, experiment fearlessly, and absorb new concepts without legacy constraints."
    },
    {
      icon: <Hammer size={24} color="#C4B5FD" />,
      title: "Hands-on Builder Culture",
      desc: "Theory transforms into knowledge when written and deployed. Actively participating in developer challenges, writing Python scripts, and deploying cloud applications on AWS Amplify."
    },
    {
      icon: <Atom size={24} color="#C4B5FD" />,
      title: "Quantum & AI Ambition",
      desc: "Long-term horizon: contribute to foundational research bridging Artificial Intelligence with Quantum Computing, crafting purpose-driven tools that solve high-impact real world problems."
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <UserCheck size={14} />
            <span>About Hasini</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            The Journey of a Curious Explorer
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            From foundational mathematics and algorithmic logic in Andhra Pradesh to the frontiers of AI research and cloud building.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                background: 'rgba(46, 16, 101, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Authenticity Narrative Banner */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkle size={20} color="#C4B5FD" />
                What Makes My Journey Authentic
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.7 }}>
                In an industry that frequently prizes buzzwords, I prioritize genuine understanding. Every concept I feature in this portfolio represents something I have actually written, debugged, or practiced. My ambition for this challenge and my undergraduate years at <strong>{personalInfo.college}</strong> is continuous momentum: learning without boundaries and building with purpose.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <div style={{
                flex: 1,
                padding: '1.25rem',
                background: 'rgba(26, 17, 58, 0.7)',
                borderRadius: '1rem',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#DDD6FE', fontFamily: 'var(--font-mono)', display: 'block' }}>100%</span>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Honest Skill Representation</span>
              </div>
              <div style={{
                flex: 1,
                padding: '1.25rem',
                background: 'rgba(26, 17, 58, 0.7)',
                borderRadius: '1rem',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#38BDF8', fontFamily: 'var(--font-mono)', display: 'block' }}>AWS</span>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Student Builder Challenge</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
