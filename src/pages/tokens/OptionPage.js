// src/pages/tokens/OptionPage.js
import React from 'react';

function OptionPage() {
  const content = `Option Token: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Option</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default OptionPage;
