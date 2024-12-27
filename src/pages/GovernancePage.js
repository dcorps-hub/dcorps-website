// src/pages/GovernancePage.js
import React from 'react';

function GovernancePage() {
  const content = `
      <p>Governance within the <strong>dCorps</strong> ecosystem is participatory...</p>
      <hr>
      <h4>Centralized Beginnings</h4>
      <p>In the earliest phase, when the project exists only as an idea...</p>
      <hr>
      <h4>Introducing dCorp Tokens and Early Participation</h4>
      <p>As the project advances and a pre-sale or initial coin offering takes place...</p>
      <hr>
      <h4>The Hub Launch and Private Corporate Governance</h4>
      <p>When the hub is launched in a production setting...</p>
      <hr>
      <h4>Growing Adoption and Market Reach</h4>
      <p>As the project garners more attention and conducts additional private sales...</p>
      <hr>
      <h4>Transitioning to a Decentralized Public Company</h4>
      <p>In time, <strong>dCorps</strong> reaches a level of maturity and popularity...</p>
      <hr>
      <h4>A Two-Layered Governance Model</h4>
      <p>This two-layered governance model fosters balance and specialization...</p>
      <hr>
      <h4>Maturing Governance and Continuous Improvement</h4>
      <p>As <strong>dCorps</strong> reaches full maturity, governance practices grow more sophisticated...</p>
      <hr>
      <h4>An Ever-Evolving Governance Framework</h4>
      <p>Ultimately, the governance of <strong>dCorps</strong> adapts at every step...</p>
    `;

    return (
      <div className="page-text">
        <h1>Governance</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }

export default GovernancePage;
