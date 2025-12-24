const CommoditiesOverview = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN */}
        <div className="space-y-16">
          
          {/* Energies */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Energies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IC Markets Global allows trading of spot energy contracts including
              Crude Oil, Brent, and Natural Gas from your chosen trading platform
              against the US Dollar.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Trading energy contracts as a spot instrument has many advantages
              for investors who are only interested in price speculation.
            </p>
          </div>

          {/* Precious Metals */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Precious Metals
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IC Markets Global allows trading the spot price for metals including
              Gold or Silver against the US Dollar or Euro and the metals Platinum
              or Palladium against the US Dollar as a currency pair on 1:1000
              leverage.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex items-start">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Soft CFDs on Commodities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to energy and metal contracts, at IC Markets Global we
              offer a range of soft commodity products to trade, including corn,
              soybeans, sugar, cocoa, coffee, and wheat as CFDs – all with low
              spreads and leverage up to 1:100.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommoditiesOverview;
