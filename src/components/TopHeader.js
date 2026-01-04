import React from 'react';

const TopHeader = ({ 
  onFontIncrease, 
  onFontDecrease, 
  onFontNormal, 
  onContrastToggle, 
  contrastEnabled,
  onLanguageChange,
  currentLanguage,
  onMobileToggle,
  mobileMenuOpen
}) => {
  return (
    <div className="top-header" role="banner" aria-hidden="false">
      <div className="container top-content">
        <div className="social-links">
          <a href="https://instagram.com/dtsnashik" className="social-link" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/dtsnashik" className="social-link" aria-label="Follow us on Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/dtsnashik" className="social-link" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div aria-hidden="false">सरकार महाराष्ट्र | Government of Maharashtra</div>
        <div className="accessibility-tools" role="region" aria-label="Accessibility tools">
          <button 
            className="acc-btn" 
            onClick={onFontDecrease} 
            aria-label="Decrease font size"
          >
            A−
          </button>
          <button 
            className="acc-btn" 
            onClick={onFontNormal} 
            aria-label="Normal font size"
          >
            A
          </button>
          <button 
            className="acc-btn" 
            onClick={onFontIncrease} 
            aria-label="Increase font size"
          >
            A+
          </button>
          <button 
            className="acc-btn" 
            onClick={onContrastToggle} 
            aria-pressed={contrastEnabled}
            aria-label="Toggle high contrast"
          >
            A
          </button>
          <a 
            className="acc-btn" 
            href="#main-content" 
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Skip
          </a>

          <label htmlFor="langSelect" className="sr-only">Select language</label>
          <select 
            id="langSelect" 
            aria-label="Select language"
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="hi">हिंदी</option>
          </select>

          <button 
            className="mobile-toggle" 
            id="mobileMenuBtn" 
            aria-expanded={mobileMenuOpen}
            aria-controls="primaryNav" 
            aria-label="Toggle navigation menu"
            onClick={onMobileToggle}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;