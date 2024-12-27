import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isDarkMode }) {
  const location = useLocation();

  // Single state for "openSection" to allow only one open at a time
  const [openSection, setOpenSection] = useState('');

  // Toggle section expansion
  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? '' : sectionName));
  };

  // Check if route is currently active
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      {/* Logo and Under-Development Label */}
      <Link to="/" className="logo-link">
        <div className="logo-container">
          <img
            src={isDarkMode ? '/dcorps-logo-white.png' : '/dcorps-logo-black.png'}
            alt="dCorps Icon"
            className="logo-icon"
          />
          <h1 className="logo-text">dCorps</h1>
        </div>
      </Link>
      <div className="under-development">sovereign blockchain</div>

      {/* Project */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('project')}>
          Project
        </div>
        <ul className={`menu-items ${openSection === 'project' ? 'open' : ''}`}>
          <li>
            <Link
              to="/vision"
              className={isActiveRoute('/vision') ? 'active' : ''}
            >
              Vision
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={isActiveRoute('/features') ? 'active' : ''}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/architecture"
              className={isActiveRoute('/architecture') ? 'active' : ''}
            >
              Architecture
            </Link>
          </li>
          <li>
            <Link
              to="/tokenomics"
              className={isActiveRoute('/tokenomics') ? 'active' : ''}
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              to="/governance"
              className={isActiveRoute('/governance') ? 'active' : ''}
            >
              Governance
            </Link>
          </li>
          <li>
            <Link
              to="/roadmap"
              className={isActiveRoute('/roadmap') ? 'active' : ''}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              to="/use-cases"
              className={isActiveRoute('/use-cases') ? 'active' : ''}
            >
              Use-Cases
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={isActiveRoute('/community') ? 'active' : ''}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/security"
              className={isActiveRoute('/security') ? 'active' : ''}
            >
              Security
            </Link>
          </li>
          <li>
            <Link
              to="/get-involved"
              className={isActiveRoute('/get-involved') ? 'active' : ''}
            >
              Get Involved
            </Link>
          </li>
        </ul>
      </div>

      {/* dCorps */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('dcorps')}>
          dCorps
        </div>
        <ul className={`menu-items ${openSection === 'dcorps' ? 'open' : ''}`}>
          <li>
            <Link
              to="/corporation"
              className={isActiveRoute('/corporation') ? 'active' : ''}
            >
              Corporation
            </Link>
          </li>
          <li>
            <Link
              to="/public-company"
              className={isActiveRoute('/public-company') ? 'active' : ''}
            >
              Public Company
            </Link>
          </li>
          <li>
            <Link
              to="/non-profit"
              className={isActiveRoute('/non-profit') ? 'active' : ''}
            >
              Non-Profit
            </Link>
          </li>
        </ul>
      </div>

      {/* Blockchain */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('blockchain')}>
          Blockchain
        </div>
        <ul className={`menu-items ${openSection === 'blockchain' ? 'open' : ''}`}>
          <li>
            <Link
              to="/main-hub"
              className={isActiveRoute('/main-hub') ? 'active' : ''}
            >
              Main Hub
            </Link>
          </li>
          <li>
            <Link
              to="/sub-hub"
              className={isActiveRoute('/sub-hub') ? 'active' : ''}
            >
              Sub-Hub
            </Link>
          </li>
          <li>
            <Link
              to="/sub-chain"
              className={isActiveRoute('/sub-chain') ? 'active' : ''}
            >
              Sub-Chain
            </Link>
          </li>
        </ul>
      </div>

      {/* Tokens */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('tokens')}>
          Tokens
        </div>
        <ul className={`menu-items ${openSection === 'tokens' ? 'open' : ''}`}>
          <li>
            <Link
              to="/dcorp"
              className={isActiveRoute('/dcorp') ? 'active' : ''}
            >
              dCorp
            </Link>
          </li>
          <li>
            <Link
              to="/dshares"
              className={isActiveRoute('/dshares') ? 'active' : ''}
            >
              dShares
            </Link>
          </li>
          <li>
            <Link
              to="/option"
              className={isActiveRoute('/option') ? 'active' : ''}
            >
              Option
            </Link>
          </li>
        </ul>
      </div>

      {/* DApp - now toggles like a sub-menu */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('dapp')}>
          DApp
        </div>
        <ul className={`menu-items ${openSection === 'dapp' ? 'open' : ''}`}>
          <li>
            <Link
              to="/dapp"
              className={isActiveRoute('/dapp') ? 'active' : ''}
            >
              DApp
            </Link>
          </li>
        </ul>
      </div>

      {/* Suites */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('suites')}>
          Suites
        </div>
        <ul className={`menu-items ${openSection === 'suites' ? 'open' : ''}`}>
          <li>
            <Link
              to="/crypto-merchant"
              className={isActiveRoute('/crypto-merchant') ? 'active' : ''}
            >
              Crypto Merchant
            </Link>
          </li>
          <li>
            <Link
              to="/invoicing-payroll"
              className={isActiveRoute('/invoicing-payroll') ? 'active' : ''}
            >
              Invoicing & Payroll
            </Link>
          </li>
          <li>
            <Link
              to="/hr-system"
              className={isActiveRoute('/hr-system') ? 'active' : ''}
            >
              HR System
            </Link>
          </li>
          <li>
            <Link
              to="/treasury-management"
              className={isActiveRoute('/treasury-management') ? 'active' : ''}
            >
              Treasury Management
            </Link>
          </li>
        </ul>
      </div>

      {/* Ecosystem */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('ecosystem')}>
          Ecosystem
        </div>
        <ul className={`menu-items ${openSection === 'ecosystem' ? 'open' : ''}`}>
          <li>
            <Link
              to="/dcorps-explorer"
              className={isActiveRoute('/dcorps-explorer') ? 'active' : ''}
            >
              dCorps Explorer
            </Link>
          </li>
          <li>
            <Link
              to="/dshares-exchange"
              className={isActiveRoute('/dshares-exchange') ? 'active' : ''}
            >
              dShares Exchange
            </Link>
          </li>
          <li>
            <Link
              to="/dcorps-marketplace"
              className={isActiveRoute('/dcorps-marketplace') ? 'active' : ''}
            >
              dCorps Marketplace
            </Link>
          </li>
          <li>
            <Link
              to="/dshares-initial-offering"
              className={isActiveRoute('/dshares-initial-offering') ? 'active' : ''}
            >
              dShares Initial Offering
            </Link>
          </li>
          <li>
            <Link
              to="/initial-dex-offering"
              className={isActiveRoute('/initial-dex-offering') ? 'active' : ''}
            >
              Initial DEX Offering
            </Link>
          </li>
          <li>
            <Link
              to="/transfer-support"
              className={isActiveRoute('/transfer-support') ? 'active' : ''}
            >
              Transfer Support
            </Link>
          </li>
          <li>
            <Link
              to="/name-service"
              className={isActiveRoute('/name-service') ? 'active' : ''}
            >
              Name Service
            </Link>
          </li>
          <li>
            <Link
              to="/interoperability"
              className={isActiveRoute('/interoperability') ? 'active' : ''}
            >
              Interoperability
            </Link>
          </li>
        </ul>
      </div>

      {/* Developer - now toggles like a sub-menu */}
      <div className="menu-section">
        <div className="menu-title" onClick={() => toggleSection('developer')}>
          Developer
        </div>
        <ul className={`menu-items ${openSection === 'developer' ? 'open' : ''}`}>
          <li>
            <Link
              to="/developer"
              className={isActiveRoute('/developer') ? 'active' : ''}
            >
              Developer
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
