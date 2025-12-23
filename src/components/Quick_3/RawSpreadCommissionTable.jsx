export default function RawSpreadCommissionTable() {
  const data = [
    {
      currency: "AUD Account\nAustralian Dollar",
      micro: "AUD 0.045\n(AUD 0.09 round turn)",
      standard: "AUD 4.5\n(AUD 9.0 round turn)",
    },
    {
      currency: "USD Account\nUS Dollar",
      micro: "USD 0.035\n(USD 0.07 round turn)",
      standard: "USD 3.50\n(USD 7.0 round turn)",
    },
    {
      currency: "EUR Account\nEuro",
      micro: "EUR 0.0325\n(EUR 0.07 round turn)",
      standard: "EUR 3.25\n(EUR 6.5 round turn)",
    },
    {
      currency: "GBP Account\nPound Sterling",
      micro: "GBP 0.0275\n(GBP 0.06 round turn)",
      standard: "GBP 2.75\n(GBP 5.5 round turn)",
    },
    {
      currency: "SGD Account\nSingapore Dollar",
      micro: "SGD 0.0475\n(SGD 0.1 round turn)",
      standard: "SGD 4.75\n(SGD 9.5 round turn)",
    },
    {
      currency: "JPY Account\nJapanese Yen",
      micro: "JPY 5.5\n(JPY 11 round turn)",
      standard: "JPY 550\n(JPY 1100 round turn)",
    },
    {
      currency: "CHF Account\nSwiss Franc",
      micro: "CHF 0.033\n(CHF 0.07 round turn)",
      standard: "CHF 3.30\n(CHF 6.60 round turn)",
    },
    {
      currency: "NZD Account\nNew Zealand Dollar",
      micro: "NZD 0.06\n(NZD 0.12 round turn)",
      standard: "NZD 6.0\n(NZD 12.0 round turn)",
    },
    {
      currency: "CAD Account\nCanadian Dollar",
      micro: "CAD 0.0475\n(CAD 0.1 round turn)",
      standard: "CAD 4.75\n(CAD 9.5 round turn)",
    },
    {
      currency: "HKD Account\nHong Kong Dollar",
      micro: "HKD 0.27125\n(HKD 0.54 round turn)",
      standard: "HKD 27.125\n(HKD 54.25 round turn)",
    },
  ];

  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">

        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          MetaTrader4 Raw Spread Commission Rates
        </h1>

        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full border-collapse text-sm">

            {/* Header */}
            <thead>
              <tr>
                <th className="bg-gray-200 text-left px-4 py-2 border border-gray-300 font-semibold">
                  Account Base Currency
                </th>
                <th className="bg-green-400 text-center px-4 py-2 border border-gray-300 font-semibold">
                  Micro Lot Commission<br />(0.01 Lot)
                </th>
                <th className="bg-green-400 text-center px-4 py-2 border border-gray-300 font-semibold">
                  Standard Lot Commission<br />(1 Lot)
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-green-100"
                >
                  <td className="px-4 py-2 border border-gray-300 whitespace-pre-line font-medium leading-snug">
                    {row.currency}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center whitespace-pre-line leading-snug">
                    {row.micro}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-center whitespace-pre-line font-medium leading-snug">
                    {row.standard}
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
