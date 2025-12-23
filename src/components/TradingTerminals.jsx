import React from "react";
import { assets } from "../assets/assets";

const TradingTerminals = () => {
  return (
    <section className="w-full bg-white py-5 px-3">
      <div className="max-w-7xl mx-auto bg-[#F6F6F6] rounded-3xl p-5 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-10">
              Powerful Trading Terminals
            </h2>

            {/* PLATFORMS */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <img src={assets.kitefx4} alt="MetaTrader 4" className="h-12" />
              </div>

              <div className="flex items-center gap-3">
                <img src={assets.kitefx5} alt="MetaTrader 5" className="h-12" />
              </div>

              <div className="flex items-center gap-3">
                <img src={assets.kitefx6} alt="cTrader" className="h-6" />
              </div>

              <div className="flex items-center gap-3">
                <img src={assets.kitefx7} alt="TradingView" className="h-6" />
              </div>
            </div>

            {/* OS SUPPORT */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {["Windows", "MAC", "Web Browser", "iOS", "Android"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-md font-semibold"
                  >
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                      ✓
                    </span>
                    {item}
                  </div>
                )
              )}
            </div>

            {/* CTA */}
            <button className="mt-2 lg:mt-8 text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
              Platforms
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={assets.kitefx2}
              alt="Trading Platforms"
              className="w-full max-w-xl object-contain"
            />

            {/* Floating EURUSD card */}
            <div className="absolute bottom-16 left-0 bg-white rounded-xl shadow-xl px-5 py-3 hidden md:block">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold">EURUSD</span>
                <span className="text-green-500 text-sm font-semibold">
                  +0.15% ▲
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                <div>
                  <p>Bid</p>
                  <p className="font-semibold text-black">—</p>
                </div>
                <div>
                  <p>Ask</p>
                  <p className="font-semibold text-black">—</p>
                </div>
                <div>
                  <p>Spread</p>
                  <p className="font-semibold text-black">—</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingTerminals;
