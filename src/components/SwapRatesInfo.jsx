import React from "react";
import { Check } from "lucide-react";

const SwapRatesInfo = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION 1 */}
        <h2 className="text-4xl font-bold text-black mb-10">
          What You Should Know About Swap Rates
        </h2>

        <ul className="space-y-6 max-w-5xl">
          {[
            "Swaps are applied only when positions are kept open until the next forex trading day.",
            "Some currency pairs may have negative swap rates on both sides, both ‘long’ and ‘short’.",
            "Swap rates are calculated in points, MetaTrader 4 and 5 convert them automatically into the base currency of your account.",
            "Each currency pair has its own swap charge and is measured on a standard size of 1.0 lots (100,000 base units).",
            "On Wednesday night swaps for FX, Metals, Bonds and CFDs on Commodities are charged a triple rate the usual rate. On Friday night swaps for Energies, Indices and Cryptocurrencies are charged a triple rate the usual rate.",
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">
                <Check className="w-4 h-4" />
              </span>
              <p className="text-lg text-black leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-4xl font-bold text-black mt-20 mb-10">
          Overnight Swap Rates
        </h2>

        <ul className="space-y-6 max-w-5xl">
          {[
            "You will able to view the latest swap rates within your MetaTrader 4 and MetaTrader 5 trading terminal by following the process outlined below.",
            "Right click on any instrument in the ‘Market Watch’ section, then left click on the ‘Specification’ option from the dropdown menu. A new window will open that shows the long and short swap rate for the pair selected.",
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">
                <Check className="w-4 h-4" />
              </span>
              <p className="text-lg text-black leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SwapRatesInfo;
