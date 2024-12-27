// src/pages/dCorps/PublicCompanyPage.js
import React from 'react';

function PublicCompanyPage() {
  const content = `Public Company: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Public Company</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default PublicCompanyPage;
