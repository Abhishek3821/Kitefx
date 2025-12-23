import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "User friendly interface",
  "Trade levels and volumes on the chart",
  "Offline mode (symbol prices and charts)",
  "Free and easily downloadable directly from the Apple App Store",
];

const MetatraderBenefitsCard = () => {
  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Benefits
        </h2>

        {/* Card */}
        <div className="bg-gray-50 rounded-lg p-6">
          <ul className="space-y-5">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-6">
                <span className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center mt-1">
                  <Check className="text-black" size={10} />
                </span>
                <span className="text-lg text-gray-900 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetatraderBenefitsCard;
