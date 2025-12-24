import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------- DATA ---------------- */

const sections = [
  "Currency Pairs",
  "Metals",
  "Spot Energies",
  "Soft CFDs on Commodities",
  "Indices CFDs",
  "Futures CFDs",
  "Cryptocurrency CFDs",
  "Stocks CFDs",
  "Bond Futures",
];

/* ---------------- COMPONENT ---------------- */

const TradingHours2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold mb-2">Trading Hours</h1>
          <p className="text-gray-600 text-sm">
            Please refer to the platform for the exact trading session.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {sections.map((title, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition"
              >
                <span className="text-lg font-medium">{title}</span>

                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT (placeholder for now) */}
              {openIndex === index && (
                <div className="px-6 py-6 bg-white border-t text-sm text-gray-700 leading-relaxed">
                  Trading hours for <strong>{title}</strong> vary depending on
                  the instrument and market conditions. Please refer to your
                  trading platform for the most accurate and up-to-date trading
                  session information.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingHours2;
