export default function AccessICInsights() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* HEADER */}
        <div className="space-y-4">
          <p className="text-sm font-medium text-green-500">
            Fuel your trades with data-driven precision
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How to Access KiteFX Insights?
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          {/* STEP 1 */}
          <div className="relative space-y-4">
            <span className="absolute -top-8 left-0 text-8xl font-bold text-green-100">
              1
            </span>

            <h3 className="text-xl font-semibold text-gray-900 relative">
              Open an Account
            </h3>

            <p className="text-gray-600 leading-relaxed relative">
              Log in to KiteFX Global or create an account if you haven't
              already, then navigate to <strong>Insights</strong> in your Client
              Area.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative space-y-4">
            <span className="absolute -top-8 left-0 text-8xl font-bold text-green-100">
              2
            </span>

            <h3 className="text-xl font-semibold text-gray-900 relative">
              Search and Analyse
            </h3>

            <p className="text-gray-600 leading-relaxed relative">
              Search for any stocks you're interested in and observe insights
              from experts, the crowd, or even the news, indicating how it could
              perform.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative space-y-4">
            <span className="absolute -top-8 left-0 text-8xl font-bold text-green-100">
              3
            </span>

            <h3 className="text-xl font-semibold text-gray-900 relative">
              Trade smarter with data
            </h3>

            <p className="text-gray-600 leading-relaxed relative">
              Make informed trading decisions based on the data you've read,
              covering Stocks, Cryptocurrencies, and selected Forex CFDs.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <button className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-10 py-4 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
