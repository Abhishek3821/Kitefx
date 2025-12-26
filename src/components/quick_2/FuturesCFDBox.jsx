import { Check } from "lucide-react";

export default function FuturesCFDBox() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Main Box */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Icon */}
            <div className="relative w-16 h-16">
              {/* Base */}
              <span className="absolute left-0 bottom-0 w-12 h-3 border-4 border-green-500 rounded" />
              {/* Pillar */}
              <span className="absolute left-2 bottom-3 w-8 h-10 border-4 border-green-500 rounded-t-full" />
              {/* Clock */}
              <span className="absolute right-0 top-0 w-8 h-8 border-4 border-green-500 rounded-full" />
              <span className="absolute right-4 top-3 w-1 h-3 bg-green-500" />
              <span className="absolute right-4 top-3 w-3 h-1 bg-green-500" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Futures CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Futures are one of the most popular forms of CFDs. KiteFX Global
              offers a range of Futures from around the world, including ICE
              Dollar Index and CBOE VIX Index. Online Futures-based CFDs are
              offered exclusively on KiteFX Global’s MetaTrader 4 Platform.
            </p>

            {/* Action Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <ActionBox label="See our" value="Spreads" />
              <ActionBox label="Download" value="Product Details" />
              <ActionBox label="Popular Account" value="Raw Spread" />
            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Markets</p>
            <h3 className="text-2xl font-bold mb-6">Futures</h3>

            <ul className="space-y-4 mb-8 text-sm sm:text-base">
              <ListItem text="5 Global Futures available to trade" />
              <ListItem text="No commissions" />
              <ListItem text="Up to 1:200 leverage" />
              <ListItem text="Deep Liquidity" />
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

/* ---------- Reusable Small Components ---------- */

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
