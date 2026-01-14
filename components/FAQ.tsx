"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default to first item open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <div className="faq-header" onClick={() => toggleFAQ(index)}>
            <h5 className="faq-title">{item.question}</h5>
            <span className="faq-icon">
              {openIndex === index ? '−' : '+'}
            </span>
          </div>
          <div 
            className="faq-body"
            style={{ 
              maxHeight: openIndex === index ? '500px' : '0',
              opacity: openIndex === index ? 1 : 0,
              padding: openIndex === index ? '0 0 20px 0' : '0'
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
