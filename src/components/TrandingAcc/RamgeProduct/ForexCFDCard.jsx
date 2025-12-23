import { Check } from "lucide-react";

export default function ForexCFDCard() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="
          relative bg-white rounded-[32px] p-10 md:p-14
          border shadow-[0_40px_120px_rgba(0,0,0,0.08)]
          grid grid-cols-1 lg:grid-cols-3 gap-14 items-start
        ">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-7">

            {/* Icon */}
            <div className="
              w-14 h-14 flex items-center justify-center
              rounded-2xl bg-green-100
              shadow-inner
            ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-7 h-7 text-green-500"
              >
                <path d="M4 7h16M4 17h16M7 4v16M17 4v16" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Forex CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-2xl leading-relaxed text-base sm:text-lg">
              The Forex market provides traders the opportunity to trade
              24 hours a day, 5 days a week in the world’s most liquid
              financial market. Traders can take advantage of some of
              the tightest spreads, superior execution, and deep
              liquidity across 61 currency pairs.
            </p>

            {/* Action Cards */}
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
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                  <p className="font-semibold text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="
              absolute -inset-1 rounded-3xl
              bg-gradient-to-br from-green-400/30 via-transparent to-green-400/30
              blur-xl
            " />

            <div className="
              relative bg-white rounded-3xl border
              p-8 space-y-7
              shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              hover:-translate-y-2 transition
            ">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Markets
                </p>
                <h3 className="text-2xl font-bold text-black">
                  Forex
                </h3>
              </div>

              <ul className="space-y-4 text-sm">
                {[
                  "61 currency pairs",
                  "Tight spreads from 0.0 pips",
                  "Up to 1:1000 leverage",
                  "Deep liquidity",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="
                      flex items-center justify-center
                      w-6 h-6 rounded-full
                      bg-green-500 shadow
                    ">
                      <Check size={14} className="text-black" />
                    </span>
                    <span className="text-gray-800 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="
                w-full mt-2 py-3.5 rounded-xl
                border border-green-500
                text-green-600 font-semibold
                hover:bg-green-500 hover:text-black
                transition
              ">
                DETAILS
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
