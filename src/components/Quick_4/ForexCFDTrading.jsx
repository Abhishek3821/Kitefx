import { CheckCircle } from "lucide-react";

export default function ForexCFDTrading() {
  return (
    <section className="w-full bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Outer Container */}
        <div className="bg-white rounded-3xl p-10 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-14 shadow-sm">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Forex CFD Trading
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              KiteFX Global MetaTrader 4/5 and cTrader/TradingView accounts
              allow you to trade over{" "}
              <span className="font-medium">60+ currency pairs</span> including
              majors, minors and exotics with the tightest possible spreads
              through Raw Pricing connectivity. Trade with flexible leverage
              from <span className="font-medium">1:1 to 1:1000</span> with no
              intervention.
            </p>
          </div>

          {/* RIGHT FACTS CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Forex Trading</p>
              <h3 className="text-3xl font-bold text-black mt-1">Facts</h3>
            </div>

            <div className="space-y-4 border-t pt-6">
              <FactItem text="Over 60 currency pairs" />
              <FactItem text="Tight spreads from 0.0 pips" />
              <FactItem text="Up to 1:1000 leverage" />
              <FactItem text="Deep liquidity" />
            </div>

            <button
              className="
                w-full mt-8 py-3 rounded-xl font-semibold
                border border-green-500 text-black
                transition-all duration-300
                hover:bg-green-500 hover:text-black
                active:scale-95
              "
            >
              Open Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fact Item ---------------- */

function FactItem({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
      <span>{text}</span>
    </div>
  );
}
