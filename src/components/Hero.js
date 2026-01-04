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