import React from 'react';

export default function UXDESIGN({ isGeneratingPDF, value, onChange }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">UX Design</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            {!isGeneratingPDF ? (
              <textarea
                data-label="uxdesign"
                placeholder="Enter uxdesgin requirements here..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ width: '100%' }}
              />
            ) : (
              <div
                className="print-text"
                data-label="uxdesgin"
                style={{
                  whiteSpace: 'pre-wrap',
                  border: 'transparent',
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
