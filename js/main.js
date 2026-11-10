/**
 * 1Life Accounting - Interactive Behaviors & Analytics Event Hooks
 * Built according to DESIGN.md specifications:
 * - Mobile navigation with Escape key support and focus management
 * - FAQ accordion toggling
 * - Low-friction consultation form validation & submission handling
 * - Analytics event tracking hooks (generate_lead, book_consultation_click, contact_email_click, contact_phone_click)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer copyright
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Sticky header scroll behavior
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Accessible Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('primary-nav');

  if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
      const shouldOpen = typeof open === 'boolean' ? open : menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(shouldOpen));
      if (shouldOpen) {
        navMenu.classList.add('open');
      } else {
        navMenu.classList.remove('open');
      }
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Close menu when a navigation link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // FAQ Accordion Toggling
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close others for clean UX
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Analytics Dispatch Helper
  const trackAnalyticsEvent = (eventName, params = {}) => {
    // If Google Analytics (gtag) or dataLayer exists, push event
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...params });
    }
  };

  // Event Tracking: Consultation CTA Clicks
  document.querySelectorAll('.cta-track').forEach(cta => {
    cta.addEventListener('click', (e) => {
      const ctaType = cta.getAttribute('data-cta') || 'general-cta';
      trackAnalyticsEvent('book_consultation_click', { cta_label: ctaType });
    });
  });

  // Event Tracking: Direct Contact Clicks
  document.querySelectorAll('.phone-track').forEach(phoneEl => {
    phoneEl.addEventListener('click', () => {
      trackAnalyticsEvent('contact_phone_click');
    });
  });

  document.querySelectorAll('.email-track').forEach(emailEl => {
    emailEl.addEventListener('click', () => {
      trackAnalyticsEvent('contact_email_click');
    });
  });

  // Form Validation & Submission: Consultation Form
  const form = document.getElementById('consultation-form');
  const successBanner = document.getElementById('form-success');

  if (form && successBanner) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const nameInput = document.getElementById('name');
      const nameGroup = document.getElementById('group-name');
      if (nameInput && nameGroup) {
        if (!nameInput.value.trim()) {
          nameGroup.classList.add('has-error');
          isValid = false;
        } else {
          nameGroup.classList.remove('has-error');
        }
      }

      // Validate Email (basic RFC format check)
      const emailInput = document.getElementById('email');
      const emailGroup = document.getElementById('group-email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && emailGroup) {
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
          emailGroup.classList.add('has-error');
          isValid = false;
        } else {
          emailGroup.classList.remove('has-error');
        }
      }

      // Validate Help Description
      const helpInput = document.getElementById('help');
      const helpGroup = document.getElementById('group-help');
      if (helpInput && helpGroup) {
        if (!helpInput.value.trim()) {
          helpGroup.classList.add('has-error');
          isValid = false;
        } else {
          helpGroup.classList.remove('has-error');
        }
      }

      if (!isValid) {
        trackAnalyticsEvent('form_error', { form_id: 'consultation_form' });
        // Focus first invalid field
        const firstError = form.querySelector('.form-group.has-error input, .form-group.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Gather form values for honest direct dispatch
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const companyVal = document.getElementById('company') ? document.getElementById('company').value.trim() : '';
      const phoneVal = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
      const prefVal = document.getElementById('meeting-preference') ? document.getElementById('meeting-preference').value : 'virtual';
      const helpVal = helpInput ? helpInput.value.trim() : '';

      // Prepare mailto payload
      const subject = encodeURIComponent(`1Life Accounting Consultation Request: ${nameVal}${companyVal ? ' (' + companyVal + ')' : ''}`);
      const body = encodeURIComponent(
        `Name: ${nameVal}\n` +
        `Work Email: ${emailVal}\n` +
        `Company: ${companyVal || 'N/A'}\n` +
        `Phone: ${phoneVal || 'N/A'}\n` +
        `Meeting Preference: ${prefVal}\n\n` +
        `Details of Enquiry:\n${helpVal}`
      );

      const mailtoUrl = `mailto:info@1lifeaccounting.com?subject=${subject}&body=${body}`;

      // Open mail client
      window.location.href = mailtoUrl;

      // Provide clear on-page guidance
      successBanner.style.display = 'block';
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Track lead generation upon genuine user-driven enquiry action
      trackAnalyticsEvent('generate_lead', {
        form_destination: 'mailto:info@1lifeaccounting.com',
        event_category: 'engagement'
      });
    });

    // Clear error states on input
    ['name', 'email', 'help'].forEach(fieldId => {
      const field = document.getElementById(fieldId);
      const group = document.getElementById(`group-${fieldId}`);
      if (field && group) {
        field.addEventListener('input', () => {
          if (group.classList.contains('has-error') && field.value.trim()) {
            group.classList.remove('has-error');
          }
        });
      }
    });
  }
});
