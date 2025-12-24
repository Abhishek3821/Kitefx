const futuresData = [
  {
    name: "EURBBL_H6",
    start: "03/12/2025",
    closeOnly: "03/03/2026",
    expiry: "04/03/2026",
    month: "March",
  },
  {
    name: "EURBND_H6",
    start: "03/12/2025",
    closeOnly: "03/03/2026",
    expiry: "04/03/2026",
    month: "March",
  },
  {
    name: "EURSCA_H6",
    start: "03/12/2025",
    closeOnly: "03/03/2026",
    expiry: "04/03/2026",
    month: "March",
  },
  {
    name: "UST05Y_H6",
    start: "25/11/2025",
    closeOnly: "24/02/2026",
    expiry: "25/02/2026",
    month: "March",
  },
  {
    name: "UST10Y_H6",
    start: "25/11/2025",
    closeOnly: "24/02/2026",
    expiry: "25/02/2026",
    month: "March",
  },
  {
    name: "UST30Y_H6",
    start: "26/11/2025",
    closeOnly: "24/02/2026",
    expiry: "25/02/2026",
    month: "March",
  },
  {
    name: "UKGB_H6",
    start: "24/11/2025",
    closeOnly: "23/02/2026",
    expiry: "24/02/2026",
    month: "March",
  },
  {
    name: "JGB10Y_H6",
    start: "09/12/2025",
    closeOnly: "09/03/2026",
    expiry: "10/03/2026",
    month: "March",
  },
  {
    name: "ITB10Y_H6",
    start: "03/12/2025",
    closeOnly: "03/03/2026",
    expiry: "04/03/2026",
    month: "March",
  },
];

export default function UpcomingExpiringFutures() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Expiring Futures
          </h2>

          <span className="inline-flex items-center bg-green-400 text-black font-semibold px-5 py-2 rounded-md w-fit">
            Futures expiry/roll process
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed max-w-5xl">
          IC Markets Global Futures CFDs are set to expire two working days
          before the contract expires on the underlying market. When a Futures
          CFD contract expires, all open positions will be closed at the futures
          settlement price; as reported by the futures exchange. This process
          would usually take place on the day following the expiry. Open
          positions are not rolled to the next front month so any clients
          wishing to hold long term positions must reopen the trade on the next
          available contract.
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200 text-gray-900">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-center font-semibold">
                  Start Date
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  Close Only Date
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  Expiry Date
                </th>
                <th className="px-6 py-4 text-center font-semibold bg-green-400">
                  Contract Month
                </th>
              </tr>
            </thead>

            <tbody>
              {futuresData.map((row, index) => (
                <tr
                  key={index}
                  className="border-t even:bg-gray-50 hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-center">{row.start}</td>
                  <td className="px-6 py-4 text-center">{row.closeOnly}</td>
                  <td className="px-6 py-4 text-center">{row.expiry}</td>
                  <td className="px-6 py-4 text-center font-semibold">
                    {row.month}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
