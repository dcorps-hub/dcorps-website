// src/pages/suites/HrSystemPage.js
import React from 'react';

function HrSystemPage() {
  const content = `RH System: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>HR System</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default HrSystemPage;
