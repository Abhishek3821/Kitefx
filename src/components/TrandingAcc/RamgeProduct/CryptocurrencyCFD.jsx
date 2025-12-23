import { Check } from "lucide-react";

export default function CryptocurrencyCFD() {
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
                Cryptocurrency
              </h3>
            </div>

            <ul className="space-y-4 text-sm">
              {[
                "21 of the most popular Cryptocurrency",
                "Trade the market 7 days a week",
                "Long or short",
                "Up to 1:500 leverage MetaTrader4/MT5",
                "1:300 leverage cTrader and TradingView",
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

          {/* CENTER CONTENT */}
          <div className="lg:col-span-2 space-y-7">

            {/* Icon */}
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
                <circle cx="12" cy="12" r="9" />
                <path d="M9 8h4a2 2 0 1 1 0 4H9z" />
                <path d="M9 12h5a2 2 0 1 1 0 4H9z" />
                <path d="M12 5v14" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Cryptocurrency CFD
            </h2>

            {/* Description */}
            <p className="text-gray-600 max-w-3xl leading-relaxed text-base sm:text-lg">
              Go long or short across our range of the world’s largest and most
              popular Cryptocurrencies. Trade the market 7 days a week where
              price movements are driven primarily by fear and greed, news and
              prevailing sentiment. Enjoy trading with leverage of up to 1:200
              and eliminate Cryptocurrency Exchange risk by trading with an
              FSA-regulated CFD Provider.
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
