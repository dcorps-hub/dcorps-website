// src/pages/UseCasesPage.js
import React from 'react';

function UseCasesPage() {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Use-Cases</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default UseCasesPage;
