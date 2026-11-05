import React, { useState } from 'react';
import { FolderGit2, ArrowRight, ExternalLink, CloudLightning, BarChart3, Binary } from 'lucide-react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 1: return <CloudLightning size={32} color="#C4B5FD" />;
      case 2: return <BarChart3 size={32} color="#818CF8" />;
      case 3: return <Binary size={32} color="#A78BFA" />;
      default: return <FolderGit2 size={32} color="#C4B5FD" />;
    }
  };

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 4rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <FolderGit2 size={14} />
            <span>Proof of Work</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            Featured Projects & Challenges
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            Real code, real problem solving, and hands-on cloud building for the AWS Student Builder Challenge.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(139, 92, 246, 0.28)'
              }}
            >
              
              {/* Card Header Illustration Banner */}
              <div style={{
                height: '11.5rem',
                background: project.id === 1 
                  ? 'linear-gradient(135deg, rgba(76, 29, 149, 0.6), rgba(15, 10, 31, 0.9))' 
                  : project.id === 2
                  ? 'linear-gradient(135deg, rgba(49, 46, 129, 0.6), rgba(15, 10, 31, 0.9))'
                  : 'linear-gradient(135deg, rgba(88, 28, 135, 0.6), rgba(15, 10, 31, 0.9))',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#DDD6FE',
                    background: 'rgba(139, 92, 246, 0.3)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(139, 92, 246, 0.4)'
                  }}>
                    {project.badge}
                  </span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} className="animate-pulse-dot"></span>
                </div>

                <div>
                  {getProjectIcon(project.id)}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF', marginTop: '0.5rem' }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
                gap: '1.25rem'
              }}>
                <p style={{ fontSize: '0.9rem', color: '#D1D5DB', lineHeight: 1.6 }}>
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.35rem',
                        background: 'rgba(26, 17, 58, 0.7)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        color: '#DDD6FE'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Trigger Links */}
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#C4B5FD',
                      fontSize: '0.825rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0
                    }}
                  >
                    Deep Dive Specs <ArrowRight size={14} />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button"
                    style={{ padding: '0.45rem', borderRadius: '0.5rem' }}
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github size={16} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Project Modal Renderer */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
