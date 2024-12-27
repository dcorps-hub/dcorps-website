// src/pages/ArchitecturePage.js
import React from 'react';

function ArchitecturePage() {
  const content = `
      <p>The architecture of the <strong>dCorps</strong> ecosystem leverages the Cosmos SDK ... </p>
      <hr>
      <h4>The Main Hub and Sub-Hubs</h4>
      <p>The main hub chain includes core Cosmos SDK modules (Auth, Bank, Staking, Governance) ... </p>
      <p>Sub-hubs, if introduced, can be independent Cosmos SDK-based ...</p>
      <hr>
      <h4>Entity Creation and Registration</h4>
      <p>To form a new entity (corporation, non-profit, or otherwise) ...</p>
      <hr>
      <h4>On-Chain Data and Role Management</h4>
      <p>Each sub-chain encodes corporate structures and roles using ...</p>
      <hr>
      <h4>dShares, Voting Rights, and Financial Instruments</h4>
      <p>dShares, implemented as custom token modules on sub-chains ...</p>
      <hr>
      <h4>Wallets, Identities, and Compliance</h4>
      <p>Wallets correspond to accounts controlled by private keys ...</p>
      <hr>
      <h4>Financial Operations and DeFi Integration</h4>
      <p>Treasury management, expenses, and payroll are handled by specialized ...</p>
      <p>Moreover, entities can diversify their holdings across various digital assets ...</p>
      <hr>
      <h4>Marketplace, dApps, and Cross-Chain Services</h4>
      <p>Front-end decentralized applications (dApps) connect to node APIs ...</p>
      <p>By leveraging IBC, sub-chains connect to a broad universe ...</p>
      <hr>
      <h4>Scalability, Interoperability, and Adaptation</h4>
      <p>Each chain runs on Tendermint/CometBFT consensus ...</p>
      <hr>
      <h4>In Conclusion</h4>
      <p>The <strong>dCorps</strong> architecture is a flexible and interoperable framework ...</p>
    `;

  return (
    <div className="page-text">
      <h1>Architecture</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArchitecturePage;
