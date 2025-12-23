import { Check } from "lucide-react";

export default function FuturesCFD() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
            bg-white rounded-[32px]
            p-10 md:p-14
            border
            shadow-[0_40px_120px_rgba(0,0,0,0.08)]
            grid grid-cols-1 lg:grid-cols-3
            gap-14 items-start
          "
        >

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-7">

            {/* ICON */}
            <div
              className="
                w-16 h-16 flex items-center justify-center
                rounded-full bg-green-100
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-8 h-8 text-green-500"
              >
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Futures CFD
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 max-w-3xl leading-relaxed text-base sm:text-lg">
              Futures are one of the most popular forms of CFDs. IC Markets Global
              offers a range of Futures from around the world, including ICE
              Dollar Index and CBOE VIX Index. Online Futures based CFDs are
              offered exclusively on IC Markets Global’s MetaTrader 4 platform.
            </p>

            {/* ACTION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              {[
                { label: "See our", value: "Spreads" },
                { label: "Download", value: "Product Details" },
                { label: "Popular Account", value: "Raw Spread" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-gray-50 rounded-2xl p-6
                    hover:bg-white hover:shadow-lg
                    transition
                  "
                >
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-semibold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              bg-white rounded-3xl border
              p-8 space-y-7
              shadow-sm
            "
          >
            <div>
              <p className="text-sm text-gray-500">Markets</p>
              <h3 className="text-2xl font-bold text-black">
                Futures
              </h3>
            </div>

            <ul className="space-y-4 text-sm">
              {[
                "5 Global Futures available to trade",
                "No commissions",
                "Up to 1:200 leverage",
                "Deep Liquidity",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="
                      flex items-center justify-center
                      w-6 h-6 rounded-full
                      bg-green-500 shadow
                      mt-0.5
                    "
                  >
                    <Check size={14} className="text-black" />
                  </span>
                  <span className="text-gray-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="
                w-full mt-6 py-3.5 rounded-xl
                border border-green-500
                text-green-600 font-semibold
                hover:bg-green-500 hover:text-black
                transition
              "
            >
              DETAILS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
