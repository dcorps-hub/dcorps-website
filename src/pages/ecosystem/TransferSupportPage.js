// src/pages/ecosystem/TransferSupportPage.js
import React from 'react';

function TransferSupportPage() {
  const content = `Transfer Support: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Transfer Support</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TransferSupportPage;
