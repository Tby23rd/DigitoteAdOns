"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Digitote?',
    answer: 'Digitote is a project management software designed for influencer managers and creators to efficiently manage their campaigns.',
  },
  {
    question: 'How can I start using Digitote?',
    answer: 'You can start using Digitote by signing up for a free trial. Click on the "Start Free Trial" button on our homepage to get started.',
  },
  {
    question: 'Is Digitote available globally?',
    answer: 'Yes, Digitote is available globally. Our platform is accessible to users around the world.',
  },
  {
    question: 'What features does Digitote offer?',
    answer: 'Digitote offers a range of features including campaign management, influencer collaboration tools, analytics, and more. Check our Features page for detailed information.',
  },
  {
    question: 'How can I get in touch with customer support?',
    answer: 'For customer support, you can reach out to us through our Contact page or email support@digitote.com.',
  },
  // Add more FAQ items as needed
];

const FAQ: React.FC = () => {
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(Array(faqData.length).fill(false));

  const toggleAnswerVisibility = (index: number) => {
    const updatedVisibility = [...visibleAnswers];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleAnswers(updatedVisibility);
  };

  return (
    <div>
      <h4>Frequently Asked Questions</h4>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleAnswerVisibility(index)}>{item.question}</h3>
          {visibleAnswers[index] && <p><hr></hr>{item.answer}<hr></hr></p>}
        </div>
      ))}

    </div>
  );
};

export default FAQ;
