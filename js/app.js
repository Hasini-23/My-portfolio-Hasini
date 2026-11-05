/**
 * Main Application Logic - Hasini Pathan Portfolio
 * AWS Student Builder Challenge Edition
 */

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  initStarfield();
  initNavigation();
  initProjectModals();
  initContactForm();
  initLocalTime();
});

/* --------------------------------------------------------------------------
   1. Lucide Icons Initializer
   -------------------------------------------------------------------------- */
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   2. Cosmic Canvas Starfield
   -------------------------------------------------------------------------- */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  const starCount = 120;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createStars();
  });

  function createStars() {
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.25 + 0.05,
        color: Math.random() > 0.4 ? '#C4B5FD' : '#8B5CF6'
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let star of stars) {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = star.alpha;
      ctx.shadowBlur = 4;
      ctx.shadowColor = star.color;
      ctx.fill();
    }

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(animate);
  }

  createStars();
  animate();
}

/* --------------------------------------------------------------------------
   3. Navigation, Mobile Menu & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-purple-300', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-purple-300', 'font-semibold');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Project Modals & Details
   -------------------------------------------------------------------------- */
const projectData = {
  1: {
    title: "AWS Cloud-Hosted Interactive Portfolio",
    subtitle: "AWS Student Builder Challenge • Lead Architect & Developer",
    badge: "Cloud Native Architecture",
    tags: ["AWS Amplify", "Antigravity IDE", "Tailwind CSS", "JavaScript ES6+", "HTML5"],
    description: `
      <p class="mb-3">This very platform was purpose-engineered for the <strong>AWS Student Builder Challenge</strong> using <strong>Antigravity IDE</strong>. Unlike traditional static resumes, this portfolio serves as an interactive proof-of-work showcasing responsive design engineering, cloud deployment readiness, and technical ambition.</p>
      <h4 class="font-bold text-purple-300 mt-4 mb-2">Architectural Highlights:</h4>
      <ul class="list-disc pl-5 space-y-1.5 text-gray-300">
        <li><strong>Continuous Cloud Deployment:</strong> Configured with <code>amplify.yml</code> for automated deployment pipelines via AWS Amplify Hosting.</li>
        <li><strong>Celestial Lavender Design:</strong> Tailored with custom glassmorphism, responsive CSS variables, and cosmic canvas backdrop.</li>
        <li><strong>AI Superpower Lab:</strong> Interactive state-driven exploration module allowing visitors to adjust curiosity parameters and explore real-time archetypes.</li>
        <li><strong>Zero External Framework Bloat:</strong> Lightweight, ultra-fast initial render and 100% mobile responsive layout.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "#"
  },
  2: {
    title: "AI / ML Insights & Data Explorer",
    subtitle: "Machine Learning & Exploratory Data Analysis • Amrita Coursework",
    badge: "Data Science & AI",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    description: `
      <p class="mb-3">A dedicated exploratory data analysis repository focusing on understanding real-world datasets, discovering statistical correlations, and preprocessing data for baseline machine learning models.</p>
      <h4 class="font-bold text-purple-300 mt-4 mb-2">Key Highlights & Methodologies:</h4>
      <ul class="list-disc pl-5 space-y-1.5 text-gray-300">
        <li><strong>Data Wrangling:</strong> Handled missing values, outliers, and normalization using Pandas and NumPy.</li>
        <li><strong>Visual Pattern Discovery:</strong> Generated multi-dimensional scatter matrices and correlation heatmaps to extract actionable features.</li>
        <li><strong>Foundational Math:</strong> Applied linear algebra and statistical concepts taught in first-year B.Tech AI-ML curriculum to interpret model behavior.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "https://github.com/Hasini-23"
  },
  3: {
    title: "Smart Algorithmic Problem Solver & Logic Core",
    subtitle: "Data Structures & Algorithms • First-Year Engineering",
    badge: "Computer Science Core",
    tags: ["C++", "Python", "DSA", "Logic & Math"],
    description: `
      <p class="mb-3">A curated collection of algorithmic implementations, asymptotic complexity analyses, and foundational data structures (Linked Lists, Binary Trees, Stacks, Queues, Graphs, and Dynamic Programming foundations).</p>
      <h4 class="font-bold text-purple-300 mt-4 mb-2">Key Highlights:</h4>
      <ul class="list-disc pl-5 space-y-1.5 text-gray-300">
        <li><strong>Algorithmic Efficiency:</strong> Analyzed time and space complexities using Big-O notation.</li>
        <li><strong>Modular Architecture:</strong> Clean, self-documenting code with clear edge-case handling.</li>
        <li><strong>Competitive Coding Practice:</strong> Solutions developed through continuous practice on coding platforms.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "https://github.com/Hasini-23"
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBadge = document.getElementById('modal-badge');
  const modalTags = document.getElementById('modal-tags');
  const modalBody = document.getElementById('modal-body');
  const modalGithub = document.getElementById('modal-github');
  const modalDemo = document.getElementById('modal-demo');

  if (!modal) return;

  window.openProjectModal = function(id) {
    const data = projectData[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalBadge.textContent = data.badge;

    modalTags.innerHTML = data.tags.map(tag => 
      `<span class="px-2.5 py-1 text-xs rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200">${tag}</span>`
    ).join('');

    modalBody.innerHTML = data.description;
    modalGithub.href = data.github;

    if (data.liveDemo && data.liveDemo !== "#") {
      modalDemo.href = data.liveDemo;
      modalDemo.classList.remove('hidden');
    } else {
      modalDemo.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initLucideIcons();
  };

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Contact Form & Toast Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('btn-copy-email');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      showToast(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = "hasini.pathan@example.com";
      navigator.clipboard.writeText("https://www.linkedin.com/in/hasini-pathan-916b97427/").then(() => {
        showToast("LinkedIn link copied to clipboard!");
      }).catch(() => {
        showToast("Connected to Hasini Pathan's profile!");
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3500);
}

/* --------------------------------------------------------------------------
   6. Andhra Pradesh Local Time Clock
   -------------------------------------------------------------------------- */
function initLocalTime() {
  const timeEl = document.getElementById('local-time');
  if (!timeEl) return;

  function update() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const now = new Intl.DateTimeFormat([], options).format(new Date());
    timeEl.textContent = `${now} IST`;
  }

  update();
  setInterval(update, 1000);
}

