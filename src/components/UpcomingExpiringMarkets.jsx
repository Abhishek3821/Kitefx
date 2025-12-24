const UpcomingExpiringMarkets = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* RISK WARNING */}
        <div className="bg-green-100 text-gray-900 text-center px-6 py-4 rounded-xl font-medium">
          You should be aware that if the market had moved in the opposite
          direction, you would have made a loss that could have exceeded your
          initial deposit.
        </div>

        {/* HEADING */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Expiring, Spot Oil and Tradable Markets
          </h2>

          <h3 className="text-lg font-semibold text-gray-900">
            Futures expiry/roll process
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed max-w-5xl">
          IC Markets Global Futures CFDs are set to expire two working days
          before the contract expires on the underlying market. When a Futures
          CFD contract expires, all open positions will be closed at the
          futures settlement price; as reported by the futures exchange. This
          process would usually take place on the day following the expiry.
          Open positions are not rolled to the next front month so any clients
          wishing to hold long term positions must reopen the trade on the next
          available contract.
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-400 text-black text-left">
                <th className="px-6 py-4 font-semibold">Index</th>
                <th className="px-6 py-4 font-semibold">Start Date</th>
                <th className="px-6 py-4 font-semibold">Close Only Date</th>
                <th className="px-6 py-4 font-semibold">Expiry Date</th>
                <th className="px-6 py-4 font-semibold">Contract Month</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              <tr className="border-t">
                <td className="px-6 py-4">DXY_Z5</td>
                <td className="px-6 py-4">11/09/2025</td>
                <td className="px-6 py-4">11/12/2025</td>
                <td className="px-6 py-4">12/12/2025</td>
                <td className="px-6 py-4">December</td>
              </tr>

              <tr className="bg-gray-50 border-t">
                <td className="px-6 py-4">DXY_H6</td>
                <td className="px-6 py-4">11/12/2025</td>
                <td className="px-6 py-4">12/3/2026</td>
                <td className="px-6 py-4">13/03/2026</td>
                <td className="px-6 py-4">March</td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4">VIX_F6</td>
                <td className="px-6 py-4">15/12/2025</td>
                <td className="px-6 py-4">19/01/2026</td>
                <td className="px-6 py-4">20/01/2026</td>
                <td className="px-6 py-4">January</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default UpcomingExpiringMarkets;
    