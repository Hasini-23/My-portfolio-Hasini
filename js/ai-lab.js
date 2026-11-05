/**
 * AI Superpower & Curiosity Lab
 * Interactive Component for Hasini Pathan's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initSuperpowerSliders();
  initThoughtGenerator();
  initTerminal();
});

/* --------------------------------------------------------------------------
   1. Superpower Sliders & Archetype Matrix
   -------------------------------------------------------------------------- */
const archetypes = {
  neural: {
    title: "The Neural Architect",
    badge: "AI & ML Specialization",
    desc: "Driven by neural patterns, predictive modeling, and transforming raw information into intelligent decisions.",
    color: "#A855F7"
  },
  algorithmic: {
    title: "The Algorithmic Strategist",
    badge: "Core Engineering",
    desc: "Rooted in foundational data structures, algorithmic complexity, and structured problem-solving.",
    color: "#8B5CF6"
  },
  design: {
    title: "The Celestial UI Architect",
    badge: "Creative Experience",
    desc: "Passionate about human-centric interfaces, subtle glassmorphic aesthetics, and delighting users.",
    color: "#C4B5FD"
  },
  quantum: {
    title: "The Frontier Explorer",
    badge: "Emerging Technologies",
    desc: "Gazing past current classical computing limits toward quantum possibilities and groundbreaking research.",
    color: "#38BDF8"
  },
  synergy: {
    title: "The Purposeful Innovator",
    badge: "Amrita Tech Explorer",
    desc: "A rare fusion of deep curiosity, technical grit, and purposeful innovation.",
    color: "#DDD6FE"
  }
};

function initSuperpowerSliders() {
  const sliders = {
    ml: document.getElementById('slider-ml'),
    algo: document.getElementById('slider-algo'),
    design: document.getElementById('slider-design'),
    quantum: document.getElementById('slider-quantum')
  };

  if (!sliders.ml) return;

  function updateMatrix() {
    const mlVal = parseInt(sliders.ml.value, 10);
    const algoVal = parseInt(sliders.algo.value, 10);
    const designVal = parseInt(sliders.design.value, 10);
    const quantumVal = parseInt(sliders.quantum.value, 10);

    // Update display numbers
    document.getElementById('val-ml').textContent = `${mlVal}%`;
    document.getElementById('val-algo').textContent = `${algoVal}%`;
    document.getElementById('val-design').textContent = `${designVal}%`;
    document.getElementById('val-quantum').textContent = `${quantumVal}%`;

    // Overall builder index
    const overallScore = Math.round((mlVal + algoVal + designVal + quantumVal) / 4);
    const scoreEl = document.getElementById('overall-score');
    if (scoreEl) scoreEl.textContent = overallScore;

    // Archetype resolution
    let currentType = 'synergy';
    const values = [
      { key: 'neural', val: mlVal },
      { key: 'algorithmic', val: algoVal },
      { key: 'design', val: designVal },
      { key: 'quantum', val: quantumVal }
    ];

    values.sort((a, b) => b.val - a.val);

    if (values[0].val - values[1].val >= 8) {
      currentType = values[0].key;
    } else {
      currentType = 'synergy';
    }

    const arch = archetypes[currentType];
    const titleEl = document.getElementById('archetype-title');
    const badgeEl = document.getElementById('archetype-badge');
    const descEl = document.getElementById('archetype-desc');

    if (titleEl) titleEl.textContent = arch.title;
    if (badgeEl) badgeEl.textContent = arch.badge;
    if (descEl) descEl.textContent = arch.desc;

    // Update mini-stat bars
    const barML = document.getElementById('bar-ml');
    const barAlgo = document.getElementById('bar-algo');
    const barDesign = document.getElementById('bar-design');
    const barQuantum = document.getElementById('bar-quantum');

    if (barML) barML.style.width = `${mlVal}%`;
    if (barAlgo) barAlgo.style.width = `${algoVal}%`;
    if (barDesign) barDesign.style.width = `${designVal}%`;
    if (barQuantum) barQuantum.style.width = `${quantumVal}%`;
  }

  Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', updateMatrix);
  });

  updateMatrix();
}

/* --------------------------------------------------------------------------
   2. Thought & Principle Generator
   -------------------------------------------------------------------------- */
const thoughts = [
  {
    quote: "Dream beyond limits, learn without boundaries, and build with purpose.",
    context: "Personal Guiding Motto"
  },
  {
    quote: "Being a beginner is not a limitation—it is the fertile soil where every breakthrough begins.",
    context: "Growth Mindset"
  },
  {
    quote: "Curiosity asks the question; consistency and code discover the answer.",
    context: "Engineering Philosophy"
  },
  {
    quote: "At Amrita Vishwa Vidyapeetham, every challenge is an invitation to explore deeper and build better.",
    context: "Academic Foundation"
  },
  {
    quote: "AI and machine learning should serve as catalysts for human creativity, solving real societal needs.",
    context: "AI Mission"
  },
  {
    quote: "From Andhra Pradesh to the global cloud: great ideas have no geographic boundaries.",
    context: "Journey & Ambition"
  }
];

