import { Check } from "lucide-react";

export default function StocksCFDCard() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
            bg-white rounded-[32px] p-10 md:p-14
            border shadow-[0_40px_120px_rgba(0,0,0,0.08)]
            grid grid-cols-1 lg:grid-cols-3 gap-14 items-start
          "
        >

          {/* LEFT CARD */}
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
                Stocks
              </h3>
            </div>

            <ul className="space-y-4 text-sm">
              {[
                "+2100 stocks from ASX, Nasdaq & NYSE",
                "Earn dividends",
                "MT5",
                "Up to 1:20 leverage",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span
                    className="
                      flex items-center justify-center
                      w-6 h-6 rounded-full
                      bg-green-500 shadow
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

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Icon */}
            <div
              className="
                w-14 h-14 flex items-center justify-center
                rounded-2xl bg-green-100
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-7 h-7 text-green-500"
              >
                <path d="M4 20V10M10 20V4M16 20v-6M22 20v-12" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Stocks CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-3xl leading-relaxed text-base sm:text-lg">
              Access over +2100 large-cap Stocks CFDs across the ASX,
              NYSE and NASDAQ stock exchanges. We have selected a range
              of the world’s most popular companies to give you the best
              trading opportunities.
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

        </div>
      </div>
    </section>
  );
}
