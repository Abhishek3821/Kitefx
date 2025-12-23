import { Check } from "lucide-react";

export default function CommoditiesCFDBox() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Main Box */}
        <div className="bg-gray-50 rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Icon */}
            <div className="relative w-14 h-14">
              <span className="absolute top-0 left-0 w-8 h-8 border-4 border-green-500" />
              <span className="absolute bottom-0 left-4 w-8 h-8 border-4 border-green-500" />
              <span className="absolute top-2 right-0 w-6 h-6 border-4 border-green-500" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Commodities CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Trade energy, agriculture and metals products like a currency pair
              against the USD or as a Futures CFD. We have combined tight pricing
              and flexible lot sizes from 10c per point to give you one powerful
              product.
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
            <h3 className="text-2xl font-bold mb-6">Commodities</h3>

            <ul className="space-y-4 mb-8 text-sm sm:text-base">
              <ListItem text="Over 20 CFDs on Commodities to trade" />
              <ListItem text="Energy, agriculture and metals" />
              <ListItem text="Spot and Futures CFDs" />
              <ListItem text="Up to 1:1000 leverage" />
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
    <li className="flex items-start gap-3">
      <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
        <Check size={12} className="text-white" />
      </span>
      <span>{text}</span>
    </li>
  );
}
