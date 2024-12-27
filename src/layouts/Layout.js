// src/layouts/Layout.js
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Footer from './Footer';
import RoadmapList from './RoadmapList';

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // Add this local state for toggling the Roadmap’s open/collapsed
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.documentElement.className = isDarkMode ? '' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Sidebar isDarkMode={isDarkMode} />

      <div className="content-area">
        <TopBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <div className="content-body">
          {/* Toggle classes on <main> using isOpen */}
          <main className={`main-content ${isOpen ? 'open' : 'collapsed'}`}>
            <Outlet />
          </main>

          {/* Pass isOpen and setIsOpen down to RoadmapList */}
          <RoadmapList isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
