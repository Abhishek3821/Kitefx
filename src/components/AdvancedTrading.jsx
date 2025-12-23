import React from "react";
import { assets } from "../assets/assets";

const AdvancedTrading = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Trading
            </h2>
            <p className="text-gray-600 max-w-xl mb-12">
              Take your trading to the next level with easy access to Trading
              Centre, Autochartist and MultiTerminal.
            </p>

            {/* Vertical line + content */}
            <div className="relative pl-10">
              <span className="absolute left-0 top-0 h-full w-[2px] bg-gray-200" />

              {/* Trading Central */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Trading Central
                </h3>
                <p className="text-gray-600 mb-4 max-w-lg">
                  Our improved MetaTrader 4 and 5 offerings make it simpler than
                  ever to provide your traders with the resources they need to
                  thrive in today’s unpredictable markets.
                </p>
                <button className="px-6 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
                  Learn More
                </button>
              </div>

              {/* Autochartist */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Autochartist
                </h3>
                <p className="text-gray-600 mb-4 max-w-lg">
                  Autochartist provides the world’s first Market Scanner in
                  MetaTrader 4 & MetaTrader 5 via a non-trading Expert Advisor.
                  Scan markets for trading opportunities while watching all
                  symbols and time periods from a single chart.
                </p>
                <button className="px-6 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
                  Learn More
                </button>
              </div>

              {/* MultiTerminal */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MultiTerminal
                </h3>
                <p className="text-gray-600 mb-4 max-w-lg">
                  MetaTrader 4 MultiTerminal provides a convenient way to manage
                  multiple accounts simultaneously from a single interface.
                </p>
                <button className="px-6 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={assets.kitefx13}
              alt="Trading Platform"
              className="w-full max-w-xl drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTrading;
