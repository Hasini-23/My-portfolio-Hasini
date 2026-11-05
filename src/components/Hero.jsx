import React from 'react';
import { CloudLightning, Sparkles, Code, Cpu, Layers, Quote, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '8.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Headline & Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Challenge Tag */}
            <div>
              <div className="glass-badge" style={{ padding: '0.4rem 0.9rem' }}>
                <CloudLightning size={15} color="#C4B5FD" className="animate-pulse-dot" />
                <span>AWS Student Builder Challenge 2026</span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#A78BFA' }}></span>
                <span style={{ color: '#DDD6FE', fontFamily: 'var(--font-mono)' }}>Amrita Vishwa Vidyapeetham</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
              Transforming Ideas Into <br />
              <span className="text-gradient">Purposeful Intelligence.</span>
            </h1>

            {/* Dynamic Title Subtitle */}
            <p style={{ fontSize: '1.1rem', color: '#DDD6FE', fontWeight: '500' }}>
              {personalInfo.fullTitle}
            </p>

            <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.7, maxWidth: '38rem' }}>
              I am a curious, ambitious Computer Science undergraduate at <strong>Amrita Vishwa Vidyapeetham</strong> specializing in Artificial Intelligence and Machine Learning. Driven by hands-on experimentation, I believe being a beginner is the fertile launchpad for every meaningful innovation.
            </p>

            {/* Personal Motto Quotation Card */}
            <div className="glass-card" style={{
              padding: '1.25rem 1.5rem',
              borderLeft: '4px solid #8B5CF6',
              maxWidth: '36rem',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <Quote size={24} color="#A78BFA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#F5F3FF', fontWeight: '600', lineHeight: 1.5 }}>
                    "{personalInfo.motto}"
                  </p>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#A78BFA', marginTop: '0.35rem', fontFamily: 'var(--font-mono)' }}>
                    — Hasini Pathan's Core Philosophy
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', paddingTop: '0.5rem' }}>
              <a href="#ai-lab" className="btn-primary">
                <Sparkles size={16} />
                Launch AI Superpower Lab
              </a>
              <a href="#projects" className="glass-button">
                <Code size={16} />
                View Projects
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

          </div>

          {/* Right Column: Visual Persona & Specs Card */}
          <div style={{ position: 'relative' }}>
            
            {/* Ambient Aura Background */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2))',
              borderRadius: '2rem',
              filter: 'blur(30px)',
              zIndex: 0
            }}></div>

            {/* Main Interactive Profile Card */}
            <div className="glass-card" style={{
              position: 'relative',
              zIndex: 1,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid rgba(167, 139, 250, 0.35)'
            }}>
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '1.25rem',
                  background: 'linear-gradient(135deg, #8B5CF6, #6366F1, #C4B5FD)',
                  padding: '2px',
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.35)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#0D091F',
                    borderRadius: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Cpu size={32} color="#C4B5FD" />
                  </div>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF' }}>{personalInfo.name}</h2>
                  <p style={{ fontSize: '0.8rem', color: '#A78BFA', fontFamily: 'var(--font-mono)' }}>{personalInfo.college}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }}></span>
                    <span style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: '500' }}>Active First-Year Undergraduate</span>
                  </div>
                </div>
              </div>

              {/* Quick Spec Matrix */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem'
              }}>
                <div style={{ padding: '0.85rem', background: 'rgba(26, 17, 58, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#A78BFA', fontFamily: 'var(--font-mono)', display: 'block' }}>Specialization</span>
                  <strong style={{ fontSize: '0.85rem', color: '#FFFFFF', marginTop: '0.25rem', display: 'block' }}>AI & Machine Learning</strong>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(26, 17, 58, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#A78BFA', fontFamily: 'var(--font-mono)', display: 'block' }}>Cohort</span>
                  <strong style={{ fontSize: '0.85rem', color: '#FFFFFF', marginTop: '0.25rem', display: 'block' }}>B.Tech 2025–2029</strong>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(26, 17, 58, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#A78BFA', fontFamily: 'var(--font-mono)', display: 'block' }}>Current Focus</span>
                  <strong style={{ fontSize: '0.85rem', color: '#FFFFFF', marginTop: '0.25rem', display: 'block' }}>Python, DSA & Cloud</strong>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(26, 17, 58, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#A78BFA', fontFamily: 'var(--font-mono)', display: 'block' }}>Location</span>
                  <strong style={{ fontSize: '0.85rem', color: '#FFFFFF', marginTop: '0.25rem', display: 'block' }}>{personalInfo.location}</strong>
                </div>
              </div>

              {/* Cloud Badge */}
              <div style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                background: 'rgba(30, 20, 68, 0.5)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DDD6FE' }}>
                  <Layers size={14} color="#A78BFA" /> Cloud Native Delivery
                </span>
                <span style={{ color: '#38BDF8', fontWeight: '600' }}>AWS Amplify Ready</span>
              </div>

              {/* Repository Footer Link */}
              <div style={{
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: '#A78BFA'
              }}>
                <span>github.com/Hasini-23</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#DDD6FE', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Visit Repo <ExternalLink size={12} />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
