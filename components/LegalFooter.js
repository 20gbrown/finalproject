// LegalFooter.js
import React, { useState, useEffect } from 'react';
import legalInfoJson from './data/4210_Final_Project/00 legal.json';

const LegalFooter = () => {
  const [legalInfo, setLegalInfo] = useState(null);

  useEffect(() => {
    // Use the imported JSON directly
    setLegalInfo(legalInfoJson);
  }, []);

  return (
    <footer className="legal-footer">
      {legalInfo && (
        <div>
          <h2>{Object.keys(legalInfo)[0]}</h2>
          <ul>
            {legalInfo["Legal Information"].content.map((item, index) => (
              <li key={index}>{typeof item === 'string' ? item : item.join(' ')}</li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default LegalFooter;

