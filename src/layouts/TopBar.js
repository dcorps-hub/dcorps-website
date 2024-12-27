import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDiscord,
  FaTelegramPlane,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';

function TopBar({ isDarkMode, toggleTheme }) {
  return (
    <header className="top-bar">
      {/* Column 1: Menu */}
      <div className="top-bar-col menu-col">
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/explorer">Explorer</Link>
        </nav>
      </div>

      {/* Column 2: Cosmos Mention */}
      <div className="top-bar-col cosmos-col">
        <p className="cosmos-sdk-text">
          Developed on C&oslash;smos
          <img
            src={isDarkMode ? "/cosmos-white.png" : "/cosmos-black.png"}
            alt="Cosmos Logo"
            className="cosmos-logo"
          />
        </p>
      </div>

      {/* Column 3: Social Icons */}
      <div className="top-bar-col social-col">
        <div className="social-icons">
          <a
            href="https://x.com/dcorps_hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={isDarkMode ? "/x-white.png" : "/x-black.png"}
              alt="X Logo"
              className="social-logo"
            />
          </a>
          <a
            href="https://discord.com/yourserver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://github.com/dcorps-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab />
          </a>
        </div>
      </div>

      {/* Column 4: Light/Dark Toggle */}
      <div className="top-bar-col theme-col">
        <div className="theme-toggle">
          <label htmlFor="theme-toggle-switch">
            {isDarkMode ? 'Dark' : 'Light'}
          </label>
          <input
            id="theme-toggle-switch"
            type="checkbox"
            checked={!isDarkMode}
            onChange={toggleTheme}
          />
        </div>
      </div>

      {/* Column 5: Open DApp Button */}
      <div className="top-bar-col button-col">
        <Link to="/dapp">
          <button className="open-app">Open DApp</button>
        </Link>
      </div>
    </header>
  );
}

export default TopBar;
