import React from 'react';

export default function BusinessRequirementSection({ isGeneratingPDF, value, onChange }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Business Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            {!isGeneratingPDF ? (
              <textarea
                data-label="businessReq"
                placeholder="Enter business requirements here..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ width: '100%' }}
              />
            ) : (
              <div
                className="print-text"
                data-label="businessReqText"
                style={{
                  whiteSpace: 'pre-wrap',
                  border: '1px solid #ccc',
                  padding: '0.5rem',
                  minHeight: '6em',
                  color:'black'
                }}
              >
                {value}
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
