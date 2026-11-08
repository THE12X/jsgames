import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains('dark-mode')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const [imgSrc, setImgSrc] = useState(
    import.meta.env.BASE_URL + (isDark ? 'js-dark.png' : 'js.png')
  );

  useEffect(() => {
    setImgSrc(import.meta.env.BASE_URL + (isDark ? 'js-dark.png' : 'js.png'));
  }, [isDark]);

  return (
    <div className='body'>
      <div className='container'>
        <div className='s1'>
          <div className='cont'>
            <h1 className='title'><span className='link'>JAVASCRIPT.</span> GAMES</h1>
            <p className='p'>
              Level up your browser gaming! <span className='link'>JS. GAMES</span> is an interactive playground of retro arcade hits, puzzles, and skill games—crafted 100% with pure <span className='link'>JavaScript</span>. No downloads, zero installation, instant free fun. Got feedback or an idea for a new game? Connect with us <Link className='hand' to="/about">→ HERE.</Link>
            </p>
            <Link to="/content"><button className='btn'>PLAY NOW</button></Link>
          </div>
        </div>
        <div className='s2'>
          <img 
            src={imgSrc} 
            alt='JS Games Logo' 
            className={`img ${isDark ? 'dark-logo' : 'light-logo'}`} 
            onError={() => setImgSrc(import.meta.env.BASE_URL + 'js.png')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;