let thoughtIndex = 0;

function initThoughtGenerator() {
  const quoteEl = document.getElementById('thought-quote');
  const contextEl = document.getElementById('thought-context');
  const btnNext = document.getElementById('btn-next-thought');

  if (!btnNext || !quoteEl) return;

  function renderThought() {
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(8px)';

    setTimeout(() => {
      quoteEl.textContent = `"${thoughts[thoughtIndex].quote}"`;
      if (contextEl) contextEl.textContent = thoughts[thoughtIndex].context;

      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
      quoteEl.style.transition = 'all 0.3s ease';
    }, 200);
  }

  btnNext.addEventListener('click', () => {
    thoughtIndex = (thoughtIndex + 1) % thoughts.length;
    renderThought();
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Secret Terminal
   -------------------------------------------------------------------------- */
function initTerminal() {
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const commandChips = document.querySelectorAll('.cmd-chip');

  if (!terminalOutput || !terminalInput) return;

  const commands = {
    help: `Available commands:
  • <span class="text-purple-300 font-semibold">about</span>    : Who is Hasini Pathan?
  • <span class="text-purple-300 font-semibold">motto</span>    : Core personal philosophy
  • <span class="text-purple-300 font-semibold">skills</span>   : Verified technical foundations
  • <span class="text-purple-300 font-semibold">amrita</span>   : College & degree background
  • <span class="text-purple-300 font-semibold">vision</span>   : Long-term 2030 aspirations
  • <span class="text-purple-300 font-semibold">aws</span>      : AWS Student Builder Challenge details
  • <span class="text-purple-300 font-semibold">contact</span>  : Connect on GitHub & LinkedIn
  • <span class="text-purple-300 font-semibold">clear</span>    : Wipe the terminal display`,

    about: `<span class="text-lavender-300 font-bold">Hasini Pathan</span>
Aspiring AI/ML Engineer & First-Year B.Tech CSE student at Amrita Vishwa Vidyapeetham.
Passionate about hands-on exploration, algorithms, and purpose-driven AI innovation.`,

    motto: `<span class="text-violet-400 font-semibold">"Dream beyond limits, learn without boundaries, and build with purpose."</span>
Growth comes from curiosity, consistency, and the courage to explore the unknown.`,

    skills: `Active Toolkit:
  - Languages  : Python (Foundations & EDA), C/C++ (Academic logic), HTML5/CSS3/JavaScript
  - AI / ML    : Data analysis (Pandas/NumPy), Math for Machine Learning, Prompt Engineering
  - Platforms  : AWS Amplify, Git & GitHub, Antigravity IDE, VS Code, Jupyter`,

    amrita: `Amrita Vishwa Vidyapeetham
Degree : B.Tech in Computer Science & Engineering (AI & ML)
Year   : First-Year Undergraduate (2025–2029 batch)
Focus  : Core algorithmic mathematics, foundational engineering, and AI architectures.`,

    vision: `<span class="text-pink-300 font-bold">Hasini's 2030 Vision:</span>
To conduct groundbreaking research in AI and Quantum Computing, architecting intelligent systems that empower society and solve complex human challenges.`,

    aws: `AWS Student Builder Challenge:
Built with Antigravity IDE and deployed on AWS Amplify.
Demonstrates cloud-native architecture, custom responsive design, and interactive UI engineering.`,

    contact: `Links:
  • GitHub   : <a href="https://github.com/Hasini-23" target="_blank" class="underline text-purple-300">github.com/Hasini-23</a>
  • LinkedIn : <a href="https://www.linkedin.com/in/hasini-pathan-916b97427/" target="_blank" class="underline text-purple-300">linkedin.com/in/hasini-pathan-916b97427</a>
  • Location : Andhra Pradesh, India`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Echo command
    const promptLine = document.createElement('div');
    promptLine.className = 'text-gray-400 my-1';
    promptLine.innerHTML = `<span class="text-purple-400">hasini@amrita</span>:<span class="text-cyan-400">~</span>$ ${escapeHtml(rawCmd)}`;
    terminalOutput.appendChild(promptLine);

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const responseLine = document.createElement('div');
    responseLine.className = 'text-purple-100 my-1 leading-relaxed pl-2 border-l-2 border-purple-500/40';

    if (commands[cmd]) {
      responseLine.innerHTML = commands[cmd];
    } else {
      responseLine.innerHTML = `<span class="text-rose-400">Command not found: "${escapeHtml(rawCmd)}"</span>. Type <span class="text-purple-300 font-semibold cursor-pointer underline" onclick="runFromTerminal('help')">help</span> for available commands.`;
    }

    terminalOutput.appendChild(responseLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
        terminalInput.value = '';
      }
    });
  });

  // Global helper for inline links
  window.runFromTerminal = function(cmd) {
    executeCommand(cmd);
  };
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
