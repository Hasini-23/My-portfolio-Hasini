import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [localTime, setLocalTime] = useState('');
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: personalInfo.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat([], options).format(new Date());
      setLocalTime(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(personalInfo.socials.linkedin).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formMessage) return;

    // Real mailto trigger without fake API claims
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName} (AWS Student Builder Challenge)`);
    const body = encodeURIComponent(
      `Hi Hasini,\n\nName: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}\n\n---\nSent via Hasini Pathan's Portfolio`
    );

    const mailtoUrl = `mailto:hasini.pathan@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setNotice(`Launching your email client to send note to Hasini Pathan...`);
    setTimeout(() => setNotice(''), 6000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <Mail size={14} />
            <span>Connect</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Let's Build Something Meaningful
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            Whether you want to discuss the AWS Student Builder Challenge, collaborate on AI explorations, or connect professionally.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem',
          maxWidth: '56rem',
          margin: '0 auto'
        }}>
          
          {/* Left Column: Direct Links & Info */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
              Contact & Verified Profiles
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(26, 17, 58, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  textDecoration: 'none',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(46, 16, 101, 0.6)', color: '#C4B5FD' }}>
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', display: 'block' }}>LinkedIn</span>
                    <strong style={{ fontSize: '0.9rem' }}>hasini-pathan</strong>
                  </div>
                </div>
                <ExternalLink size={16} color="#A78BFA" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(26, 17, 58, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  textDecoration: 'none',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(46, 16, 101, 0.6)', color: '#C4B5FD' }}>
                    <Github size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', display: 'block' }}>GitHub</span>
                    <strong style={{ fontSize: '0.9rem' }}>Hasini-23</strong>
                  </div>
                </div>
                <ExternalLink size={16} color="#A78BFA" />
              </a>

              {/* Location & Time */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                borderRadius: '0.75rem',
                background: 'rgba(26, 17, 58, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.25)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'rgba(46, 16, 101, 0.6)', color: '#C4B5FD' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', display: 'block' }}>Location</span>
                    <strong style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>{personalInfo.location}</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#9CA3AF', display: 'block' }}>Local Time</span>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#34D399' }}>
                    {localTime || 'Loading...'}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <button
              onClick={handleCopyProfile}
              className="glass-button"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              {copied ? <Check size={16} color="#34D399" /> : <Copy size={16} />}
              {copied ? 'LinkedIn Link Copied to Clipboard!' : 'Copy LinkedIn Profile Link'}
            </button>

          </div>

          {/* Right Column: Direct Note Launcher */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF' }}>
                Send a Direct Note
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#9CA3AF', marginTop: '0.25rem' }}>
                Opens your default email client with your pre-formatted note.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C4B5FD', marginBottom: '0.35rem' }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Mentor / Challenge Judge"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: '#0D091F',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C4B5FD', marginBottom: '0.35rem' }}>
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="mentor@example.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: '#0D091F',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-msg" style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C4B5FD', marginBottom: '0.35rem' }}>
                  Message / Inquiry
                </label>
                <textarea
                  id="contact-msg"
                  rows="3"
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Hi Hasini, impressed by your AWS Student Builder Challenge portfolio..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    background: '#0D091F',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <Send size={16} /> Open Email Client to Send
              </button>

              {notice && (
                <div style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(52, 211, 153, 0.15)',
                  border: '1px solid rgba(52, 211, 153, 0.4)',
                  color: '#34D399',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {notice}
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
