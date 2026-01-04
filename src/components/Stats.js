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