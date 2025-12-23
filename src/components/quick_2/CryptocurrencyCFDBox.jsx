import { Check } from "lucide-react";

export default function CryptocurrencyCFDBox() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Main Box */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT INFO CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

            <p className="text-sm text-gray-500 mb-1">Markets</p>
            <h3 className="text-2xl font-bold mb-6">Cryptocurrency</h3>

            <ul className="space-y-4 mb-8 text-sm sm:text-base">
              <ListItem text="21 of the most popular Cryptocurrency" />
              <ListItem text="Trade the market 7 days a week" />
              <ListItem text="Long or short" />
              <ListItem text="Up to 1:500 Leverage MetaTrader4/MT5" />
              <ListItem text="1:5 Leverage cTrader and TradingView" />
            </ul>

            <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition">
              DETAILS
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Icon */}
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-green-500 text-3xl font-bold">₿</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Cryptocurrency CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Go long or short across our range of the world’s largest and most
              popular Cryptocurrencies. Trade the market 7 days a week where
              price movements are driven primarily by fear and greed, news and
              prevailing sentiment. Enjoy trading with a leverage of up to
              1:200 and eliminate Cryptocurrency Exchange risk by trading with
              an FSA-regulated CFD Provider.
            </p>

            {/* Action Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <ActionBox label="See our" value="Spreads" />
              <ActionBox label="Download" value="Product Details" />
              <ActionBox label="Popular Account" value="Raw Spread" />
            </div>

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
    <li className="flex items-start gap-3">
      <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
        <Check size={12} className="text-white" />
      </span>
      <span>{text}</span>
    </li>
  );
}
