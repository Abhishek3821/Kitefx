const ForexTradingExamples = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Forex Trading Examples
          </h2>

          <span className="mt-4 md:mt-0 inline-block bg-green-500 text-black font-semibold px-5 py-2 rounded-md">
            Selling: EUR/USD
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border p-6 space-y-5">
            <h3 className="text-lg font-bold">
              The gross profit on your trade is calculated as follows:
            </h3>

            <div>
              <p className="font-semibold">Opening Price</p>
              <p className="text-gray-700">
                €200,000 x 1.33623 = USD $267,246
              </p>
            </div>

            <hr />

            <div>
              <p className="font-semibold">Closing Price</p>
              <p className="text-gray-700">
                €200,000 x 1.32129 = USD $264,258
              </p>
            </div>

            <hr />

            <div>
              <p className="font-semibold">Gross Profit on Trade</p>
              <p className="font-bold text-black">$2988</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-bold mb-4">
              Opening the Position
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The price of the Euro against the US Dollar (EUR/USD) is
              1.33623/1.33624 and you decide to sell 2 standard lots (the
              equivalent of €200,000) at 1.33623.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-bold mb-4">
              Closing the Position
            </h3>
            <p className="text-gray-700 leading-relaxed">
              One week later the Euro has fallen against the US Dollar to
              1.32128/1.32129 and you decide to take your profit by buying back
              2 standard lots at 1.32129.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexTradingExamples;
