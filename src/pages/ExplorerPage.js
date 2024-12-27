// src/pages/ExplorerPage.js
import React from 'react';

function ExplorerPage() {
  const content = `<strong>dCorps</strong> Explorer: Explore the network with our comprehensive tools.`;

  return (
    <div className="page-text">
      <h1>Explorer</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ExplorerPage;
