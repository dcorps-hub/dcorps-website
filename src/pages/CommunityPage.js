// src/pages/CommunityPage.js
import React from 'react';

function CommunityPage() {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Community</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default CommunityPage;
