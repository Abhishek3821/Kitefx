import Image from "../assets/kitefx31.webp";

const TradingViewHero = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Premiere charting and <br />
            trading with KiteFX <br />
            Global
          </h1>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            TradingView is the world&apos;s leading charting platform and a
            vibrant community used by over 50 million traders. Our trading
            integration via cTrader will allow you to access the best charting
            and technical analysis tools on the market and be informed like
            never before.
          </p>

          <button className="bg-green-400 hover:bg-green-300 transition text-black font-semibold px-8 py-3 rounded-md">
            Open Account
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center lg:justify-end">
          {/* LAPTOP IMAGE */}
          <img
            src={Image}
            alt="TradingView charting platform"
            className="w-full max-w-xl"
          />

          {/* TRADINGVIEW LOGO BADGE */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-4">
            <span className="text-3xl font-bold">TV</span>
          </div>

          {/* RATING CARD */}
          <div className="absolute right-0 -bottom-16 bg-white rounded-2xl shadow-lg p-6 w-80">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold">TradingView</span>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-bold">Excellent</span>
              <div className="flex text-black">★★★★★</div>
              <span className="ml-auto bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                BEST 2024
              </span>
            </div>

            <p className="text-sm text-gray-500">Based on 7.7k reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewHero;
