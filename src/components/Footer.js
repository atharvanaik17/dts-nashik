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