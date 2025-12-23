import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SPREAD_ITEMS = [
  { title: "Forex", content: "Forex spreads details will be displayed here." },
  { title: "Commodities CFDs", content: "Commodities CFDs spreads details will be displayed here." },
  { title: "Indices", content: "Indices spreads details will be displayed here." },
  { title: "Metals", content: "Metals spreads details will be displayed here." },
  { title: "Bonds", content: "Bonds spreads details will be displayed here." },
  { title: "Cryptocurrency", content: "Cryptocurrency spreads details will be displayed here." },
];

export default function SpreadsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">

        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-10">
          Spreads
        </h1>

        <div className="space-y-2">
          {SPREAD_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const isGray = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`rounded-xl border border-gray-200 overflow-hidden transition
                  ${isGray ? "bg-gray-50" : "bg-white"}
                  ${isOpen ? "shadow-sm" : ""}
                `}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-3 text-left"
                >
                  <span className="text-base font-semibold text-black">
                    {item.title}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
