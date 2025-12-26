import { CheckCircle } from "lucide-react";

export default function CommoditiesFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start shadow-sm">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Decorative Icon */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 border-4 border-green-400 rounded-md relative">
              <div className="w-6 h-6 border-4 border-green-400 absolute -top-3 -right-3 bg-white" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            KiteFX Global offers a flexible and easy way to gain exposure to
            some of the world’s most popular CFDs on Commodities including
            energies and metals all from within your MetaTrader 4, 5, cTrader
            and TradingView trading platforms.
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Commodity markets are attractive to speculators as they are
            susceptible to dramatic changes in supply and demand.
          </p>
        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
          <div>
            <p className="text-sm text-gray-500">Commodities CFDs</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "Over 22 CFDs on Commodities to trade",
              "Energy, Agriculture and Metals",
              "Spot and Futures CFDs",
              "Leverage up to 1:1000",
              "Spreads as low as 0.0 pips",
              "Deep liquidity",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
}
