// src/pages/TermsOfUsePage.js
import React from 'react';

function TermsOfUsePage() {
  const content = `Terms of Use: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Terms of Use</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TermsOfUsePage;
