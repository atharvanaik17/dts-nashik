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
