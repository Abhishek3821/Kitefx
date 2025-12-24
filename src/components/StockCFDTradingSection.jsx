import Image from "../assets/kitefx19.webp";

const StockCFDTradingSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Image}
            alt="Stock CFD trading platforms"
            className="max-w-full h-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            How does Stock CFD <br /> Trading work?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Stock trading involves buying or selling a share of ownership in an
            individual company listed on an exchange such as the ASX or NASDAQ.
            Stocks are typically traded without leverage and through a stock
            exchange.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Stock CFDs however can be traded using leverage and are done so
            over-the-counter (OTC). Participants are able to access stocks of
            individual companies, building positions in an individual company
            or in a specified sector of the economy.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Participants often build strategies with diversification in mind
            to diversify away unsystematic risk across a number of companies or
            a range of sectors.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Investors may choose to build positions in defensives if they are
            predicting volatility. Similarly, investors may decide to build a
            portfolio around a growth strategy consisting of small to mid-cap
            technology stocks.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StockCFDTradingSection;
