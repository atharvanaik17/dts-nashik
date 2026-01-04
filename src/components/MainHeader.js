import React from 'react';

const MainHeader = ({ t }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    if (parent && parent.classList.contains('logo-emblem')) {
      parent.innerHTML = '<span style="font-size:12px; text-align:center;">महाराष्ट्र<br>पोलीस</span>';
    }
  };

  return (
    <header className="main-header" role="banner">
      <div className="container header-row">
        <div className="logo-emblem" aria-hidden="false">
          <img 
            src="/assets/images/maharashtra-police-logo.png" 
            alt="Maharashtra Police emblem" 
            onError={handleImageError}
          />
        </div>

        <div className="title-section" style={{ minWidth: 0 }}>
          <h1>{t('site_title')}</h1>
          <div className="subtitle">{t('site_subtitle')}</div>
        </div>

        <div className="govt-logos" aria-hidden="false">
          <div className="govt-logo" title="Government of India">
            <img 
              src="/assets/images/india-emblem.png" 
              alt="Government of India emblem" 
              onError={handleImageError}
            />
          </div>
          <div className="govt-logo" title="Government of Maharashtra">
            <img 
              src="/assets/images/maharashtra-emblem.png" 
              alt="Maharashtra Government emblem" 
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;