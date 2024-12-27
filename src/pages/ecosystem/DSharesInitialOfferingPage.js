// src/pages/ecosystem/DSharesInitialOfferingPage.js
import React from 'react';

function DSharesInitialOfferingPage() {
  const content = `dShares Initial Offering: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dShares Initial Offering</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DSharesInitialOfferingPage;
