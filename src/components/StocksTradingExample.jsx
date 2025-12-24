const StocksTradingExample = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stocks trading example
          </h2>

          <span className="inline-block bg-green-400 text-black font-medium px-6 py-2 rounded-md w-fit">
            Buying: Apple Inc (NASDAQ: AAPL)
          </span>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              The gross profit on your trade is calculated as follows:
            </h3>

            <div className="text-sm text-gray-700 space-y-2">
              <p className="font-medium">Opening Price</p>
              <p>$152 × 100 shares = USD $15,200</p>

              <hr />

              <p className="font-medium">Closing Price</p>
              <p>$170 × 100 shares = USD $17,000</p>

              <hr />

              <p className="font-medium">Gross Profit on Trade</p>
              <p>USD $17,000 − $15,200 = $1,800</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Opening the Position
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Apple is trading at 150/152 and you are of the view that Apple’s
              latest product release will boost sales. You decide to purchase
              100 shares of AAPL. For each contract, one point (a price
              movement of 1) is equal to $1 USD.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              With 100 contracts, every point that the bid quote on AAPL rises
              above 152 you will make a profit of $100 USD, and for every point
              the bid quote falls below 152 you will lose $100 USD.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Closing the Position
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              1 month later, after sales results are released, the price of
              AAPL has increased to 170/172 and you decide to take profit by
              selling 100 AAPL Stock CFD contracts.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              To calculate the net profit you must include any financing or
              dividend adjustments. In the case of a <strong>‘long’</strong>{" "}
              position interest is credited and in the case of a{" "}
              <strong>‘short’</strong> position interest is debited.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StocksTradingExample;
