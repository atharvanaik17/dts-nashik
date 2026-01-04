export const News = ({ t }) => {
  const newsItems = [
    {
      img: '/assets/images/Screenshot 2025-09-27 at 5.27.43 PM.png',
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
