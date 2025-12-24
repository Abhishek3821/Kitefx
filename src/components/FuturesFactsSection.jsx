import { CheckCircle } from "lucide-react";

const futuresData = [
  { index: "ICE Dollar Index Futures", symbol: "DXY" },
  { index: "CBOE VIX Index Futures", symbol: "VIX" },
  { index: "Brent Crude Oil Futures", symbol: "BRENT" },
  { index: "WTI Crude Oil Futures", symbol: "WTI" },
  { index: "Gold Futures", symbol: "GC" },
];

export default function FuturesFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 shadow-sm">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Icon */}
          <div className="w-14 h-14 text-green-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="7" />
              <path d="M12 8v4l2 2" />
              <path d="M3 12h2M19 12h2M12 3v2M12 19v2" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Futures CFD are priced directly from the underlying futures markets,
            with commissions, financing charges and dividend adjustments all
            built into the spread itself. IC Markets Global offers competitive
            spreads across all of our Future CFDs.
          </h2>

          <p className="text-gray-600">
            The following table shows our selection of global Futures CFDs
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto border rounded-xl">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-green-400 text-black">
                  <th className="px-6 py-4 text-left font-semibold">Index</th>
                  <th className="px-6 py-4 text-left font-semibold">Symbol</th>
                </tr>
              </thead>
              <tbody>
                {futuresData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="px-6 py-4">{row.index}</td>
                    <td className="px-6 py-4 font-semibold">{row.symbol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-500">Futures</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "5 Global Futures available to trade",
              "No commissions",
              "Up to 1:200 leverage",
              "Deep Liquidity",
              "MetaTrader 4 and 5",
              "Trade 24/5",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="w-full border border-green-500 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
            Open Account
          </button>
        </div>

      </div>
    </section>
  );
}
