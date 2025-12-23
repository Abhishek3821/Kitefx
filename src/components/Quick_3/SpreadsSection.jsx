export default function SpreadsSection() {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Icon */}
        <div className="mb-6">
          <div className="relative w-16 h-16">
            <span className="absolute inset-0 rounded-full bg-gray-100" />
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="absolute inset-0 m-auto w-10 h-10"
            >
              <path
                d="M24 6v12M24 30v12M6 24h12M30 24h12M10 10l8 8M30 30l8 8M10 38l8-8M30 18l8-8"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Spreads
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed max-w-5xl">

          <p>
            IC Markets Global offers variable spreads on our{" "}
            <span className="text-green-500 font-medium">
              MetaTrader 4, MetaTrader 5, TradingView and cTrader
            </span>{" "}
            forex trading platforms. We are able to offer tight spreads in each
            of our platforms thanks to our mix of liquidity providers. Our
            pricing consists of over 25 different liquidity providers ensuring
            our spreads remain tight and liquidity deep 24/5.
          </p>

          <p>
            Our typical spreads are illustrated below. Spreads can go as low as
            0.0 pips on our MetaTrader and cTrader Raw Spread platforms.
          </p>

          <p className="text-gray-600">
            Instrument Specifications are subject to change. The most accurate
            details are those displayed in your account through the electronic
            trading system.
          </p>

        </div>

      </div>
    </section>
  );
}
