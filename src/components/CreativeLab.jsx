import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Sliders, BrainCircuit, Binary, Palette, Atom, Lightbulb, RefreshCw, Terminal } from 'lucide-react';
import { labArchetypes, labThoughts, terminalCommands } from '../data/aiLabData';

export default function CreativeLab() {
  // 1. Slider & Archetype State
  const [sliderVals, setSliderVals] = useState({
    ml: 95,
    algo: 88,
    design: 92,
    quantum: 90
  });

  const handleSliderChange = (key, val) => {
    setSliderVals((prev) => ({ ...prev, [key]: Number(val) }));
  };

  const overallScore = Math.round(
    (sliderVals.ml + sliderVals.algo + sliderVals.design + sliderVals.quantum) / 4
  );

  // Compute Archetype
  const getArchetype = () => {
    const list = [
      { key: 'neural', val: sliderVals.ml },
      { key: 'algorithmic', val: sliderVals.algo },
      { key: 'design', val: sliderVals.design },
      { key: 'quantum', val: sliderVals.quantum }
    ];
    list.sort((a, b) => b.val - a.val);

    if (list[0].val - list[1].val >= 8) {
      return labArchetypes[list[0].key];
    }
    return labArchetypes.synergy;
  };

  const currentArchetype = getArchetype();

  // 2. Thought Generator State
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [isThoughtFading, setIsThoughtFading] = useState(false);

  const nextThought = () => {
    setIsThoughtFading(true);
    setTimeout(() => {
      setThoughtIndex((prev) => (prev + 1) % labThoughts.length);
      setIsThoughtFading(false);
    }, 200);
  };

  // 3. Interactive Terminal State
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to Hasini Pathan\'s Interactive Terminal v2.6!\nType "help" or click any shortcut chip below to explore.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleRunCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[cmd] || `Command not found: "${cmdRaw}". Type "help" to see available commands.`;

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'input', text: `hasini@amrita:~$ ${cmdRaw}` },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    }
  };

  return (
    <section id="ai-lab" style={{ padding: '6rem 0', position: 'relative' }} aria-label="AI Superpower and Curiosity Lab">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 2.5rem auto' }}>
          <div className="glass-badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} color="#C4B5FD" />
            <span>Interactive Discovery Experience</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.85rem' }}>
            AI Superpower & Curiosity Lab
          </h2>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: 1.6 }}>
            An interactive laboratory where challenge evaluators and visitors can discover Hasini's builder dynamics, core principles, and simulated terminal insights.
          </p>
        </div>

        {/* Clearly Visible Discovery Hint Banner */}
        <div className="glass-card" style={{
          padding: '0.85rem 1.25rem',
          maxWidth: '52rem',
          margin: '0 auto 3rem auto',
          background: 'rgba(30, 20, 68, 0.65)',
          border: '1px solid rgba(196, 181, 253, 0.4)',
          borderRadius: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span style={{ fontSize: '1.25rem' }} role="img" aria-label="Hint">💡</span>
          <p style={{ fontSize: '0.85rem', color: '#DDD6FE', lineHeight: 1.5, margin: 0 }}>
            <strong>Discovery Hint:</strong> Adjust Hasini's curiosity sliders on the left to synthesize builder archetypes, or type commands like <code style={{ color: '#FCD34D', background: '#0B0818', padding: '0.1rem 0.35rem', borderRadius: '0.25rem' }}>vision</code> or <code style={{ color: '#FCD34D', background: '#0B0818', padding: '0.1rem 0.35rem', borderRadius: '0.25rem' }}>motto</code> into the interactive terminal on the right to unlock her 2030 vision!
          </p>
        </div>

        {/* Main Lab Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* Left: Curiosity Matrix Sliders & Archetype Synthesizer */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
              paddingBottom: '1rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sliders size={20} color="#C4B5FD" />
                  Curiosity & Power Matrix
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#A78BFA', marginTop: '0.2rem' }}>
                  Adjust parameters to recalculate builder metrics
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#DDD6FE', fontFamily: 'var(--font-mono)', display: 'block', lineHeight: 1 }}>
                  {overallScore}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: 'var(--font-mono)' }}>Index / 100</span>
              </div>
            </div>

            {/* Sliders List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Slider 1 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BrainCircuit size={15} color="#C4B5FD" /> AI & Machine Learning Curiosity
                  </span>
                  <strong style={{ color: '#DDD6FE' }}>{sliderVals.ml}%</strong>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={sliderVals.ml}
                  onChange={(e) => handleSliderChange('ml', e.target.value)}
                  aria-label="AI and Machine Learning Curiosity percentage slider"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Binary size={15} color="#818CF8" /> Algorithmic Logic & Rigor
                  </span>
                  <strong style={{ color: '#DDD6FE' }}>{sliderVals.algo}%</strong>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={sliderVals.algo}
                  onChange={(e) => handleSliderChange('algo', e.target.value)}
                  aria-label="Algorithmic Logic and Rigor percentage slider"
                />
              </div>

              {/* Slider 3 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Palette size={15} color="#F472B6" /> Celestial UI & Design Sense
                  </span>
                  <strong style={{ color: '#DDD6FE' }}>{sliderVals.design}%</strong>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={sliderVals.design}
                  onChange={(e) => handleSliderChange('design', e.target.value)}
                  aria-label="Celestial UI and Design Sense percentage slider"
                />
              </div>

              {/* Slider 4 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Atom size={15} color="#38BDF8" /> Quantum & Frontier Ambition
                  </span>
                  <strong style={{ color: '#DDD6FE' }}>{sliderVals.quantum}%</strong>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={sliderVals.quantum}
                  onChange={(e) => handleSliderChange('quantum', e.target.value)}
                  aria-label="Quantum and Frontier Ambition percentage slider"
                />
              </div>

            </div>

            {/* Synthesized Archetype Card */}
            <div style={{
              padding: '1.25rem',
              borderRadius: '1rem',
              background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.4), rgba(30, 27, 75, 0.6))',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Synthesized Archetype
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '0.35rem',
                  background: 'rgba(139, 92, 246, 0.3)',
                  color: '#DDD6FE',
                  border: '1px solid rgba(139, 92, 246, 0.4)'
                }}>
                  {currentArchetype.badge}
                </span>
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: currentArchetype.color }}>
                {currentArchetype.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#D1D5DB', lineHeight: 1.5 }}>
                {currentArchetype.desc}
              </p>
            </div>

            {/* Guiding Principles Sub-Feature */}
            <div style={{
              padding: '1.25rem',
              borderRadius: '1rem',
              background: '#0E0A22',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#C4B5FD', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Lightbulb size={14} color="#FBBF24" /> Hasini's Guiding Principles
                </span>
                <button
                  onClick={nextThought}
                  className="glass-button"
                  style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', borderRadius: '0.5rem' }}
                  aria-label="Show next principle"
                >
                  <RefreshCw size={12} /> Next Insight
                </button>
              </div>

              <div style={{ minHeight: '3.8rem', display: 'flex', alignItems: 'center' }}>
                <p style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#F5F3FF',
                  fontStyle: 'italic',
                  opacity: isThoughtFading ? 0 : 1,
                  transform: isThoughtFading ? 'translateY(4px)' : 'translateY(0)',
                  transition: 'all 0.2s ease',
                  lineHeight: 1.5
                }}>
                  "{labThoughts[thoughtIndex].quote}"
                </p>
              </div>

              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#A78BFA' }}>
                Context: {labThoughts[thoughtIndex].context}
              </span>
            </div>

          </div>

          {/* Right: Interactive Secret Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="terminal-box" role="region" aria-label="Interactive Terminal System">
              
              {/* Terminal Title Bar */}
              <div className="terminal-topbar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#DDD6FE', marginLeft: '0.5rem' }}>
                    hasini-terminal-v2.6.sh
                  </span>
                </div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Terminal size={12} /> bash
                </span>
              </div>

              {/* Terminal Logs Output */}
              <div
                ref={terminalEndRef}
                id="terminal-output"
                aria-live="polite"
                aria-label="Terminal output log"
                style={{
                  height: '20rem',
                  overflowY: 'auto',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                {terminalHistory.map((item, idx) => (
                  <div key={idx} style={{
                    color: item.type === 'input' ? '#C4B5FD' : '#E5E7EB',
                    whiteSpace: 'pre-wrap',
                    lineHeight: 1.6,
                    borderLeft: item.type === 'output' ? '2px solid rgba(139, 92, 246, 0.4)' : 'none',
                    paddingLeft: item.type === 'output' ? '0.5rem' : 0
                  }}>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Quick Clickable Command Chips */}
              <div style={{
                padding: '0.65rem 1rem',
                background: 'rgba(20, 14, 45, 0.8)',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem'
              }}>
                {['about', 'motto', 'skills', 'amrita', 'vision', 'aws', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleRunCommand(cmd)}
                    aria-label={`Run ${cmd} command`}
                    style={{
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '0.35rem',
                      background: 'rgba(46, 16, 101, 0.5)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#DDD6FE',
                      cursor: 'pointer'
                    }}
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Input Prompt */}
              <div style={{
                padding: '0.75rem 1rem',
                background: '#070510',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#A78BFA', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                  hasini@amrita:~$
                </span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help' or any command..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem'
                  }}
                  aria-label="Terminal command prompt input"
                />
              </div>

            </div>

            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
              💡 Keyboard Friendly: Type in the prompt and press <kbd style={{ background: '#1E1742', padding: '0.15rem 0.4rem', borderRadius: '0.25rem', color: '#DDD6FE' }}>Enter</kbd> to execute!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
