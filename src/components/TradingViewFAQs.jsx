import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I create an account on TradingView?",
    answer:
      "You can create a TradingView account by visiting tradingview.com and signing up using your email address or social login.",
  },
  {
    question:
      "Which type of KiteFX Global account is compatible with TradingView?",
    answer:
      "KiteFX Global Standard and Raw Spread accounts are compatible with TradingView.",
  },
  {
    question: "How do I fund my TradingView account?",
    answer:
      "Funding is done via your KiteFX Global Secure Client Area using supported deposit methods.",
  },
  {
    question:
      "Is it possible to trade on TradingView if my account is still pending?",
    answer:
      "Trading is only available once your KiteFX Global account is fully approved.",
  },
  {
    question:
      "Can I trade with different KiteFX Global Account Types in my Trading Panel on TradingView?",
    answer:
      "Yes, you can switch between compatible KiteFX Global account types within TradingView.",
  },
  {
    question: "Where can I find information about my other trades?",
    answer:
      "You can view all trade history and details in the KiteFX Global Client Area.",
  },
];

export default function TradingViewFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TradingView FAQs
        </h2>

        {/* FAQ List */}
        <div className="divide-y">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </span>

                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-green-500 flex items-center justify-center">
                  {activeIndex === index ? (
                    <Minus className="text-green-500" size={16} />
                  ) : (
                    <Plus className="text-green-500" size={16} />
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
