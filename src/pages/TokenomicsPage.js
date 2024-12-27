// src/pages/TokenomicsPage.js
import React from 'react';

function TokenomicsPage() {
  const content = `
    <p>The tokenomics guiding the <strong>dCorps</strong> ecosystem is rooted ...</p>
    <hr>
    <h4>The dCorps Token: The Network’s Economic Backbone</h4>
    <p>The <strong>dCorps</strong> token is more than just a means of exchange ...</p>
    <p>Furthermore, each new sub-chain ...</p>
    <hr>
    <h4>dShares: Equity in a Decentralized Economy</h4>
    <p>While the <strong>dCorps</strong> token secures the network ...</p>
    <p>This dual structure creates a dynamic synergy ...</p>
    <hr>
    <h4>A Balanced, Adaptive Economic Model</h4>
    <p>As the ecosystem matures, tokenomic parameters can be recalibrated ...</p>
    <p>Meanwhile, dShares, backed by robust corporate governance ...</p>
    <hr>
    <h4>Integration with the Cosmos Ecosystem</h4>
    <p>The strength of the <strong>dCorps</strong> tokenomics model ...</p>
    <hr>
    <h4>In Essence</h4>
    <p>This tokenomic framework weaves together two distinct forms of value ...</p>
  `;

  return (
    <div className="page-text">
      <h1>Tokenomics</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default TokenomicsPage;
