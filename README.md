# Global Paslanmaz - Corporate Website

Modern, responsive, and professional static website for Global Paslanmaz, a leading Turkish industrial stainless steel kitchen equipment manufacturer.

## 🌐 Live Website
- **Domain**: globalpaslanmaz.com.tr
- **Hosting**: Cloudflare (Static Files)

## 📋 Project Overview

This is a fully static website built with pure HTML, CSS, and minimal JavaScript. It's designed for:
- Professional B2B audience (restaurants, hotels, catering companies)
- Primary language: Turkish
- Easy maintenance and content updates
- Fast loading and optimal performance
- Mobile-responsive design

## 🏗️ Project Structure

```
gb2/
├── index.html              # Home page (Ana Sayfa)
├── urunler.html           # Products page (Ürünler)
├── hakkimizda.html        # About page (Hakkımızda)
├── sektorler.html         # Sectors/References page (Sektörler)
├── iletisim.html          # Contact page (İletişim)
├── styles.css             # Main stylesheet
├── script.js              # JavaScript for mobile menu and interactions
├── assets/                # Images, logo, and other assets
│   ├── logo-global-paslanmaz.png  (Add your logo here)
│   └── favicon.png        (Add your favicon here)
└── README.md              # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #2c5f7d (Trust and professionalism)
- **Secondary Gray**: #8c8c8c (Stainless steel tone)
- **Accent Gold**: #d4af37 (Quality and premium feel)
- Clean, professional typography using Inter font family

### Key Sections
1. **Ana Sayfa (Home)**: Hero section, company intro, product categories, why choose us
2. **Ürünler (Products)**: Detailed product categories with descriptions
3. **Hakkımızda (About)**: Company history, mission, vision, values
4. **Sektörler (Sectors)**: Target industries and references
5. **İletişim (Contact)**: Contact form, company info, map placeholder, FAQ

## 🚀 Deployment to Cloudflare

### Method 1: Cloudflare Pages (Recommended)

1. **Push to Git Repository** (GitHub, GitLab, etc.)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Global Paslanmaz website"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Pages** → **Create a project**
   - Connect your Git repository
   - Configure build settings:
     - **Framework preset**: None
     - **Build command**: (leave empty)
     - **Build output directory**: `/`
   - Click **Save and Deploy**

3. **Configure Custom Domain**
   - After deployment, go to **Custom domains**
   - Add `globalpaslanmaz.com.tr` and `www.globalpaslanmaz.com.tr`
   - Cloudflare will automatically configure DNS

### Method 2: Manual Upload via Cloudflare Dashboard

1. **Prepare Files**
   - Ensure all files are in a single folder
   - Verify all links and paths are correct

2. **Upload to Cloudflare**
   - Log in to Cloudflare Dashboard
   - Go to **Pages** → **Create a project**
   - Choose **Direct Upload**
   - Upload all HTML, CSS, JS files and the assets folder
   - Click **Deploy**

### Method 3: Using Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages publish . --project-name=global-paslanmaz
   ```

## 📝 Content Updates

### Adding Your Logo
1. Replace placeholder images in `assets/` folder:
   - `logo-global-paslanmaz.png` (recommended size: 200x50px or similar aspect ratio)
   - `favicon.png` (32x32px or 64x64px)

### Updating Contact Information
Edit `iletisim.html` and all footer sections in each HTML file:
- Replace placeholder phone numbers
- Add real email addresses
- Update physical address
- Add social media links

### Adding Google Maps
In `iletisim.html`, replace the map placeholder:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business location
3. Click **Share** → **Embed a map**
4. Copy the iframe code
5. Replace the `.map-container` content with the iframe

### Form Integration
The contact form is currently static. To make it functional:

**Option 1: Formspree (Easiest)**
1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form endpoint
3. In `script.js`, uncomment the Formspree integration code
4. Replace `YOUR_FORM_ID` with your Formspree form ID

**Option 2: Netlify Forms** (if using Netlify)
Add `netlify` attribute to the form tag in `iletisim.html`

**Option 3: Custom Backend**
Integrate with your own backend API in `script.js`

## 🌍 Multi-Language Support (Future)

The project is structured to easily support multiple languages:

### Recommended Approach:
1. Create language-specific folders:
   ```
   /tr/index.html (Turkish - current)
   /en/index.html (English - future)
   ```

2. Or use a simple JavaScript language switcher:
   - Store translations in a JSON file
   - Toggle content based on user selection

## 🔧 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #2c5f7d;
  --secondary-color: #8c8c8c;
  --accent-color: #d4af37;
}
```

### Adding New Pages
1. Copy an existing HTML file (e.g., `hakkimizda.html`)
2. Update the content
3. Add navigation links in all pages' headers and footers

### Modifying Product Categories
Edit `urunler.html` and update the product cards in each section

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with minimal JavaScript
- Fast loading times
- SEO-friendly structure with meta tags
- Mobile-first responsive design

## 📞 Support

For questions or assistance with the website:
- Review the inline code comments
- Check Cloudflare documentation: [pages.cloudflare.com](https://pages.cloudflare.com)

## ✅ Pre-Deployment Checklist

**Already done (production-ready):**
- [x] Canonical URLs and Open Graph meta on all pages
- [x] Skip link and `<main>` landmark for accessibility
- [x] Mobile menu with `aria-expanded` / `aria-label`
- [x] Footer: contact info (Düzce, +90 501 945 62 25, e-posta) and © 2026 on all pages
- [x] İletişim: CTA with `tel:` and WhatsApp link; form ready for backend

**Before or after going live:**
- [ ] Add your actual logo (`assets/logo-global-paslanmaz.png`)
- [ ] Add favicon (`assets/favicon.png`)
- [ ] Integrate Google Maps in `iletisim.html` (see comment in file)
- [ ] Set up form handling: add Formspree/Netlify endpoint to contact form (see comment in `iletisim.html`)
- [ ] Add real social media URLs (footer links are currently `#`)
- [ ] Optionally replace reference placeholders on Sektörler with client names/logos
- [ ] Test all navigation links and forms on desktop and mobile

## 📄 License

© 2026 Global Paslanmaz. All rights reserved.

---

**Built with ❤️ for Global Paslanmaz**

