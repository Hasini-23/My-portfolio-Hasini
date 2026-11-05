# Hasini Pathan - Personal Cloud Portfolio
### AWS Student Builder Challenge Edition

> **"Dream beyond limits, learn without boundaries, and build with purpose."**  
> — Hasini Pathan, First-Year B.Tech CSE (AI-ML) @ Amrita Vishwa Vidyapeetham

---

## 🌟 Overview

This is the official personal portfolio website for **Hasini Pathan**, designed and architected for the **AWS Student Builder Challenge** using **Antigravity IDE** and deployed on **AWS Amplify**.

The portfolio embodies an authentic, inspiring first-year journey—combining academic engineering rigor with curiosity in Artificial Intelligence, Machine Learning, and emerging technologies.

### Key Highlights
- **Design System ("Celestial Lavender"):** Premium dark mode aesthetic with deep obsidian (`#090713`), electric violet accents (`#8B5CF6`), celestial lavender glows (`#C4B5FD`), frosted glassmorphism, and ambient cosmic particle starfield.
- **Creative Interactive Feature ("AI Superpower & Curiosity Lab"):**
  - **Dynamic Curiosity Radar & Sliders:** Live computation of builder archetypes (e.g. *The Neural Architect*, *The Purposeful Innovator*) based on curiosity weights.
  - **Core Thought & Principle Generator:** Authentic reflections on growth, consistency, and purposeful innovation.
  - **Interactive Secret Terminal:** Interactive command-line interface (`hasini@amrita:~$`) supporting commands like `about`, `motto`, `skills`, `amrita`, `vision`, `aws`, and `clear`.
- **Verified Credentials & Honest Skills Matrix:** Full transparency highlighting active foundations (Python, C/C++, HTML/CSS, JS, Git) and technologies in progress (Data Science, Math for ML, AWS Amplify, Quantum concepts).
- **Responsive & Lightweight:** Blazing-fast static architecture with zero bloated dependencies, 100% responsive across mobile, tablet, and desktop screens.
- **AWS Amplify Ready:** Includes pre-configured `amplify.yml` for automated continuous deployment from GitHub to AWS global CloudFront CDN.

---

## 📁 Project Structure

```
/Users/pathanhasini/Desktop/AWS/
├── index.html            # Main semantic HTML structure & Tailwind UI
├── css/
│   └── styles.css        # Celestial Lavender variables, glassmorphism, animations
├── js/
│   ├── app.js            # Core UI logic, cosmic starfield, project modals, contact
│   └── ai-lab.js         # Interactive AI Superpower Lab, sliders, terminal logic
├── assets/               # Image & media directory
├── amplify.yml           # AWS Amplify continuous deployment build specification
├── .gitignore            # Git exclusion rules
└── README.md             # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

Because this project uses standard modern web technologies without complex node dependency chains, you can run and preview it instantly:

### Option 1: Python Built-In HTTP Server (Recommended)
Open your terminal in this directory and run:
```bash
python3 -m http.server 3000
```
Then open your browser to:
```
http://localhost:3000
```

### Option 2: Direct Browser Launch
Simply double-click `index.html` or open it with any web browser (Safari, Chrome, Edge, Firefox).

---

## ☁️ How to Deploy to AWS Amplify

### Method A: Automated Continuous Deployment via GitHub (Recommended for Challenge)

1. **Initialize Git and Commit the Code:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete AWS Student Builder Challenge portfolio"
   ```

2. **Push to GitHub:**
   Create a new public repository on your GitHub account (`https://github.com/Hasini-23/aws-builder-portfolio` or similar) and run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Hasini-23/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

3. **Deploy on AWS Amplify Console:**
   - Sign in to the [AWS Management Console](https://console.aws.amazon.com/).
   - Open **AWS Amplify Hosting**.
   - Click **Deploy an app** > Select **GitHub** as the source code provider.
   - Authorize AWS Amplify to access your GitHub repository and select your repository & `main` branch.
   - Amplify will automatically detect `amplify.yml` included in this project.
   - Click **Save and Deploy**.
   - In less than 2 minutes, your website will be live on a fast, secure HTTPS URL (e.g., `https://main.dXXXXXXXX.amplifyapp.com`)!

### Method B: Direct Drag-and-Drop / Manual Zip Deployment

1. Compress the project folder contents (`index.html`, `css/`, `js/`, `assets/`, `amplify.yml`) into a `.zip` file.
2. In the AWS Amplify Console, select **Deploy without Git** (manual upload).
3. Upload the `.zip` file and click **Save and Deploy**.

---

## 🔗 Official Links

- **GitHub:** [https://github.com/Hasini-23](https://github.com/Hasini-23)
- **LinkedIn:** [https://www.linkedin.com/in/hasini-pathan-916b97427/](https://www.linkedin.com/in/hasini-pathan-916b97427/)
- **Institution:** Amrita Vishwa Vidyapeetham

---

*Crafted with pride for the AWS Student Builder Challenge 2026 using Antigravity IDE.*
