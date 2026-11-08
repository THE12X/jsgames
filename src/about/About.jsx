import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mrxff81@gmail.com?subject=Contact%20from%20JS.GAMES&body=Name:%20${encodeURIComponent(username)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='big'>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit} className='card'>
          <span className="login">GET IN TOUCH</span>
          
          <div className="inputBox">
            <input 
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="user">Username</span>
          </div>

          <div className="inputBox">
            <input 
              type="text" 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span>Message</span>
          </div>

          <input className="enter" type="submit" value="Send" />
        </form>
      </div>

      <div className="social-menu">
        <ul>
          <li>
            <a href="https://github.com/THE12X" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohamedkammou" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="mailto:mrxff81@gmail.com" aria-label="Gmail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;