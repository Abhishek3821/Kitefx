export default function CTraderTradingViewCommission() {
  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          cTrader and TradingView Commission Rates
        </h1>

        {/* Description */}
        <div className="space-y-5 text-gray-800 text-sm sm:text-base leading-relaxed max-w-5xl mb-12">
          <p>
            cTrader and TradingView commission is charged per side, per 100,000
            USD traded. This is different to MetaTrader 4 which charges a fixed
            amount per lot.
          </p>

          <p>
            The commission charged on the cTrader and TradingView platform is
            <span className="font-semibold"> $3 USD per 100,000 USD traded</span>.
            The USD commission amount is converted to the base currency of an
            account at the current spot rate. An example of the commission
            calculation on a cTrader account is below.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full border-collapse text-sm sm:text-base">

            {/* Header */}
            <thead>
              <tr>
                <th className="bg-gray-200 px-4 py-3 border border-gray-500 text-left" />
                <th className="bg-green-400 px-4 py-3 border border-gray-500 text-center font-semibold">
                  Calculation @ $3 USD per 100,000 USD
                </th>
                <th className="bg-green-400 px-4 py-3 border border-gray-500 text-center font-semibold">
                  Commission on 1 lot EURUSD
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <tr className="hover:bg-green-100 transition">
                <td className="px-4 py-3 border border-gray-500 font-medium">
                  Opening Price
                </td>
                <td className="px-4 py-3 border border-gray-500 text-center">
                  €100,000 x 1.3000 = USD 130,000 x (3 / 100,000)
                </td>
                <td className="px-4 py-3 border border-gray-500 text-center font-medium">
                  $3.90
                </td>
              </tr>

              <tr className="hover:bg-green-100 transition">
                <td className="px-4 py-3 border border-gray-500 font-medium">
                  Closing Price
                </td>
                <td className="px-4 py-3 border border-gray-500 text-center">
                  €100,000 x 1.3100 = USD 131,000 x (3 / 100,000)
                </td>
                <td className="px-4 py-3 border border-gray-500 text-center font-medium">
                  $3.93
                </td>
              </tr>

              <tr className="hover:bg-green-100 transition">
                <td className="px-4 py-3 border border-gray-500 font-semibold">
                  Total Commission on Trade
                </td>
                <td className="px-4 py-3 border border-gray-500 text-center" />
                <td className="px-4 py-3 border border-gray-500 text-center font-bold">
                  $7.83
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}
