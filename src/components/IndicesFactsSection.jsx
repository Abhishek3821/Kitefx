import { CheckCircle } from "lucide-react";

export default function IndicesFactsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-12 shadow-sm">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Decorative Bars */}
          <div className="flex items-end gap-2">
            <span className="w-1 h-12 bg-green-400 rounded"></span>
            <span className="w-1 h-8 bg-green-400 rounded"></span>
            <span className="w-1 h-14 bg-green-400 rounded"></span>
            <span className="w-1 h-10 bg-green-400 rounded"></span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Indices are the most popular form of CFDs. KiteFX Global has a large
            range of Indices from around the world to choose from, including the
            Australian S&P 200 Index, UK FTSE 100 Index, US E-mini S&P 500 and
            US DJIA Index.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            A stock index is a good indicative measure of market performance.
            Indices such as the FTSE 100 and DJIA Index are baskets of blue chip
            stocks listed on the exchange and are generally a good measure of
            the current market sentiment. A change in the performance of any
            constituent stock in an index is reflected in a change in the
            overall value of that index.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Indices have the advantage of allowing traders to take a wider view
            of a basket of stocks rather than taking a view on one individual
            stock alone. Online CFD and futures based indices are offered on all
            platforms.
          </p>

          {/* CTA LINKS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-gray-50 border rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">See our</p>
              <p className="font-bold text-lg">Spreads</p>
            </div>

            <div className="bg-gray-50 border rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">Download</p>
              <p className="font-bold text-lg">Product Details</p>
            </div>

            <div className="bg-gray-50 border rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">Popular Account</p>
              <p className="font-bold text-lg">Raw Spread</p>
            </div>
          </div>
        </div>

        {/* RIGHT FACTS CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 border space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-500">Indices</p>
            <h3 className="text-2xl font-bold text-gray-900">Facts</h3>
          </div>

          <ul className="space-y-4">
            {[
              "25 Indices to trade from",
              "Leverage up to 1:200",
              "Spreads as low as 0.4 pips",
              "Deep Liquidity",
              "No commissions",
              "All platforms",
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
