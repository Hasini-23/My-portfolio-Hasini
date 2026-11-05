# Hasini Pathan - Personal Portfolio
### React + Vite Edition • AWS Student Builder Challenge 2026

[![AWS Amplify](https://img.shields.io/badge/Deploy-AWS%20Amplify-FF9900?logo=awsamplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![React](https://img.shields.io/badge/Framework-React%2018-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%205-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Design](https://img.shields.io/badge/Theme-Celestial%20Lavender-8B5CF6)](https://github.com/Hasini-23)

> **"Dream beyond limits, learn without boundaries, and build with purpose."**  
> — Hasini Pathan, First-Year B.Tech CSE (AI-ML) @ Amrita Vishwa Vidyapeetham

---

## 🌟 Project Overview

This is the personal portfolio of **Hasini Pathan**, crafted for the **AWS Student Builder Challenge** using **Antigravity IDE** and configured for continuous deployment on **AWS Amplify Hosting**.

The portfolio is designed to be an authentic, living proof-of-work showcasing:
1. First-year computer science and AI/ML foundations at **Amrita Vishwa Vidyapeetham**.
2. Hands-on projects in Python, machine learning exploratory data analysis, and algorithmic problem-solving.
3. An original creative feature: the **AI Superpower & Curiosity Lab**.
4. Cloud-native hosting architecture on AWS Amplify connected to high-speed global edge distribution (Amazon CloudFront).

- **GitHub Repository:** [https://github.com/Hasini-23/aws-builder-portfolio](https://github.com/Hasini-23) *(or designated repo)*
- **Live AWS Amplify URL:** `https://main.<APP_ID>.amplifyapp.com` *(populated upon Amplify deployment)*

---

## 🎨 Design System: "Celestial Lavender"

The user interface is built on an original, cohesive design language crafted for high readability and visual impact:
- **Background:** Deep obsidian void (`#090713`)
- **Card Surface:** Translucent midnight violet (`rgba(22, 16, 48, 0.72)`) with backdrop blur
- **Accent Glow:** Electric violet (`#8B5CF6`) and celestial lavender (`#C4B5FD`)
- **Typography:** `Plus Jakarta Sans` for futuristic headings, `Inter` for crisp body copy, and `JetBrains Mono` for data/metrics
- **Dynamic Starfield:** HTML5 Canvas particle simulation with floating stars reacting to viewport dimensions

---

## 🧪 Creative Feature: "AI Superpower & Curiosity Lab"

Located at `#ai-lab`, this feature provides a multi-modal interactive discovery experience:
1. **Curiosity Radar & Sliders:** Sliders for *AI & Machine Learning Curiosity*, *Algorithmic Logic*, *Celestial UI Design*, and *Quantum Ambition*. As visitors adjust values, the Builder Power Index and synthesized archetype cards dynamically recompute in real time.
2. **Hasini's Guiding Principles:** Interactive insight card with fade transitions cycling through Hasini's authentic philosophy.
3. **Interactive Secret Terminal:** A simulated command line (`hasini@amrita:~$`) supporting commands:
   - `help`: Lists all supported commands
   - `about`: Hasini's background and college
   - `motto`: Personal guiding motto
   - `skills`: Verified technical toolkit
   - `amrita`: B.Tech CSE (AI-ML) program details
   - `vision`: Hasini's 2030 future vision
   - `aws`: AWS Student Builder Challenge details
   - `contact`: Direct links to GitHub and LinkedIn
   - `clear`: Clears the terminal screen
   - *Mobile-friendly one-tap command chips are provided for touch screens.*

---

## 🛠️ Technologies Used

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 |
| **Build Tooling** | Vite 5 |
| **Language** | Modern JavaScript (ES6+ Modules) |
| **Styling** | Custom CSS3 with CSS variables & Frosted Glassmorphism |
| **Icons** | Lucide React & Custom SVG brand components |
| **Cloud Hosting** | AWS Amplify Hosting (CloudFront CDN, SSL/TLS, Git webhooks) |
| **Development Suite** | Antigravity IDE |

---

## 📸 Website Screenshots

```
+---------------------------------------------------------------------------------+
| [HP] Hasini Pathan   About  Skills  Projects  AI Lab  Milestones  Contact  [GitHub] |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   (⚡ AWS Student Builder Challenge 2026 • Amrita Vishwa Vidyapeetham)           |
|                                                                                 |
|   Transforming Ideas Into                                                       |
|   PURPOSEFUL INTELLIGENCE.                                                      |
|   Aspiring AI/ML Engineer • Computer Science Undergraduate • Tech Explorer      |
|                                                                                 |
|   ["Dream beyond limits, learn without boundaries, and build with purpose."]   |
|                                                                                 |
|   [ Launch AI Superpower Lab ]   [ View Projects ]   [ GitHub ]   [ LinkedIn ]  |
|                                                                                 |
+---------------------------------------------------------------------------------+
```
*(Add high-resolution screenshots from your browser preview to `assets/screenshots/` prior to final submission)*

---

## 💻 Local Development & Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/Hasini-23/<YOUR_REPO_NAME>.git
cd <YOUR_REPO_NAME>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 4. Build for Production
```bash
npm run build
```
Vite will compile the optimized production bundle to the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## ☁️ AWS Amplify Deployment Guide

The repository includes a root `amplify.yml` build specification:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step-by-Step Deployment Instructions:
1. **Push Code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete portfolio and documentation"
   git push origin main
   ```
2. **Log in to AWS:** Open the [AWS Management Console](https://console.aws.amazon.com/).
3. **Navigate to AWS Amplify:**
   - In the search bar, type **Amplify** and select **AWS Amplify**.
   - Click **Deploy an app** (or **Host web app**).
4. **Connect GitHub:**
   - Choose **GitHub** as the source repository and click **Next**.
   - Authorize AWS Amplify to access your GitHub account.
   - Select your portfolio repository and the **`main`** branch.
5. **Confirm Build Settings:**
   - Amplify will automatically detect the Vite build configuration from `amplify.yml`.
   - Build output directory should display **`dist`**.
6. **Save and Deploy:**
   - Click **Save and deploy**.
   - Amplify will provision, build, and deploy the application across AWS's global CDN in approximately 1 to 2 minutes.
7. **Obtain Live URL:**
   - Once the build indicators turn green, your live public URL (e.g. `https://main.dXXXXXXXX.amplifyapp.com`) will be generated.

---

## 📄 License & Attribution

- Built by **Hasini Pathan** for the **AWS Student Builder Challenge 2026**.
- Developed using **Antigravity IDE**.
