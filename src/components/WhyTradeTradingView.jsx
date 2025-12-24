import React from "react";
import { Check } from "lucide-react";
import Image from "../assets/kitefx32.webp";
export default function WhyTradeTradingView() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={Image}
              alt="TradingView Mobile"
              className="w-full max-w-md object-cover"
            />  
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white space-y-6">
          <p className="text-green-400 font-semibold">
            Start trading with IC Markets Global
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why trade on TradingView <br />
            with IC Markets Global?
          </h2>

          <ul className="space-y-4 mt-6">
            {[
              "Real-time forex and CFD quotes",
              "Market leading spreads and low commissions",
              "Micro lot trading – Minimum lot size of 0.01 with no maximum",
              "No restrictions on limit orders",
              "Expanded symbol display",
              "One-click trading",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check size={16} className="text-black" />
                </span>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
