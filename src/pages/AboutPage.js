// src/pages/AboutPage.js
import React from 'react';

function AboutPage() {
  const content = `
    About <strong>dCorps</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  `;

  return (
    <div className="page-text">
      <h1>About</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default AboutPage;
