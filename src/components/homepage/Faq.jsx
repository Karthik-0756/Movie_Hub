import React, { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(null);

  const ToggleEvent = (index) => {
    if (open === index) {
      setOpen(null); // close if same clicked
    } else {
      setOpen(index); // open clicked
    }
  };

  const faq = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service.",
    },
    {
      question: "How much does it cost?",
      answer: "It depends on your subscription plan.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel anytime.",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-start pl-30  mb-5">
        Frequently Asked Questions
      </h1>

      {faq.map((item, index) => (
        <div key={index} className="mb-3 mx-30">
          
          {/* Button */}
          <div
            onClick={() => ToggleEvent(index)}
            className="flex justify-between cursor-pointer bg-gray-700 hover:bg-gray-600 text-white p-5"
          >
            <p className="text-xl">{item.question}</p>
            <span className="text-2xl">
              {open === index ? "x" : "+"}
            </span>
          </div>

          {/* Answer */}
          {open === index && (
            <div className="bg-gray-700 pb-5 pl-6 text-m text-white text-start">
              <p>{item.answer}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default Accordion;