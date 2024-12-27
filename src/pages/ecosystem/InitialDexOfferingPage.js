// src/pages/ecosystem/InitialDexOfferingPage.js
import React from 'react';

function InitialDexOfferingPage() {
  const content = `Initial DEX Offering: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Initial DEX Offering</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default InitialDexOfferingPage;
