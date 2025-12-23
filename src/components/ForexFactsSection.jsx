import { Check, ArrowLeftRight } from "lucide-react";

const ForexFactsSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-20 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* -------- Left Content -------- */}
        <div className="lg:col-span-2 space-y-7">
          
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200">
            <ArrowLeftRight className="text-green-600" size={28} />
          </div>

          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
            Open 24 hours a day, five days a week — the foreign exchange market is
            the world’s largest and most liquid market, with over{" "}
            <span className="text-green-600">$4 trillion</span> traded daily.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            Forex trading involves exchanging one currency for another, aiming
            to profit from price movements. Currencies are always traded in
            pairs, such as Euro vs US Dollar (EUR/USD), reflecting the value of
            one against another.
          </p>
        </div>

        {/* -------- Right Facts Card -------- */}
        <div className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              Forex
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Facts
            </h3>

            <ul className="space-y-4">
              {[
                "Over 61 currency pairs",
                "Tight spreads from 0.0 pips",
                "Leverage up to 1:1000",
                "Deep institutional liquidity",
                "Trade 24/5 globally",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            className="mt-8 w-full bg-white border border-green-500 text-gray-900 font-semibold py-3 rounded-lg
                       hover:bg-green-500 hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
                       transition-all duration-300"
          >
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForexFactsSection;
