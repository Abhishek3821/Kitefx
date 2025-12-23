import { Check } from "lucide-react";

export default function ForexCFDBox() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Main Box */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Icon */}
            <div className="w-12 h-12">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M6 16h26M6 32h26M32 10l10 6-10 6M32 26l10 6-10 6"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Forex CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              The Forex market provides traders the opportunity to trade 24 hours
              a day, 5 days a week in the world’s most liquid financial market.
              Traders can take advantage of some of the tightest spreads,
              superior execution, and deep liquidity across 61 currency pairs.
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

              <ActionBox
                label="See our"
                value="Spreads"
              />

              <ActionBox
                label="Download"
                value="Product Details"
              />

              <ActionBox
                label="Popular Account"
                value="Raw Spread"
              />

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

            <p className="text-sm text-gray-500 mb-1">Markets</p>
            <h3 className="text-2xl font-bold mb-6">Forex</h3>

            <ul className="space-y-4 mb-8">
              <ListItem text="61 currency pairs" />
              <ListItem text="Tight spreads from 0.0 pips" />
              <ListItem text="Up to 1:1000 leverage" />
              <ListItem text="Deep liquidity" />
            </ul>

            <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition">
              DETAILS
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ---------- Small Components ---------- */

function ActionBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-semibold text-black">{value}</p>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-sm sm:text-base">
      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
        <Check size={12} className="text-white" />
      </span>
      {text}
    </li>
  );
}
