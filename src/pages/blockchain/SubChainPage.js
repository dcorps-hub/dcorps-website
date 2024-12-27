// src/pages/blockchain/SubChainPage.js
import React from 'react';

function SubChainPage() {
  const content = `Sub-Chain: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Sub-Chain</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default SubChainPage;
