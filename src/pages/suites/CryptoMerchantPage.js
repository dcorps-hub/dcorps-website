// src/pages/suites/CryptoMerchantPage.js
import React from 'react';

function CryptoMerchantPage() {
  const content = `Crypto Merchant: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Crypto Merchant</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default CryptoMerchantPage;
