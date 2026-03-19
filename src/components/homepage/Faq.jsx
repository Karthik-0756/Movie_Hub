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
      answer: "Movie Hub is an online platform where users can explore trending movies, TV shows, and get details like ratings, trailers, and descriptions.",
    },
    {
      question: "How much does it cost?",
      answer: "It free for everyone to use.",
    },
    {
      question: "Can I watch movies directly on Movie Hub?",
      answer: "No, Movie Hub does not host movies. It only provides information, trailers, and links to official streaming platforms.",
    },
    {
      question: "Why is a movie not available in my region?",
      answer: "Some movies are restricted based on region due to licensing and distribution rights.",
    },
    {
      question: "Can I see trailers for movies?",
      answer: "Yes, Movie Hub provides official trailers for most movies directly on the platform.",
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