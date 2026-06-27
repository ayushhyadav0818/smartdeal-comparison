# SmartDeal - Project Development Chat History & Steps

This document serves as a reference manual for the development steps, settings, and instructions executed during this pair programming session.

---

## 📅 Session Metadata
- **Project Name**: SmartDeal Price Comparison Engine
- **Developer Account**: `ayushhyadav0818` (GitHub)
- **Deployment Platform**: GitHub Pages & Vercel
- **Workspace Directory**: `c:\Users\HP\OneDrive\Desktop\ayush\git projects\data analyst`

---

## 🛠️ Executed Workflow & Commands

### 1. Repository Initialization
Initialized git workspace locally and committed the static assets:
```bash
git init
git add .
git commit -m "Initial commit of SmartDeal Price Comparison web app"
```

### 2. GitHub Remote Deployment
Checked git & GitHub CLI (`gh`) authentication status. Since the active account was verified as `ayushhyadav0818`, a new public repository was created and files pushed:
```bash
gh repo create smartdeal-comparison --public --source=. --remote=origin --push
```

### 3. GitHub Pages Hosting Configuration
Configured automatic builds to publish the code on GitHub Pages:
```bash
gh api --method POST /repos/ayushhyadav0818/smartdeal-comparison/pages -F "source[branch]=master" -F "source[path]=/"
```
- **Live Site URL**: `https://ayushhyadav0818.github.io/smartdeal-comparison/`

### 4. Local Preview Server
Bypassed system environment constraints using the Python launcher:
```bash
py -m http.server 8000
```
- **Local URL**: `http://localhost:8000`

---

## 🎨 UI & Integration Guides (Google Stitch / Project IDX)
1. **Google Stitch**: To edit the design with the AI native canvas, use the live deployment URL: `https://ayushhyadav0818.github.io/smartdeal-comparison/`.
2. **Project IDX**: Load the workspace directly into the cloud editor using the one-click repo import link: `https://idx.google.com/new?repo=https://github.com/ayushhyadav0818/smartdeal-comparison`.

---

## 📝 Custom Rules Saved
Created a custom workspace rules file under `.agents/AGENTS.md` to persist the following preferences:
- **Language**: Always communicate using Hinglish (Hindi text in English script).
- **Communication Style**: Professional, clear, and concise.
