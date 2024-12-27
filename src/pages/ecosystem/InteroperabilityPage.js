// src/pages/ecosystem/InteroperabilityPage.js
import React from 'react';

function InteroperabilityPage() {
  const content = `Interoperability: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Interoperability</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default InteroperabilityPage;
