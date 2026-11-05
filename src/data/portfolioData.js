/**
 * Verified Portfolio Data for Hasini Pathan
 * AWS Student Builder Challenge Edition
 */

export const personalInfo = {
  name: "Hasini Pathan",
  displayName: "Hasini Pathan",
  role: "Aspiring AI/ML Engineer",
  tagline: "Computer Science Undergraduate | Tech Explorer",
  fullTitle: "Aspiring AI/ML Engineer | Computer Science Undergraduate | Tech Explorer",
  college: "Amrita Vishwa Vidyapeetham",
  degree: "B.Tech in Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning (AI-ML)",
  academicYear: "First-Year Undergraduate (Cohort 2025–2029)",
  location: "Andhra Pradesh, India",
  timezone: "Asia/Kolkata",
  motto: "Dream beyond limits, learn without boundaries, and build with purpose.",
  philosophy: "Growth comes from curiosity, consistency, and the courage to explore things I do not yet understand. Being a beginner is not a limitation, but the starting point of every great achievement.",
  bio: "Curious and ambitious Computer Science undergraduate at Amrita Vishwa Vidyapeetham specializing in AI and Machine Learning. Passionate about transforming ideas into tangible projects through hands-on experimentation, algorithmic rigor, and cloud engineering.",
  socials: {
    github: "https://github.com/Hasini-23",
    linkedin: "https://www.linkedin.com/in/hasini-pathan-916b97427/",
    emailDisplay: "Connect on LinkedIn / GitHub"
  }
};

