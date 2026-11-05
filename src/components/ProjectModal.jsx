import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem 2.25rem' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="glass-button"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', padding: '0.45rem', borderRadius: '0.5rem' }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            background: 'rgba(139, 92, 246, 0.25)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            color: '#DDD6FE',
            display: 'inline-block',
            marginBottom: '0.5rem'
          }}>
            {project.badge}
          </span>
          <h3 id="modal-project-title" style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#A78BFA', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.55rem',
                borderRadius: '0.35rem',
                background: 'rgba(30, 20, 68, 0.7)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#C4B5FD'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Body HTML */}
        <div
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: '#D1D5DB',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            paddingTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
          dangerouslySetInnerHTML={{ __html: project.detailedDesc }}
        />

        {/* Footer Actions */}
        <div style={{
          marginTop: '1.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(139, 92, 246, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}
          >
            <Github size={16} /> View GitHub Repo
          </a>
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem' }}
            >
              <ExternalLink size={15} /> Open Project
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
