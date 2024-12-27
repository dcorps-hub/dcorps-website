// src/pages/ecosystem/DCorpsExplorerPage.js
import React from 'react';

function DCorpsExplorerPage() {
  const content = `dCorps Explorer: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dCorps Explorer</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DCorpsExplorerPage;
