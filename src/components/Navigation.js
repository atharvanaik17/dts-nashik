import React from 'react';

const Navigation = ({ t, mobileMenuOpen }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-row">
        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="primaryNav" role="menubar">
          <li className="nav-item" role="none">
            <a role="menuitem" href="#home" aria-current="true">{t('nav_home')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#about" aria-haspopup="true" aria-expanded="false">
              {t('nav_about')}
            </a>
            <div className="dropdown" role="menu" aria-label="About submenu">
              <a role="menuitem" href="#history">{t('nav_history')}</a>
              <a role="menuitem" href="#mission">{t('nav_mission')}</a>
              <a role="menuitem" href="#objectives">{t('nav_objectives')}</a>
              <a role="menuitem" href="#achievements">{t('nav_achievements')}</a>
            </div>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#training" aria-haspopup="true" aria-expanded="false">
              {t('nav_training')}
            </a>
            <div className="dropdown" role="menu" aria-label="Training submenu">
              <a role="menuitem" href="#calendar">{t('nav_calendar')}</a>
              <a role="menuitem" href="#online-training">{t('nav_online_training')}</a>
              <a role="menuitem" href="#awareness-program">{t('nav_awareness_program')}</a>
              <a role="menuitem" href="#course-details">{t('nav_course_details')}</a>
              <a role="menuitem" href="#joining-instructions">{t('nav_joining_instructions')}</a>
            </div>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#facilities">{t('nav_facilities')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#faculty">{t('nav_faculty')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#admissions">{t('nav_admissions')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#gallery">{t('nav_gallery')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#publication">{t('nav_publication')}</a>
          </li>
          <li className="nav-item" role="none">
            <a role="menuitem" href="#contact">{t('nav_contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;