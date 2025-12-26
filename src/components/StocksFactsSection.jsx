import { CheckCircle } from "lucide-react";

export default function StocksFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 shadow-sm">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Decorative Icon */}
          <div className="relative w-14 h-14">
            <div className="absolute left-0 top-0 w-full h-full border-4 border-green-400 rounded-md" />
            <svg
              className="absolute inset-0 m-auto"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="3 3 3 21 21 21" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            KiteFX Global single stock CFD give traders the ability to trade the
            world’s most popular companies such as Nvidia, Apple, Meta,
            Microsoft or BHP Billiton.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We have listed the most popular stocks across the Australian and US
            markets to give you the best trading opportunities. Alternatively
            you can trade global macro themes with our special selection of US
            Exchange listed CFDs including a range of emerging markets indices
            and popular such as the VanEck Vectors Gold Miners (GDX).
          </p>

          <p className="text-gray-600 leading-relaxed">
            Stocks are available exclusively on the KiteFX Global MetaTrader 5
            platform which offers advanced functionalities for both new and
            experienced traders who require world class execution and superior
            charting tools.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="#"
              className="text-green-500 text-sm font-semibold uppercase tracking-wide hover:underline"
            >
              Further information on US stock trading
            </a>
            <a
              href="#"
              className="text-green-500 text-sm font-semibold uppercase tracking-wide hover:underline"
            >
              Further information about ASX trading
            </a>
          </div>

          {/* Download Card */}
          <div className="pt-4">
            <div className="inline-block bg-gray-50 border rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">Download</p>
              <p className="font-bold text-lg text-gray-900">Product Details</p>
            </div>
          </div>
        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-500">Stocks</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "+2100 stocks",
              "ASX, NASDAQ, NYSE",
              "Ultra fast execution",
              "Earn dividends",
              "MetaTrader 5",
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
