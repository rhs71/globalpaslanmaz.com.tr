# 🚀 Quick Deployment Guide - Global Paslanmaz

## Before You Deploy - Essential Checklist

### 1. Add Your Logo and Images
Navigate to the `assets/` folder and add:
- ✅ `logo-global-paslanmaz.png` - Your company logo
- ✅ `favicon.png` - Browser tab icon
- Optional: Product images

### 2. Update Contact Information
Replace placeholder text in these files:
- All HTML files (footer sections)
- `iletisim.html` (contact page)

**What to update:**
- Phone numbers: Replace `+90 (XXX) XXX XX XX`
- Email addresses: Replace `info@globalpaslanmaz.com.tr` with real emails
- Physical address: Replace placeholder address
- Social media links: Replace `#` with actual URLs

### 3. Set Up Contact Form
The contact form needs backend integration. Choose one:

**Option A - Formspree (Easiest, Free):**
```javascript
// 1. Sign up at https://formspree.io
// 2. Create a new form
// 3. Get your form endpoint URL
// 4. In script.js, find the commented Formspree code (line ~45)
// 5. Uncomment it and add your form ID
```

**Option B - Cloudflare Workers:**
Create a simple email forwarding worker (requires some coding)

**Option C - Third-party service:**
Use services like Basin, FormKeep, or similar

### 4. Add Google Maps
In `iletisim.html`:
1. Find the map placeholder section
2. Go to Google Maps → find your location → Share → Embed
3. Replace the placeholder with your iframe code

---

## Deploy to Cloudflare - Step by Step

### Method 1: Cloudflare Pages (Direct Upload) - Fastest

1. **Login to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Navigate to **Pages**

2. **Create New Project**
   - Click **Create a project**
   - Select **Upload assets**

3. **Upload Files**
   - Drag and drop ALL files from the `gb2` folder
   - Make sure to include:
     - All HTML files (index.html, urunler.html, etc.)
     - styles.css
     - script.js
     - assets folder (with logo)

4. **Deploy**
   - Click **Deploy site**
   - Wait for deployment (usually 30-60 seconds)

5. **Set Custom Domain**
   - After deployment, click **Custom domains**
   - Add `globalpaslanmaz.com.tr`
   - Cloudflare will configure DNS automatically

### Method 2: Cloudflare Pages (Git) - Recommended for Updates

1. **Create Git Repository**
   ```bash
   cd /Users/firath/Downloads/gb2
   git init
   git add .
   git commit -m "Initial commit - Global Paslanmaz website"
   ```

2. **Push to GitHub/GitLab**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin YOUR_REPO_URL
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Click **Create a project**
   - Select **Connect to Git**
   - Choose your repository
   - Build settings:
     - Framework preset: **None**
     - Build command: (leave empty)
     - Build output directory: **/**
   - Click **Save and Deploy**

4. **Automatic Deployments**
   - Every time you push to main branch, site auto-deploys

---

## Testing Before Deploy

### Local Testing
Simply open `index.html` in your browser to preview the site locally.

### Check These:
- ✅ All navigation links work
- ✅ Mobile menu opens and closes
- ✅ All pages load correctly
- ✅ Contact form validates inputs
- ✅ Logo displays (if added)
- ✅ Footer links work
- ✅ Phone/email links work (tel: and mailto:)

---

## After Deployment

### 1. Set Up SSL/HTTPS
Cloudflare automatically provides SSL. Ensure:
- Force HTTPS redirect is enabled
- SSL mode is "Full" or "Full (strict)"

### 2. Configure DNS (if not auto-configured)
Add these records in Cloudflare DNS:
```
Type: CNAME
Name: www
Content: globalpaslanmaz.com.tr
```

### 3. SEO Setup
- Submit sitemap to Google Search Console
- Add Google Analytics (optional)
- Verify structured data

### 4. Performance Optimization
In Cloudflare:
- Enable **Auto Minify** (HTML, CSS, JS)
- Enable **Brotli** compression
- Enable **Rocket Loader** (optional)
- Configure **Cache Rules**

---

## Making Updates

### Quick Content Changes
1. Edit the HTML files locally
2. If using Git + Cloudflare Pages:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. If using direct upload:
   - Re-upload changed files via Cloudflare Dashboard

### Adding New Products
1. Edit `urunler.html`
2. Copy an existing product card
3. Update text and image
4. Re-deploy

---

## Troubleshooting

### Logo Not Showing
- Verify `assets/logo-global-paslanmaz.png` exists
- Check file name matches exactly (case-sensitive)
- Clear browser cache

### Form Not Submitting
- Check browser console for errors
- Verify Formspree integration is configured
- Test with valid email address

### Mobile Menu Not Working
- Ensure `script.js` is loaded
- Check browser console for JavaScript errors
- Clear cache and reload

### Page Not Found (404)
- Verify file names match navigation links
- Check all files are uploaded to Cloudflare
- Ensure file names are lowercase

---

## Support Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Formspree Docs**: https://help.formspree.io/
- **HTML/CSS Help**: https://developer.mozilla.org/

---

## Quick Command Reference

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main

# Check status
git status

# View recent commits
git log --oneline
```

---

**Need help?** Review the inline comments in the code files. Each HTML, CSS, and JS file contains helpful explanations.

Good luck with your deployment! 🎉

