/**
 * Global Paslanmaz - Main JavaScript
 * Handles mobile menu toggle and smooth scrolling
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-controls', 'main-nav');
    if (nav.id !== 'main-nav') nav.id = 'main-nav';

    mobileMenuToggle.addEventListener('click', function() {
      var isOpen = nav.classList.toggle('active');
      this.classList.toggle('active');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      this.setAttribute('aria-label', isOpen ? 'Menüyü Kapat' : 'Menüyü Aç');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Menüyü Aç');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Menüyü Aç');
      }
    });
  }
  
  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Contact form: mailto to info@globalpaslanmaz.com.tr with CC mertcan.hocaoglu@gmail.com
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      var name = (document.getElementById('name') && document.getElementById('name').value) || '';
      var company = (document.getElementById('company') && document.getElementById('company').value) || '';
      var email = (document.getElementById('email') && document.getElementById('email').value) || '';
      var phone = (document.getElementById('phone') && document.getElementById('phone').value) || '';
      var subjectEl = document.getElementById('subject');
      var subjectText = subjectEl ? (subjectEl.options[subjectEl.selectedIndex] ? subjectEl.options[subjectEl.selectedIndex].text : '') : '';
      var message = (document.getElementById('message') && document.getElementById('message').value) || '';

      var body = 'Ad Soyad: ' + name + '\r\n';
      body += 'Firma: ' + company + '\r\n';
      body += 'E-posta: ' + email + '\r\n';
      body += 'Telefon: ' + phone + '\r\n';
      body += 'Konu: ' + subjectText + '\r\n\r\n';
      body += 'Mesaj:\r\n' + message;

      var mailtoUrl = 'mailto:info@globalpaslanmaz.com.tr';
      mailtoUrl += '?cc=mertcan.hocaoglu@gmail.com';
      mailtoUrl += '&subject=' + encodeURIComponent('Global Paslanmaz - İletişim Formu');
      mailtoUrl += '&body=' + encodeURIComponent(body);

      window.location.href = mailtoUrl;
      alert('E-posta istemciniz açılacaktır. Mesajı göndererek iletebilirsiniz. Teşekkür ederiz.');
      this.reset();
    });
  }
  
  // Add fade-in animation on scroll (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe cards and feature items for fade-in effect
  const animatedElements = document.querySelectorAll('.card, .feature-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
});

// Header scroll effect - add shadow on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
});

