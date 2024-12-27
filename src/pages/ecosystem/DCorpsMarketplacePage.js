// src/pages/ecosystem/DCorpsMarketplacePage.js
import React from 'react';

function DCorpsMarketplacePage() {
  const content = `<strong>dCorps</strong> Marketplace: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dCorps Marketplace</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DCorpsMarketplacePage;
