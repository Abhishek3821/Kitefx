import React from "react";
import { Check } from "lucide-react";

const leftBenefits = [
  "Trade with no dealing desk intervention",
  "Save money every time you trade with our low costs",
  "Enjoy the fastest ultra low latency execution possible",
  "Chose a leverage to suit your strategy and trading style",
];

const rightBenefits = [
  "Have greater control over your risk with micro lots",
  "Move money in and out of your trading account with ease",
  "All major browsers supported",
  "Use the same account on MetaTrader and MetaTrader WebTrader",
];

const MetatraderWebtraderBenefits = () => {
  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6">Benefits</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A web platform you can access trading features from any device.
            Trade Forex anywhere. It is convenient and safe!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left Column */}
          <ul className="space-y-8 bg-[#F8F9FA] p-5 rounded-lg">
            {leftBenefits.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center mt-1">
                  <Check className="text-black" size={10} />
                </span>
                <span className="text-md text-gray-900">{item}</span>
              </li>
            ))}
          </ul>

          {/* Right Column */}
          <ul className="space-y-8 bg-[#F8F9FA] p-5 rounded-lg">
            {rightBenefits.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center mt-1">
                  <Check className="text-black" size={10} />
                </span>
                <span className="text-md text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetatraderWebtraderBenefits;
