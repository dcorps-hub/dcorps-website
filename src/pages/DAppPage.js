// src/pages/DAppPage.js
import React from 'react';

function DAppPage() {
  const content = `DApp: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>DApp</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DAppPage;
