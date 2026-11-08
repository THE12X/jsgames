import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const [logoSrc, setLogoSrc] = useState(
    import.meta.env.BASE_URL + (isDark ? 'js-dark.png' : 'js.png')
  );

  useEffect(() => {
    setLogoSrc(import.meta.env.BASE_URL + (isDark ? 'js-dark.png' : 'js.png'));
  }, [isDark]);

  return (
    <div className='navigo'>
      <nav>
        <div className='logo'>
          <NavLink to="/" onClick={closeMenu} className="logo-link">
            <img 
              src={logoSrc} 
              alt="JS. GAMES Logo" 
              className={`nav-logo-img ${isDark ? 'dark-logo' : 'light-logo'}`} 
              onError={() => setLogoSrc(import.meta.env.BASE_URL + 'js.png')}
            />
            <h1 className="logo-text"><span className='span'>JS.</span> GAMES</h1>
          </NavLink>
        </div>

        <div className={`list ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink 
                className={({ isActive }) => (isActive ? 'a active-link' : 'a')} 
                to="/" 
                onClick={closeMenu}
              >
                HOME.
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => (isActive ? 'a active-link' : 'a')} 
                to="/content" 
                onClick={closeMenu}
              >
                GAMES.
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => (isActive ? 'a active-link' : 'a')} 
                to="/about" 
                onClick={closeMenu}
              >
                ABOUT.
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav-controls'>
          <button className='theme-btn' onClick={toggleTheme} aria-label="Toggle theme" title="Toggle Theme">
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          
          <button className='hamburger' onClick={toggleMenu} aria-label="Toggle menu" title="Menu">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;