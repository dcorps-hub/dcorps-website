// src/pages/DeveloperPage.js
import React from 'react';

function DeveloperPage() {
  const content = `Developer Resources: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Developer</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default DeveloperPage;
