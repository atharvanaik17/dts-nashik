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