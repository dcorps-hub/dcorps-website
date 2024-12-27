// src/pages/suites/InvoicingPayrollPage.js
import React from 'react';

function InvoicingPayrollPage() {
  const content = `Invoicing & Payroll: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

  return (
    <div className="page-text">
      <h1>Invoicing & Payroll</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default InvoicingPayrollPage;
