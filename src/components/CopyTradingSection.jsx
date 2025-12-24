import React from "react";
import { assets } from "../assets/assets";

const featuresLeft = [
  "Automating top Trading Strategies",
  "Complete Transparency and Control",
  "Intelligent Risk Management Tools",
  "Analytics & Insights",
  "Full member Broker service",
];

const featuresRight = [
  "Comprehensive Strategy Profiles",
  "Multiple Platforms Web/Desktop/Mobile",
  "Social media Platform for Trading",
  "Flexible Fees",
  "Investors separate Trading accounts",
];

const CopyTradingSection = ({
  title = "Delivering results by mirroring",
  highlight = "top performer trading strategies through an advanced, flexible and secure platform",
  ctaLabel = "Open Account",
  image = assets.kitefx25,
  onCtaClick,
}) => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
            {title} <span className="block">{highlight}</span>
          </h2>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-12">
            <ul className="space-y-4">
              {featuresLeft.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {featuresRight.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onCtaClick}
            className="bg-green-500 hover:bg-green-600 transition text-black font-semibold text-lg px-10 py-4 rounded-lg shadow-lg"
          >
            {ctaLabel}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {image && (
            <img
              src={image}
              alt="Trading Platform"
              className="w-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CopyTradingSection;
