import React from 'react';

export default function FunctionalityDescription({ isGeneratingPDF, value, onChange }) {
  return (
    <table style={{ pageBreakInside: 'avoid' }}>
      <thead>
        <tr>
          <th colSpan="2">Functionality Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            {!isGeneratingPDF ? (
              <textarea
                placeholder="Enter functionality description here..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={8}
                style={{ width: '100%' }}
              />
            ) : (
              <div
                style={{
                  whiteSpace: 'pre-wrap',
                  border: 'transparent',
                  padding: '0.5rem',
                  minHeight: '8em',
                  color: 'black'
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
