// src/pages/ecosystem/DSharesExchangePage.js
import React from 'react';

function DSharesExchangePage() {
  const content = `dShares Exchange: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dShares Exchange</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DSharesExchangePage;
