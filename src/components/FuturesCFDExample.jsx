const FuturesCFDExample = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Futures CFD Example
          </h2>

          <span className="inline-block bg-green-400 text-black font-medium px-5 py-2 rounded-md w-fit">
            Buying the Volatility Index (VIX)
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
                <p>$14.20</p>
              </div>

              <hr />

              <div>
                <p className="font-medium text-gray-900">Closing Price</p>
                <p>$18.20</p>
              </div>

              <hr />

              <div>
                <p className="font-medium text-gray-900">Difference</p>
                <p>4.00 (400 Index points)</p>
              </div>

              <hr />

              <div>
                <p className="font-medium text-gray-900">
                  Gross Profit on Trade
                </p>
                <p>
                  400 × 1 contract ($0.01 per point) = USD $4.00
                </p>
              </div>
            </div>
          </div>

          {/* OPENING POSITION */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Opening the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              The price of the VIX is 14.05/14.20. You are of the view that market
              volatility will increase so you decide to buy 1 contract at 14.20.
              (One contract is equal to $0.01 per point, there are 100 points per
              1.00 change in the index). No commission is charged on Futures CFDs.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mt-4">
              For every point that the bid quote on the VIX rises above 14.20 you
              will make a profit of $0.01 USD, for every point the bid quote
              falls below 14.20 you will lose $0.01 USD.
            </p>
          </div>

          {/* CLOSING POSITION */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Closing the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Four days later, the VIX has risen to 18.20/18.35 and you decide to
              take your profit. You close your position by selling 1 contract at
              18.20.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FuturesCFDExample;
