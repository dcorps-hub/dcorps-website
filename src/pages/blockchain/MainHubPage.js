// src/pages/blockchain/MainHubPage.js
import React from 'react';

function MainHubPage() {
  const content = `Main Hub: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Main Hub</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default MainHubPage;
