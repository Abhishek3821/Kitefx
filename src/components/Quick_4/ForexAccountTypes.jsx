import { CheckCircle } from "lucide-react";

export default function ForexAccountTypes() {
  return (
    <section className="w-full bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Main Card */}
        <div className="relative bg-white rounded-3xl p-10 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-14 shadow-sm">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-7">
            <span className="inline-block text-sm font-semibold text-green-500 tracking-wide">
              FOREX TRADING
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Forex Account Types
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              IC Markets Global allows you to select an account type that suits
              you best. Choose from our Standard MetaTrader 4/5 account with no
              commissions and a minimum spread of <span className="font-medium">0.08 pip</span>,
              our Raw Spread MetaTrader 4/5 account with spreads from{" "}
              <span className="font-medium">0.0 pips</span>, or our cTrader Raw
              Spread account with spreads as low as <span className="font-medium">0.0</span>.
              All platforms benefit from our ultra-low latency trading
              environment.
            </p>
          </div>

          {/* RIGHT FACTS CARD */}
          <div className="relative bg-white rounded-2xl border border-gray-200 p-8 space-y-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Forex Account Types
              </p>
              <h3 className="text-3xl font-bold text-black mt-1">
                Facts
              </h3>
            </div>

            <div className="space-y-4 border-t pt-6">
              <FactItem text="Raw Spread or Standard accounts" />
              <FactItem text="Commission + spread or spread only" />
              <FactItem text="Available on all platforms" />
              <FactItem text="Spreads starting from 0.0 pips" />
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
      <CheckCircle
        className="text-green-500 mt-0.5 flex-shrink-0"
        size={18}
      />
      <span>{text}</span>
    </div>
  );
}
