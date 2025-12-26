import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What type of information can I find on IC Insights?",
    answer:
      "IC Insights provides analyst ratings, stock sentiment, news sentiment analysis, community insights, and trending stock data to help traders make informed decisions.",
  },
  {
    question: "How reliable is the data provided by IC Insights?",
    answer:
      "IC Insights data is powered by TipRanks and backed by institutional-grade research, ensuring high reliability and transparency.",
  },
  {
    question: "Can I integrate IC Insights into my trading strategy?",
    answer:
      "Yes, IC Insights is designed to complement your trading strategy by providing actionable insights, sentiment analysis, and analyst opinions.",
  },
  {
    question: "Is there a cost associated with using IC Insights?",
    answer:
      "IC Insights is available to KiteFX clients. Some features may require a live trading account.",
  },
  {
    question: "How frequently is the information on IC Insights updated?",
    answer:
      "Information on IC Insights is updated in near real-time, including analyst ratings, sentiment changes, and market news.",
  },
];

const ICInsightsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl px-6 py-5 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ICInsightsFAQ;
