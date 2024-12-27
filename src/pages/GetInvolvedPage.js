// src/pages/GetInvolvedPage.js
import React from 'react';

function GetInvolvedPage() {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Get Involved</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default GetInvolvedPage;
