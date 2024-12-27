// src/pages/tokens/DcorpPage.js
import React from 'react';

function DcorpPage() {
  const content = `dCorp Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>dCorp</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DcorpPage;
