// src/pages/suites/TreasuryManagementPage.js
import React from 'react';

function TreasuryManagementPage() {
  const content = `Treasury Management: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Treasury Management</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TreasuryManagementPage;
