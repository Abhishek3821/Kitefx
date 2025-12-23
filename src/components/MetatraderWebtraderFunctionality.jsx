import React from "react";
import { Check } from "lucide-react";
import { assets } from "../assets/assets";

const features = [
  "One-click trading",
  "Multilingual interface",
  "Fully customized charts",
  "Stop loss/take operations",
  "Indicators",
  "Analytics",
];

const MetatraderWebtraderFunctionality = () => {
  return (
    <section className="w-full bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-green-400 font-semibold mb-4 inline-block">
            MetaTrader WebTrader
          </span>

          <h2 className="text-4xl font-bold text-white mb-4">
            Functionality of Web Trader
          </h2>

          <p className="text-white/70 text-md leading-relaxed mb-10 max-w-xl">
            Web Trader is almost identical to the desktop MetaTrader. This
            ensures the web platform's high reliability and compatibility with
            the entire MetaTrader ecosystem. The application is safe to use –
            all transmitted data is securely encrypted.
          </p>

          {/* Feature List */}
          <ul className="space-y-2">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-4 h-4 mt-1 rounded-full bg-green-400 flex items-center justify-center">
                  <Check size={10} className="text-black" />
                </span>
                <span className="text-white text-md">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={assets.kitefx18}
            alt="WebTrader Desktop"
            className="w-full object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default MetatraderWebtraderFunctionality;
