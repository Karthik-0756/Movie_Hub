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
      question: "What is MovieHub?",
      answer: "MovieHub is a movie information service.",
    },
    {
      question: "How much does it cost?",
      answer: "It free for everyone to use.",
    },
    {
      question: "Is it give original movie?",
      answer: "Yes, moviehub gives a real-time movie updates",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-start pl-3 md:pl-30  mb-5">
        Frequently Asked Questions
      </h1>

      {faq.map((item, index) => (
        <div key={index} className="mb-3 mx-3 md:mx-30">
          
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