# Quick Deploy Guide - Share with Client in Turkey

## Method 1: Netlify Drop (FASTEST - 2 Minutes)

1. **Go to**: https://drop.netlify.com
2. **Drag and drop** the entire `gb2` folder
3. **Copy the URL** (will be something like `https://clever-name-123456.netlify.app`)
4. **Send to client** via WhatsApp/Email

**No account needed! Completely free!**

---

## Method 2: Cloudflare Pages (5 Minutes - Professional)

### Via Direct Upload:

1. **Login to Cloudflare**: https://dash.cloudflare.com
2. Go to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Upload assets**
4. Give it a name: `global-paslanmaz-preview`
5. **Drag all files** from gb2 folder (or click to select):
   - All HTML files
   - styles.css
   - script.js
   - assets folder
6. Click **Deploy site**
7. Get URL: `https://global-paslanmaz-preview.pages.dev`
8. **Send to client**

**Note:** Later you can add custom domain `globalpaslanmaz.com.tr`

---

## Method 3: Vercel (3 Minutes - Also Great)

1. **Go to**: https://vercel.com
2. Click **Sign up** (free, use GitHub/Google)
3. Click **Add New** → **Project**
4. Drag the `gb2` folder
5. Click **Deploy**
6. Get URL: `https://global-paslanmaz.vercel.app`
7. **Send to client**

---

## Method 4: GitHub Pages (If Using Git)

```bash
# In terminal, from gb2 folder:
cd /Users/firath/Downloads/gb2

# Initialize git
git init
git add .
git commit -m "Initial website"

# Create repo on GitHub, then:
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
# URL will be: https://yourusername.github.io/repo-name
```

---

## Method 5: Surge.sh (CLI - Super Fast)

```bash
# Install surge (one-time)
npm install -g surge

# Deploy (from gb2 folder)
cd /Users/firath/Downloads/gb2
surge

# Follow prompts, get URL like:
# https://global-paslanmaz.surge.sh
```

---

## 🎯 RECOMMENDED FOR CLIENT PREVIEW

**For quick client review:** Use **Netlify Drop** (no account, instant)  
**For professional preview:** Use **Cloudflare Pages** (what you'll use for final site)

---

## 📱 Sharing with Client

Once deployed, send them:

**WhatsApp/Email Message Template:**

```
Merhaba,

Global Paslanmaz web sitesi taslağı hazır. 
Lütfen aşağıdaki linke tıklayarak inceleyin:

🔗 [YOUR_URL_HERE]

Mobil ve masaüstünde test edebilirsiniz.
Geri bildirimlerinizi bekliyorum.

Saygılarımla
```

---

## ⚠️ Important Notes

- All these services are **free**
- URL works **worldwide** (Turkey included)
- Client can view on **any device** (phone, tablet, computer)
- **No password needed** for client to view
- You can **update** anytime and URL stays same

---

## After Client Approval

1. Make any requested changes
2. Add actual logo and contact info
3. Re-deploy to final domain: `globalpaslanmaz.com.tr`
4. Follow instructions in `DEPLOYMENT-GUIDE.md`

