# AWS Student Builder Challenge: Submission Checklist
**Candidate:** Hasini Pathan  
**Project:** Cloud-Hosted Interactive Developer Portfolio  
**Status:** Code Complete & Build Verified • Ready for AWS Amplify Deployment  

---

## 📋 Comprehensive Submission Checklist

### 1. Project Implementation Status (Automated / Completed)

- [x] **React & Vite Architecture:** Clean component structure in `src/components/`.
- [x] **Design System:** Custom "Celestial Lavender" dark mode with glassmorphic cards and canvas starfield.
- [x] **Verified Personal Identity:** Hasini Pathan, First-Year B.Tech CSE (AI-ML) @ Amrita Vishwa Vidyapeetham.
- [x] **Personal Motto Included:** *"Dream beyond limits, learn without boundaries, and build with purpose."*
- [x] **Verified Profiles:** Linked to [GitHub (Hasini-23)](https://github.com/Hasini-23) and [LinkedIn](https://www.linkedin.com/in/hasini-pathan-916b97427/).
- [x] **Creative Feature Implemented:** "AI Superpower & Curiosity Lab" with live curiosity sliders, archetype synthesizer, quote generator, and simulated terminal.
- [x] **Visible Discovery Hint:** Clearly placed discovery banner explaining how to unlock Hasini's 2030 vision and archetypes.
- [x] **Responsive Mobile Layouts:** Fluid grids tested for 320px, 768px, 1024px, and desktop widths.
- [x] **Accessibility & Keyboard Navigation:** Focus-visible outlines, ARIA attributes, semantic tags, WCAG AAA contrast.
- [x] **Production Build Verified:** `npm run build` generates clean `dist/` bundle in under `700ms` with zero errors.
- [x] **Amplify Build Config:** Root `amplify.yml` configured for automated `npm ci` and `npm run build`.
- [x] **Hackathon Documentation:** Complete documentation suite generated in `docs/`.

---

### 2. Remaining Manual Actions for Candidate (Hasini Pathan)

These are the final steps you need to perform using your accounts:

#### Step 1: Push Local Code to GitHub
1. Open your terminal in `/Users/pathanhasini/Desktop/AWS`.
2. Create a new repository on your GitHub account (`https://github.com/new`), named for example `aws-builder-portfolio`.
3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/Hasini-23/aws-builder-portfolio.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on AWS Amplify Console
1. Sign in to your [AWS Management Console](https://console.aws.amazon.com/).
2. In the search bar, search for **AWS Amplify** and select it.
3. Click **Host web app** (or **Deploy an app**).
4. Select **GitHub** as the source provider and authenticate.
5. Choose your repository (`aws-builder-portfolio`) and the **`main`** branch.
6. Amplify will automatically detect the pre-configured `amplify.yml` build specification.
7. Click **Save and deploy**.
8. Wait ~2 minutes for the automated build and deployment to complete.

#### Step 3: Capture & Record Live Details
- [ ] Copy the generated live URL (e.g., `https://main.dXXXXXXXX.amplifyapp.com`).
- [ ] Open the live website on your browser and smartphone to verify all interactive features (AI Lab sliders, terminal, project modal, links).
- [ ] Take 2–3 screenshots of the live website and 1 screenshot of the AWS Amplify deployment console (all green checkmarks).

#### Step 4: Submit to Challenge Portal
Paste into your challenge submission form:
- **Project Title:** Hasini Pathan - Cloud-Hosted Interactive Portfolio
- **Live Hosted URL:** `https://main.<APP_ID>.amplifyapp.com`
- **GitHub Repository URL:** `https://github.com/Hasini-23/aws-builder-portfolio`
- **Brief Description:** (Copy from `docs/project-description.md`)
- **AWS Services Used:** AWS Amplify Hosting, Amazon CloudFront, Amazon S3, AWS Certificate Manager
- **Creative Feature Summary:** AI Superpower & Curiosity Lab (Detailed in `docs/project-description.md`)
- **Key Learnings & Challenges:** (Copy from `docs/challenges-and-learnings.md`)
