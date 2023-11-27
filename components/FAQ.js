//FAQ.js
import React from 'react';
import faqsData from './data/faqs.json';

const FAQ = () => (
  <div className='faq-container'>
    <h2>Frequently Asked Questions</h2>
    <ul>
      {faqsData.map((faq, index) => (
        <li key={index}>
          <strong>{faq.question}</strong>
          <p>{faq.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default FAQ;
