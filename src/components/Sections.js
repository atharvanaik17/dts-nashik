// ========== WhatsNewBanner.js ==========
import React from 'react';

export const WhatsNewBanner = () => {
  return (
    <div className="whats-new">
      <div className="whats-new-content">
        🎉 New Ultra-Modern Training Building Inaugurated | 📚 Specialized Cyber Crime Investigation Course Starting Soon | 🏆 ISO 9001 Certified Institution | 📞 Admissions Open for 2025 Batch | 🔬 Advanced Forensic Laboratory Now Operational
      </div>
    </div>
  );
};

// ========== Hero.js ==========
export const Hero = ({ t }) => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <h2 id="hero-heading">
          <span>{t('hero_line1')}</span>{' '}
          <span className="highlight">{t('hero_highlight')}</span>
        </h2>
        <p>{t('hero_text')}</p>
        <div className="cta-buttons" role="group" aria-label="Call to action">
          <a className="btn btn-primary" href="#training">{t('cta_explore')}</a>
          <a className="btn btn-secondary" href="#admissions">{t('cta_apply')}</a>
        </div>
      </div>
    </section>
  );
};

// ========== Stats.js ==========
export const Stats = ({ t }) => {
  const stats = [
    { icon: '🎓', number: '5000+', label: 'Officers Trained' },
    { icon: '📚', number: '230+', label: 'Training Sessions' },
    { icon: '🏢', number: '200', label: 'Training Capacity' },
    { icon: '⭐', number: '38+', label: 'Years of Excellence' },
    { icon: '🏆', number: 'ISO 9001', label: 'Certified' }
  ];

  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="stats-wrapper">
        <div className="stats-background">
          <img 
            src="/assets/images/screenshot-3.png"
            alt=""
            onError={(e) => {
              console.log('❌ Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('✅ Image loaded successfully')}
          />
        </div>
        
        <div className="stats-overlay"></div>
        
        <div className="stats-content">
          <h2 id="stats-heading" className="sr-only">
            Training Statistics
          </h2>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== PhotosSection.js ==========
export const PhotosSection = ({ t }) => {
  const photos = [
    {
      src: '/assets/images/ADG.jpg',
      alt: t('photos.adg.alt'),
      title: t('photos.adg.title'),
      description: t('photos.adg.description'),
    },
    {
      src: '/assets/images/DTSd.jpg',
      alt: t('photos.dts.alt'),
      title: t('photos.dts.title'),
      description: t('photos.dts.description'),
    },
  ];

  

 return (
    <section className="photos-section" aria-labelledby="photos-heading">
      <div className="photos-grid">
        {photos.map((photo, idx) => (
          <div key={idx} className="photo-card">
            <img src={photo.src} alt={photo.alt} />
            <div className="photo-card-content">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ========== About.js ==========
export const About = ({ t }) => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div>
          <h3 id="about-heading">
            {t('about_title')} <span className="highlight">{t('about_highlight')}</span>
          </h3>
          <p>{t('about_para1')}</p>
          <p>{t('about_para2')}</p>
          <p>{t('about_para3')}</p>
        </div>
        <div className="about-image" role="img" aria-label="Modern training facility building">
          <picture>
            <img 
              src="/assets/images/screenshot-3.png"
              alt="State-of-the-art training building with modern equipment" 
              className="responsive-img" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="fallback" style="text-align:center; padding:1px; color:rgba(255,255,255,0.95);"><strong>State-of-the-art Training Facilities</strong><br/>Modern Building with Advanced Equipment & Infrastructure</div>';
              }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

// ========== Training.js ==========
export const Training = ({ t }) => {
  const services = [
    { icon: '📅', title: t('svc_calendar'), desc: t('svc_calendar_p') },
    { icon: '💻', title: t('svc_online_training'), desc: t('svc_online_training_p') },
    { icon: '📢', title: t('svc_awareness_program'), desc: t('svc_awareness_program_p') },
    { icon: '📚', title: t('svc_course_details'), desc: t('svc_course_details_p') },
    { icon: '📋', title: t('svc_joining_instructions'), desc: t('svc_joining_instructions_p') },
    { icon: '🎯', title: t('svc_specialized'), desc: t('svc_specialized_p') }
  ];

  return (
    <section id="training" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-title">
          <h3 id="services-heading">{t('services_title')}</h3>
          <p>{t('services_sub')}</p>
        </div>
        <div className="services-grid" role="list" aria-label="Training programs">
          {services.map((service, idx) => (
            <div key={idx} className="service-card" role="listitem">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== News.js ==========
export const News = ({ t }) => {
  const newsItems = [
    {
      img: '/assets/images/screenshot-1.png',
      date: 'April 24, 2022',
      title: t('news1_title'),
      desc: t('news1_p')
    },
    {
      img: '/assets/images/training-session.jpg',
      date: 'November 2023',
      title: t('news2_title'),
      desc: t('news2_p')
    },
    {
      img: '/assets/images/awards.jpg',
      date: t('news3_date'),
      title: t('news3_title'),
      desc: t('news3_p')
    }
  ];

  return (
    <section className="news" id="news" aria-labelledby="news-heading">
      <div className="container">
        <div className="section-title">
          <h3 id="news-heading">{t('news_title')}</h3>
          <p>{t('news_sub')}</p>
        </div>
        <div className="news-grid" role="list">
          {newsItems.map((item, idx) => (
            <article key={idx} className="news-card" role="article">
              <div className="news-image" aria-hidden="true">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="news-content">
                <div className="news-date">{item.date}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== Facilities.js ==========
export const Facilities = ({ t }) => {
  const facilities = [
    { icon: '🏢', title: t('fac_hostel'), desc: t('fac_hostel_p') },
    { icon: '🍽️', title: t('fac_dining'), desc: t('fac_dining_p') },
    { icon: '💧', title: t('fac_water'), desc: t('fac_water_p') },
    { icon: '🏋️', title: t('fac_gym'), desc: t('fac_gym_p') },
    { icon: '🏓', title: t('fac_sports'), desc: t('fac_sports_p') },
    { icon: '📚', title: t('fac_library'), desc: t('fac_library_p') }
  ];

  return (
    <section id="facilities" aria-labelledby="facilities-heading" className="services">
      <div className="container">
        <div className="section-title">
          <h3 id="facilities-heading">{t('facilities_title')}</h3>
          <p>{t('facilities_sub')}</p>
        </div>
        <div className="services-grid" role="list" aria-label="Facilities list">
          {facilities.map((facility, idx) => (
            <div key={idx} className="service-card" role="listitem">
              <div className="service-icon" aria-hidden="true">{facility.icon}</div>
              <h4>{facility.title}</h4>
              <p>{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========== Footer.js ==========
export const Footer = ({ t }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact" role="contentinfo" aria-labelledby="contact-heading">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>{t('contact_heading')}</h4>
            <p>
              📞 <span>{t('contact_phone')}</span>{' '}
              <a href="tel:+912532993303" style={{ color: 'inherit', textDecoration: 'underline' }}>
                0253-2993303
              </a>
            </p>
            <p>
              📧 <span>{t('contact_email')}</span>{' '}
              <a href="mailto:dts.nashik@mahapolice.gov.in" style={{ color: 'inherit', textDecoration: 'underline' }}>
                dts.nashik@mahapolice.gov.in
              </a>
            </p>
            <p>{t('contact_address_label')}</p>
            <address>
              <span style={{ whiteSpace: 'pre-line' }}>{t('contact_address')}</span>
            </address>
          </div>

          <div className="footer-section">
            <h4>{t('links_heading')}</h4>
            <a href="#about">{t('nav_about')}</a>
            <a href="#training">{t('nav_training')}</a>
            <a href="#admissions">{t('nav_admissions')}</a>
            <a href="#faculty">{t('nav_faculty')}</a>
            <a href="#facilities">{t('nav_facilities')}</a>
            <a href="#gallery">{t('nav_gallery')}</a>
          </div>

          <div className="footer-section">
            <h4>{t('training_cat_heading')}</h4>
            <a href="#calendar">{t('nav_calendar')}</a>
            <a href="#online-training">{t('nav_online_training')}</a>
            <a href="#awareness-program">{t('nav_awareness_program')}</a>
            <a href="#course-details">{t('nav_course_details')}</a>
            <a href="#joining-instructions">{t('nav_joining_instructions')}</a>
          </div>

          <div className="footer-section">
            <h4>{t('important_links')}</h4>
            <a href="https://mahapolice.gov.in" target="_blank" rel="noopener noreferrer">Maharashtra Police</a>
            <a href="https://www.maharashtra.gov.in" target="_blank" rel="noopener noreferrer">Maharashtra Government</a>
            <a href="#rti">{t('rti')}</a>
            <a href="#grievance">{t('grievance')}</a>
            <a href="#career">{t('career')}</a>
          </div>
        </div>

        <div className="footer-bottom" role="status">
          <p>
            &copy; {year} Detective Training School, Nashik. All rights reserved. | Government of Maharashtra | {t('last_updated')} January 2025
          </p>
        </div>
      </div>
    </footer>
  );
};