const BitcoinCFDTradingExample = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Bitcoin CFD Trading Example
          </h2>

          <span className="inline-block bg-green-400 text-black font-medium px-5 py-2 rounded-md w-fit">
            Buying: BTCUSD
          </span>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PROFIT CALCULATION */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              The gross profit on your trade is calculated as follows:
            </h3>

            <div className="space-y-4 text-gray-700 text-sm">
              <div>
                <p className="font-medium text-gray-900">Opening Price</p>
                <p>3910.25 * 2 = USD $7820.50</p>
              </div>

              <hr />

              <div>
                <p className="font-medium text-gray-900">Closing Price</p>
                <p>4200.50 * 2 = USD $8401.00</p>
              </div>

              <hr />

              <div>
                <p className="font-medium text-gray-900">
                  Gross Profit on Trade
                </p>
                <p>USD $8401.00 − 7820.50 = $580.50</p>
              </div>
            </div>
          </div>

          {/* OPENING POSITION */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Opening the Position
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The price of Bitcoin CFD against the US Dollar is
              3900.25/3910.25 and you decide to buy 2 contracts at
              3910.25.
            </p>
          </div>

          {/* CLOSING POSITION */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Closing the Position
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              One month later Bitcoin CFD has increased to
              4200.50/4210.50 and you decide to take your profit by
              selling your 2 contracts at 4200.50 each.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BitcoinCFDTradingExample;
