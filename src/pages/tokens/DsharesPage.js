// src/pages/tokens/DsharesPage.js
import React from 'react';

function DsharesPage() {
  const content = `dShares Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dShares</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DsharesPage;
