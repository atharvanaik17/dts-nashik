import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';
import Navigation from './components/Navigation';
import { WhatsNewBanner, Hero, Stats, PhotosSection, About, Training, News, Facilities, Footer } from './components/Sections';
import  translations  from './data/translations';
import { 
  initAccessibility, 
  setContrast, 
  getContrast, 
  increaseFontSize, 
  decreaseFontSize, 
  resetFontSize,
  announce 
} from './utils/accessibility';

function App() {
  const [language, setLanguage] = useState('en');
  const [contrastEnabled, setContrastEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Translation function
  const t = (key) => {
  const getNested = (obj, path) =>
    path.split('.').reduce((acc, part) => acc && acc[part], obj);

  return (
    getNested(translations[language], key) ||
    getNested(translations.en, key) ||
    key
  );
};


  useEffect(() => {
    // Initialize accessibility features
    initAccessibility();

    // Load saved language
    const savedLang = localStorage.getItem('site-lang') || (navigator.language || 'en').slice(0, 2);
    const initialLang = savedLang in translations ? savedLang : 'en';
    setLanguage(initialLang);
    document.documentElement.lang = initialLang;

    // Load saved contrast
    setContrastEnabled(getContrast());
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('site-lang', lang);
    announce('Language changed');
  };

  const handleContrastToggle = () => {
    const newState = !contrastEnabled;
    setContrast(newState);
    setContrastEnabled(newState);
  };

  const handleMobileToggle = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    announce(newState ? "Navigation opened" : "Navigation closed");
  };

  return (
    <div className="App">
      {/* Accessibility announcer */}
      <div id="a11y-announcer" aria-live="polite" aria-atomic="true" className="sr-only"></div>

      {/* Skip link */}
      <a className="skip-link" href="#main-content">Skip to main content</a>

      {/* Top Header */}
      <TopHeader 
        onFontIncrease={increaseFontSize}
        onFontDecrease={decreaseFontSize}
        onFontNormal={resetFontSize}
        onContrastToggle={handleContrastToggle}
        contrastEnabled={contrastEnabled}
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
        onMobileToggle={handleMobileToggle}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Main Header */}
      <MainHeader t={t} />

      {/* Navigation */}
      <Navigation t={t} mobileMenuOpen={mobileMenuOpen} />

      {/* What's New Banner */}
      <WhatsNewBanner />

      {/* Main Content */}
      <main id="main-content" tabindex="-1">
        <Hero t={t} />
        <Stats t={t} />
        <PhotosSection t={t} />

        <About t={t} />
        <Training t={t} />
        <News t={t} />
        <Facilities t={t} />
       

      </main>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}

export default App;