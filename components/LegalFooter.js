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
        <footer>
          {legalInfo && (
            <div>
              <h2 style={{ fontSize: '1.2rem' }}>{Object.keys(legalInfo)[0]}</h2>
              <ul style={{ fontSize: '0.9rem' }}>
                {legalInfo["Legal Information"].content.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    {typeof item === 'string' ? item : item.join(' ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </footer>
      );
    };
  
  export default LegalFooter;