export const skillsData = [
  {
    category: "Core Programming",
    icon: "Code2",
    description: "Foundational logic and structured programming",
    items: [
      { name: "Python", level: "Core & Scripting", type: "Active Builder", desc: "Data processing, algorithmic logic, and automation scripts." },
      { name: "C / C++", level: "Academic Core", type: "Core Foundation", desc: "Memory pointers, data structure implementations, and asymptotic complexity." },
      { name: "HTML5 & CSS3", level: "Responsive UI", type: "Active Builder", desc: "Semantic structure, responsive layouts, and modern glassmorphism." },
      { name: "JavaScript (ES6+)", level: "Active Practice", type: "Active Practice", desc: "Modern DOM APIs, asynchronous logic, and interactive state." }
    ]
  },
  {
    category: "AI & Data Science",
    icon: "Brain",
    description: "Specialized machine learning & mathematical foundations",
    items: [
      { name: "NumPy & Pandas", level: "Data Exploration", type: "Hands-on Practice", desc: "Vector operations, tabular data wrangling, and statistical summaries." },
      { name: "Math for Machine Learning", level: "Linear Algebra & Calculus", type: "Academic Focus", desc: "Matrix transformations, eigenvalues, partial derivatives, and optimization." },
      { name: "Prompt Engineering & GenAI", level: "Hands-on Workflows", type: "Active Practice", desc: "Structured prompt crafting, role definition, and agent orchestration." },
      { name: "Quantum Computing Concepts", level: "Actively Learning", type: "Future Horizon", desc: "Exploration of quantum gates, superposition, and quantum algorithm theory." }
    ]
  },
  {
    category: "Developer Tools & Cloud",
    icon: "Cloud",
    description: "Development environments and cloud infrastructure",
    items: [
      { name: "AWS Amplify", level: "Cloud Hosting", type: "Challenge Deploy", desc: "Continuous deployment pipelines, static hosting, and CloudFront distribution." },
      { name: "Antigravity IDE", level: "Primary Dev Suite", type: "Daily Driver", desc: "AI-assisted full-stack architecture, agent workflows, and live preview." },
      { name: "Git & GitHub", level: "Version Control", type: "Active Builder", desc: "Branching workflows, commit hygiene, and open repository management." },
      { name: "VS Code & Jupyter", level: "Lab Environments", type: "Daily Driver", desc: "Interactive data analysis, code debugging, and iterative prototyping." }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AWS Cloud-Hosted Interactive Portfolio",
    subtitle: "AWS Student Builder Challenge • Lead Architect & Developer",
    badge: "Cloud Architecture",
    tags: ["React", "Vite", "AWS Amplify", "JavaScript", "Celestial CSS"],
    shortDesc: "A cloud-native, responsive portfolio built with React and Vite for the AWS Student Builder Challenge. Features custom Celestial Lavender glassmorphism, continuous deployment on AWS Amplify, and an interactive AI Superpower Lab.",
    detailedDesc: `
      <p>This portfolio was architected specifically for the <strong>AWS Student Builder Challenge</strong> using <strong>Antigravity IDE</strong>. Rather than a static resume, it is an interactive web platform demonstrating clean component architecture, cloud delivery, and UI engineering.</p>
      <h4>Key Highlights:</h4>
      <ul>
        <li><strong>Continuous Cloud Delivery:</strong> Configured with <code>amplify.yml</code> for automated deployment to AWS global edge CDN.</li>
        <li><strong>Original Design System:</strong> 'Celestial Lavender' theme with responsive cards, subtle glowing orbs, and cosmic starfield.</li>
        <li><strong>AI Superpower Lab:</strong> Interactive exploration lab enabling visitors to simulate builder weights and inspect live archetypes.</li>
        <li><strong>Zero Framework Bloat:</strong> Lightweight bundle, mobile first, and keyboard accessible.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI / ML Insights & Data Explorer",
    subtitle: "Exploratory Data Analysis • Amrita Coursework",
    badge: "Machine Learning",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    shortDesc: "Exploratory data analysis module applying statistical techniques to understand dataset distributions, clean anomalies, and construct feature correlation matrices for baseline machine learning models.",
    detailedDesc: `
      <p>A hands-on exploratory data analysis project focusing on understanding real datasets before training machine learning models.</p>
      <h4>Methodologies Applied:</h4>
      <ul>
        <li><strong>Data Wrangling:</strong> Handling null values, outlier filtering, and feature scaling using NumPy and Pandas.</li>
        <li><strong>Visual Discovery:</strong> Producing multi-variable distributions and correlation heatmaps.</li>
        <li><strong>Mathematical Rigor:</strong> Verifying data variance against principles learned in first-year linear algebra.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "https://github.com/Hasini-23",
    featured: true
  },
  {
    id: 3,
    title: "Smart Algorithmic Problem Solver",
    subtitle: "Data Structures & Computational Logic • Core CS",
    badge: "Algorithms & DSA",
    tags: ["C++", "Python", "Data Structures", "Big-O Analysis"],
    shortDesc: "Implementations and comparative asymptotic complexity breakdowns of fundamental data structures (Binary Search Trees, Heaps, Stacks, Queues) and graph traversal algorithms.",
    detailedDesc: `
      <p>Core algorithmic foundations developed through rigorous coursework and competitive problem-solving practice at Amrita Vishwa Vidyapeetham.</p>
      <h4>Focus Areas:</h4>
      <ul>
        <li><strong>Complexity Analysis:</strong> Time and space asymptotic bounds rigorously calculated using Big-O notation.</li>
        <li><strong>Memory Safety:</strong> Pointer arithmetic and recursive structure handling implemented cleanly in C++.</li>
        <li><strong>Modular Testing:</strong> Unit tests covering edge cases and boundary conditions.</li>
      </ul>
    `,
    github: "https://github.com/Hasini-23",
    liveDemo: "https://github.com/Hasini-23",
    featured: true
  }
];

export const achievementsData = [
  {
    year: "2025–2026",
    status: "Active Academic Cohort",
    title: "Admitted to Amrita Vishwa Vidyapeetham",
    desc: "Enrolled in B.Tech Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning. Building foundational excellence in calculus, discrete mathematics, and computer systems.",
    icon: "GraduationCap"
  },
  {
    year: "Present 2026",
    status: "Active Challenge",
    title: "AWS Student Builder Challenge Builder",
    desc: "Architecting, developing, and deploying cloud-native digital platforms using Antigravity IDE and AWS Amplify to showcase full-stack and cloud delivery proficiency.",
    icon: "CloudLightning"
  },
  {
    year: "2026 Target",
    status: "Next Horizon",
    title: "Hackathons & Open Source Contributions",
    desc: "Preparing for national university hackathons, contributing to open-source developer tooling, and preparing for AWS Cloud Practitioner credentials.",
    icon: "Award"
  },
  {
    year: "2027–2030",
    status: "Long-Term Vision",
    title: "AI Research & Quantum Horizons",
    desc: "Engaging in impactful research at the intersection of deep learning and quantum computing, developing technology that solves purposeful human challenges.",
    icon: "Atom"
  }
];

