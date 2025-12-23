import React from "react";
import { assets } from "../assets/assets";

const FeatureList = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">
          ✓
        </span>
        <span className="text-base text-gray-800">{item}</span>
      </li>
    ))}
  </ul>
);

const PricingFeatures = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div className="bg-[#F6F6F6] lg:col-span-2 lg:flex justify-between px-5 lg:px-10 pt-10 rounded-xl">
          {/* TOP LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Spreads from 0.0 pips
            </h2>

            <FeatureList
              items={[
                "Raw spreads means really from 0.0 pips*",
                "Our diverse and proprietary liquidity mix keeps spreads tight 24/5",
              ]}
            />

            <button className="mt-8 text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
              Pricing Overview
            </button>
          </div>

          {/* TOP RIGHT – PHONE */}
          <div className="flex justify-center lg:justify-end mt-20 lg:mt-0">
            <div className="relative">
              <img
                src={assets.kitefx1}
                alt="Trading App"
                className="max-h-80"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="bg-[#F6F6F6] p-5 lg:p-10 rounded-xl">
          <h3 className="text-4xl font-bold mb-8">Fast Order Execution</h3>

          <FeatureList
            items={[
              "Average execution speeds of under 40ms***",
              "Low latency fibre optic and Equinix NY4 server",
              "Free low latency collocated VPS available",
            ]}
          />

          <button className="mt-8 text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
            Get your Free VPS
          </button>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="bg-[#F6F6F6] p-5 lg:p-10 rounded-xl">
          <h3 className="text-4xl font-bold mb-8">
            Institutional Grade Trading
          </h3>

          <FeatureList
            items={[
              "Real, deep and diverse liquidity you can trade on",
              "Reduced slippage",
              "Over 29 Billion USD in FX trades processed daily",
            ]}
          />

          <button className="mt-8 text-base font-medium py-3 px-8 rounded-md bg-[#DADADA] hover:bg-green-400 transition-all">
            Raw Pricing Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
