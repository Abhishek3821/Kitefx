export default function CommodityTradingExample() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Commodity trading example
          </h2>

          <span className="inline-flex items-center bg-green-400 text-black font-semibold px-6 py-2 rounded-md w-fit">
            Buying: Wheat
          </span>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
            <h3 className="text-lg font-bold text-gray-900">
              The gross profit on your trade is calculated as follows:
            </h3>

            <div className="space-y-4 text-sm text-gray-800">
              <div>
                <p className="font-semibold">Opening Price</p>
                <p>$435.25 * 100 contracts * 4 = USD $174,100</p>
              </div>

              <hr />

              <div>
                <p className="font-semibold">Closing Price</p>
                <p>$460 * 100 contracts * 4 = USD $184,000</p>
              </div>

              <hr />

              <div>
                <p className="font-semibold">Gross Profit on Trade</p>
                <p>USD $184,000 − $174,100 = $9,900</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
            <h3 className="text-lg font-bold text-gray-900">
              Opening the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Wheat_N7 is currently trading at 434.00/435.25 and you are
              expecting Australia’s East Coast crops to be affected by adverse
              weather patterns over the coming year which will result in lower
              than average crop yields.
            </p>

            <div className="bg-white border rounded-lg p-4 text-sm text-gray-800">
              You buy 100 contracts of Wheat (4 bushels per contract) at 435.25
              which equals USD $174,100 (435.25 * 100 * 4).
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
            <h3 className="text-lg font-bold text-gray-900">
              Closing the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Your research surrounding weather conditions turns out to be
              correct. Lower crop yields this year have caused Wheat prices to
              increase to 460.00/462.15. You exit your position by selling your
              contracts at 460.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
