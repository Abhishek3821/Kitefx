import { CheckCircle } from "lucide-react";

export default function BondsFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 shadow-sm">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Decorative Icon */}
          <div className="relative w-14 h-14 border-4 border-green-400 rounded-md flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-green-400 rounded-full relative">
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-4 border-2 border-green-400 rounded-b"></span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            KiteFX Global Bond CFDs are based off fixed income debt securities
            that pay investors a regular coupon in exchange for their
            investment. We offer the bonds products as a CFD with flexible lot
            sizing, so you can speculate on the price of the Bond by going long
            or short.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            There is no interest debited or credited on these Bonds CFDs, just
            like the underlying Futures markets that they’re based off. Again,
            this means you only have to worry about the price of the bond and
            whether you go long or short.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Bond CFDs provided by KiteFX Global are based off highly rated
            government issued debt securities, including governments of the
            United States, Japan and Europe. Bonds offer traders the opportunity
            to speculate on interest rates and risk on/off sentiment, diversify
            a portfolio or reduce risk and build defensive positions during
            periods of economic weakness or uncertainty.
          </p>
        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-500">Bonds</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "Over 9 Bonds available to trade",
              "No commissions",
              "Up to 1:200 leverage",
              "Deep Liquidity",
              "MetaTrader 4 and 5",
              "Trade 24/5",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
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
