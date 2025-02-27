import { useState } from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is CoFynd?",
      answer:
        "CoFynd is India's fastest-growing workspace discovery platform, helping users find co-working spaces, private offices, and meeting rooms without brokerage.",
    },
    {
      question: "Do I need to pay any brokerage?",
      answer:
        "No, CoFynd does not charge any brokerage fees. You can explore, compare, and book workspaces completely free of charge.",
    },
    {
      question: "How do I book a workspace?",
      answer:
        "Simply browse through the available spaces, schedule a site visit, and book your preferred space directly through CoFynd.",
    },
    {
      question: "Do you provide offline support?",
      answer:
        "Yes! Our team offers 100% offline support from selecting spaces to site visits and after-sales assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
