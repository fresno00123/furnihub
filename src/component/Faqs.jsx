import { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders are delivered within 3 to 5 business days depending on your location.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Yes, we offer cash on delivery for customers within Nigeria.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes. Products can be returned within 7 days if they are unused and in original condition.",
    },
    {
      question: "Are your products under warranty?",
      answer:
        "All furniture items come with a 6-month warranty covering manufacturing defects.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently we only deliver within Nigeria, but international shipping is coming soon.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After payment, a tracking link will be sent to your email or phone number.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20">
      {/* CONTAINER */}
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">

        {/* TITLE */}
        <h2 className="
          text-lg
          sm:text-xl
          md:text-2xl
          lg:text-3xl
          font-semibold
          text-center
          text-[#272343]
          mb-6
          sm:mb-8
          md:mb-10
          lg:mb-12
        ">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                border border-gray-200
                rounded-md sm:rounded-lg
                overflow-hidden
                bg-white
                shadow-sm
              "
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full
                  flex items-center justify-between
                  px-3 sm:px-4 md:px-5 lg:px-6
                  py-3 sm:py-4 md:py-4 lg:py-5
                  text-left
                  text-sm sm:text-base md:text-lg lg:text-lg
                  font-medium
                  text-[#272343]
                  hover:bg-gray-50
                  transition
                "
              >
                <span className="pr-3">{faq.question}</span>

                <span
                  className="
                    text-lg sm:text-xl md:text-2xl lg:text-2xl
                    flex-shrink-0
                  "
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div
                  className="
                    px-3 sm:px-4 md:px-5 lg:px-6
                    py-3 sm:py-4 md:py-4 lg:py-5
                    text-xs sm:text-sm md:text-base lg:text-base
                    text-[#636270]
                    bg-gray-50
                    leading-5 sm:leading-6 md:leading-7 lg:leading-7
                  "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;