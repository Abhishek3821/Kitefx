import { Check } from "lucide-react";

export default function IndicesCFDBox() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Main Box */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT INFO CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

            <p className="text-sm text-gray-500 mb-1">Markets</p>
            <h3 className="text-2xl font-bold mb-6">Indices</h3>

            <ul className="space-y-4 mb-8 text-sm sm:text-base">
              <ListItem text="25 Indices to trade from across the globe" />
              <ListItem text="Up to 1:200 leverage" />
              <ListItem text="No commissions" />
              <ListItem text="All platforms" />
            </ul>

            <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition">
              DETAILS
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Icon */}
            <div className="flex gap-2">
              <span className="h-12 w-1 bg-green-500 rounded" />
              <span className="h-16 w-1 bg-green-500 rounded" />
              <span className="h-20 w-1 bg-green-500 rounded" />
              <span className="h-14 w-1 bg-green-500 rounded" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Indices CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Gain exposure to the world’s largest equity markets through IC
              Markets Global’s offering of global Indices CFDs. With spreads from
              0.4 points on 25 Indices, traders can take a wider view of equities
              markets whilst enjoying commission-free and 24/5 trading across
              major markets.
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
