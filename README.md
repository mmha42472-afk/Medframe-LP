# MedFrame Studio

> The premier digital agency for elite physicians, surgeons, and clinical leaders crafting bespoke personal brands, authority medical websites, and reputation engines.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server (runs on port 3000)
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured with a relative base path (`base: './'`) in `vite.config.ts` and an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Step-by-Step GitHub Setup:
1. **Push this code to your GitHub repository**:
   ```bash
   git add .
   git commit -m "Deploy MedFrame Studio with Section CMS Dashboard"
   git push origin main
   ```

2. **Enable GitHub Pages via GitHub Actions**:
   - In your GitHub repository, click **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** → **Source**, change the dropdown from *"Deploy from a branch"* to **"GitHub Actions"**.

3. **That's it!**
   - GitHub will automatically run the build workflow in the **Actions** tab and publish your site at `https://<your-username>.github.io/<repo-name>/`.
   - All CSS, JavaScript, and font assets will load without 404 errors.

---

## 🛠️ Features Included

- **Executive Brand & Authority Showcase**: Dr. Julian Vance live authority mockup with interactive procedure briefing video player and priority scheduling intake modal.
- **Tailored Clinical Services Bento**: 4 bespoke medical architecture modules with interactive blueprint modal breakdowns.
- **Curated Case Studies**: Filterable by specialty (*Plastics & Aesthetic*, *Spine & Neuro*, *Longevity & Medicine*) with full outcome statistics and clinical challenge dossiers.
- **Practice ROI & Authority Calculator**: Interactive slider modeling tool calculating projected clinical inquiries and annual revenue expansion.
- **Studio CMS Admin Dashboard**: Edit all copy, doctor media, credentials, services, proof metrics, FAQs, and consultation forms directly in browser with real-time localStorage persistence, JSON import/export, and factory reset.
- **Clinical Compliance & Discretion**: 100% HIPAA and medical board advertising code adherence with signed mutual NDA standard.
