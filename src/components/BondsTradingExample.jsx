const BondsTradingExample = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bonds trading example
          </h2>

          <span className="inline-block bg-green-400 text-black font-medium px-6 py-2 rounded-md w-fit">
            Selling: 5-Year U.S Treasury Note
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
              <p>($120.25 × 10 contracts) × $200 = USD $240,500</p>

              <hr />

              <p className="font-medium">Closing Price</p>
              <p>($118.32 × 10 contracts) × $200 = USD $236,640</p>

              <hr />

              <p className="font-medium">Gross Profit on Trade</p>
              <p>$240,500 − $236,640 = USD $3,860</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Opening the Position
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              You hold the view that the US Federal Reserve will increase
              Interest Rates and 5-Year Treasury yields will increase as a
              result. You sell 10 contracts of March 2017 5-Year US Treasury
              Note at 120.25.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Closing the Position
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Your view is correct and March 2017 5-Year T-note prices decline.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-medium">Note:</span> For Bonds with a
              contract size of 200, it means every 0.01 move in the Bond CFD is
              worth US$2.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BondsTradingExample;
