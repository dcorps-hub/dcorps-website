// src/pages/dCorps/CorporationPage.js
import React from 'react';

function CorporationPage() {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Corporation</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default CorporationPage;
