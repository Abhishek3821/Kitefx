export  function UltimateTradingConditions() {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 space-y-16">

        <div className="max-w-5xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            The Ultimate in Trading Conditions
          </h1>

          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            IC Markets Global has been created with traders in mind. Scalping,
            hedging, and automated trading are all allowed. Our Raw Spread
            account spreads start from <span className="font-semibold">0.0 pips</span>.
            We have flexible leverage options offering up to{" "}
            <span className="font-semibold">1:1000</span>, and accept deposits in{" "}
            <span className="font-semibold">10 major currencies</span>.
          </p>
        </div>

        <div className="relative">
          <div className="h-px w-full bg-gray-300" />
          <div className="absolute left-0 top-0 h-px w-16 bg-black" />
        </div>

        <div className="max-w-5xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">
            Better Fills
          </h2>

          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            Clients can open trades from{" "}
            <span className="font-semibold">1 micro lot (1,000 base currency)</span>{" "}
            to <span className="font-semibold">200 lots (20 million base currency)</span>{" "}
            through our bridge. Our technology sorts and ranks prices to allow
            real-time execution of large trades over multiple pricing providers
            and their pricing tiers, ensuring the best possible price for any
            trade size.
          </p>
        </div>

      </div>
    </section>
  );
}

export default UltimateTradingConditions;