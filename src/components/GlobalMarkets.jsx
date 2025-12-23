import React from "react";
import { assets } from "../assets/assets";

const markets = [
  { title: "Forex CFDs", count: "61 products" },
  { title: "Commodities CFDs", count: "24 products" },
  { title: "Stocks CFDs", count: "+2100 products" },
  { title: "Index CFDs", count: "25 products" },
  { title: "Bond CFDs", count: "9 products" },
  { title: "Cryptocurrency CFD", count: "21 products" },
  { title: "Futures CFD", count: "4 products" },
];

const GlobalMarkets = () => {
  return (
    <section className="w-full bg-white py-5 px-3">
      <div className="max-w-7xl mx-auto bg-[#F6F6F6] rounded-3xl p-5 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={assets.kitefx3}
              alt="Trading Platform"
              className="w-full max-w-lg object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-12 leading-tight">
              Global Markets at Your Fingertips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10 mb-6">
              {markets.map((item, index) => (
                <div key={index} className="flex gap-1">
                  <span className="mt-1 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-md">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
              Range of Markets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;
