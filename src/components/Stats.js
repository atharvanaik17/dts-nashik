export const Stats = ({ t }) => {
  const stats = [
    { icon: '🎓', number: '5000+', label: t('stat_officers') },
    { icon: '📚', number: '230+', label: t('stat_sessions') },
    { icon: '🏢', number: '200', label: t('stat_capacity') },
    { icon: '⭐', number: '38+', label: t('stat_years') },
    { icon: '🏆', number: 'ISO 9001', label: t('stat_cert') }
  ];

  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className="sr-only">Training Statistics</h2>
        <div className="stats-grid" role="list" aria-label="Key statistics">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item" role="listitem">
              <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};