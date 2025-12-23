import { CheckCircle } from "lucide-react";

export default function ForexDemoAccounts() {
  return (
    <section className="w-full bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Outer Card */}
        <div className="bg-white rounded-3xl p-2 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-14 shadow-sm">

          {/* LEFT FACTS CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">

            <div>
              <p className="text-sm text-gray-500">Demo Account</p>
              <h3 className="text-3xl font-bold text-black mt-1">
                Facts
              </h3>
            </div>

            <div className="space-y-4 border-t pt-6">
              <FactItem text="Free" />
              <FactItem text="All platforms" />
              <FactItem text="All account types and products" />
              <FactItem text="No restrictions on the number of demos you can open. Practice until you are ready to go live" />
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

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Forex Demo Accounts
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              IC Markets Global MetaTrader 4/5 and cTrader demo accounts allow
              traders to practice their trading strategies online and become
              familiar with our forex trading platforms in a risk-free
              environment. All of our demo trading accounts have the same
              features as our live trading accounts, including ultra-low
              latency execution and our world-renowned Raw Spread pricing
              connectivity with no requotes.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              Foreign exchange traders can practice placing trades and test
              their expert advisors (EAs) before making the transition to a
              live trading environment.
            </p>
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
