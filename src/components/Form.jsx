import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import logo from '../assets/logo.png';
import BusinessRequirementSection from './BusinessRequirmentSection';
import UXDESIGN from './UxDesign';
import FunctionalityDescription from './FunctionalityDescription.jsx';
export default function Form() {
  const formRef = useRef();
  const [applicationName, setApplicationName] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [businessRequirement, setBusinessRequirement] = useState('');
  const [uxdesign, setUxdesign] = useState('')
  const [functionalityDescription, setFunctionalityDescription] = useState('');


  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);

    // Wait for DOM to update
    setTimeout(() => {
      const element = formRef.current;

      const options = {
        margin: 0.5,
        filename: `${applicationName || 'Application'}_form.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => setIsGeneratingPDF(false));
    }, 100);
  };

  return (
    <>
      <div
        ref={formRef}
        className="form-wrapper"
        style={{ backgroundColor: '#fff', padding: '20px' }}
      >
        <form>
          <header className="header">
            <div className="logo-box">
              <img src={logo} alt="logo-title" style={{ height: '50px' }} />
            </div>
            <h2 className="form-title">Software Enhancement Request Form</h2>
          </header>

          <table>
            <thead>
              <tr>
                <td className="table-title" colSpan="2">
                  <strong>Project Details</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Application Name</th>
                <td>
                  <input
                    type="text"
                    value={applicationName}
                    onChange={(e) => setApplicationName(e.target.value)}
                    placeholder="Enter application name"
                  />
                </td>
              </tr>
              <tr><th>Project Phase</th><td><input type="text" /></td></tr>
              <tr><th>Customer Name</th><td><input type="text" /></td></tr>
              <tr><th>Priority</th><td><input type="text" /></td></tr>
              <tr><th>Requested by</th><td><input type="text" /></td></tr>
            </tbody>
          </table>

          {/* Business Requirement Section (React component) */}
          <BusinessRequirementSection
            isGeneratingPDF={isGeneratingPDF}
            value={businessRequirement}
            onChange={setBusinessRequirement}
          />
          <UXDESIGN 
            isGeneratingPDF={isGeneratingPDF}
            value={uxdesign}
            onChange={setUxdesign}
          />
          <FunctionalityDescription
           isGeneratingPDF={isGeneratingPDF}
           value={functionalityDescription}
           onChange={setFunctionalityDescription}
          />
        


       

        

          <table style={{ pageBreakInside: 'avoid' }}>
            <thead>
              <tr>
                <td className="table-title" colSpan="2"><strong>Efforts</strong></td>
              </tr>
            </thead>
            <tbody>
              <tr><th>Project Plan</th><td><input type="text" /></td></tr>
              <tr><th>Requirement</th><td><input type="text" /></td></tr>
              <tr><th>Design</th><td><input type="text" /></td></tr>
              <tr><th>Development</th><td><input type="text" /></td></tr>
              <tr><th>Testing</th><td><input type="text" /></td></tr>
            </tbody>
          </table>
        </form>
      </div>

      <button onClick={handleDownloadPDF} style={{ marginTop: '1rem' }}>
        Download as PDF
      </button>
    </>
  );
}
