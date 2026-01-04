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
              src="/assets/images/Screenshot 2025-09-27 at 5.30.49 PM.png" 
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