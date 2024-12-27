// src/pages/RoadmapPage.js
import React from 'react';

function RoadmapPage() {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Roadmap</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default RoadmapPage;
