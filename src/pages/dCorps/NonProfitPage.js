// src/pages/dCorps/NonProfitPage.js
import React from 'react';

function NonProfitPage() {
  const content = `Non-Profit: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Non-Profit</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default NonProfitPage;
