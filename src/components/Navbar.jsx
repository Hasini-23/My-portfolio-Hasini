import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'ai-lab', 'milestones', 'contact'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'AI Lab', href: '#ai-lab', id: 'ai-lab', special: true },
    { label: 'Milestones', href: '#milestones', id: 'milestones' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="container" style={{ height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group text-decoration-none" style={{ textDecoration: 'none' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
            padding: '1px',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: '#090713',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', color: '#DDD6FE', fontSize: '1rem' }}>HP</span>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: '700', fontSize: '1rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                {personalInfo.displayName}
              </span>
              <span style={{
                fontSize: '0.65rem',
                padding: '0.15rem 0.45rem',
                borderRadius: '9999px',
                background: 'rgba(6, 78, 59, 0.6)',
                color: '#34D399',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: 'var(--font-mono)'
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#34D399' }} className="animate-pulse-dot"></span>
                Builder
              </span>
            </div>
            <span style={{ display: 'block', fontSize: '0.7rem', color: '#A78BFA', fontFamily: 'var(--font-mono)' }}>
              AWS Student Builder
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none' }} className="md-flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: activeSection === item.id ? '700' : '500',
                color: activeSection === item.id ? '#FFFFFF' : '#D1D5DB',
                background: activeSection === item.id ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease'
              }}
            >
              {item.special && <Sparkles size={13} style={{ color: '#C4B5FD' }} />}
              {item.label}
              {item.special && (
                <span style={{
                  fontSize: '0.65rem',
                  padding: '0.1rem 0.35rem',
                  borderRadius: '0.25rem',
                  background: 'rgba(168, 85, 247, 0.3)',
                  color: '#E9D5FF',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Interactive
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* External Social Profiles & Action */}
        <div style={{ display: 'none' }} className="sm-flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            style={{ padding: '0.55rem', borderRadius: '0.65rem' }}
            title="Hasini's GitHub Repository"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            style={{ padding: '0.55rem', borderRadius: '0.65rem' }}
            title="Hasini's LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.825rem' }}
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-button md-hidden"
          style={{ padding: '0.5rem', borderRadius: '0.5rem' }}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div
          style={{
            background: 'rgba(14, 10, 31, 0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(167, 139, 250, 0.2)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
          className="md-hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: activeSection === item.id ? '700' : '500',
                color: activeSection === item.id ? '#DDD6FE' : '#E5E7EB',
                textDecoration: 'none',
                padding: '0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {item.special && <Sparkles size={16} color="#A855F7" />}
              {item.label}
            </a>
          ))}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(167, 139, 250, 0.2)'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
                style={{ padding: '0.5rem' }}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
                style={{ padding: '0.5rem' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}

      {/* Media query helpers */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
        @media (min-width: 640px) {
          .sm-flex { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
