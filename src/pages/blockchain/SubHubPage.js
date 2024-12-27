// src/pages/blockchain/SubHubPage.js
import React from 'react';

function SubHubPage() {
  const content = `Sub-Chain: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Sub-Hub</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default SubHubPage;
