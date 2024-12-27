// src/pages/ecosystem/NameServicePage.js
import React from 'react';

function NameServicePage() {
  const content = `Name Service: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Name Service</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default NameServicePage;
