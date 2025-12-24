export default function IndicesTradingExample() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Indices example
          </h2>

          <span className="inline-flex items-center bg-green-400 text-black font-semibold px-6 py-2 rounded-md w-fit">
            Buying: Australia 200 Index
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
                <p>4951</p>
              </div>

              <hr />

              <div>
                <p className="font-semibold">Closing Price</p>
                <p>4970</p>
              </div>

              <hr />

              <div>
                <p className="font-semibold">Difference</p>
                <p>19</p>
              </div>

              <hr />

              <div>
                <p className="font-semibold">Gross Profit on Trade</p>
                <p>
                  19.00 points x 2 contracts ($2 per point) = AUD $38.00
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
            <h3 className="text-lg font-bold text-gray-900">
              Opening the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              The price of the Australia 200 Index is 4950.00/4951.00. You are of
              the view that blue-chip stocks are undervalued so you decide to
              buy 2 contracts at 4951.00. (One contract is equal to $1 per index
              point). No commission is charged on Indices.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 border space-y-6">
            <h3 className="text-lg font-bold text-gray-900">
              Closing the Position
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Four days later, the Australia 200 Index has risen to
              4970.00/4971.00 and you decide to take your profit. You close your
              position by selling 2 contracts at 4970.00.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
