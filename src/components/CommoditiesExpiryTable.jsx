import React from "react";

const commoditiesData = [
  {
    commodity: "Sugar_H6",
    startDate: "19/09/2025",
    closeOnlyDate: "18/02/2026",
    expiryDate: "19/02/2026",
    contractMonth: "March",
  },
  {
    commodity: "Corn_H6",
    startDate: "19/11/2025",
    closeOnlyDate: "18/02/2026",
    expiryDate: "19/02/2026",
    contractMonth: "March",
  },
  {
    commodity: "OJ_F6",
    startDate: "22/10/2025",
    closeOnlyDate: "19/12/2025",
    expiryDate: "22/12/2025",
    contractMonth: "January",
  },
  {
    commodity: "Sbean_F6",
    startDate: "22/10/2025",
    closeOnlyDate: "21/12/2025",
    expiryDate: "22/12/2025",
    contractMonth: "January",
  },
  {
    commodity: "BRENT_G6",
    startDate: "24/11/2025",
    closeOnlyDate: "24/12/2025",
    expiryDate: "25/12/2025",
    contractMonth: "February",
  },
  {
    commodity: "Cocoa_H6",
    startDate: "5/11/2025",
    closeOnlyDate: "5/2/2026",
    expiryDate: "6/2/2026",
    contractMonth: "March",
  },
  {
    commodity: "Coffee_H6",
    startDate: "5/11/2025",
    closeOnlyDate: "5/2/2026",
    expiryDate: "6/2/2026",
    contractMonth: "March",
  },
  {
    commodity: "Cotton_H6",
    startDate: "5/11/2025",
    closeOnlyDate: "4/2/2026",
    expiryDate: "5/2/2026",
    contractMonth: "March",
  },
  {
    commodity: "GCG26",
    startDate: "21/11/2025",
    closeOnlyDate: "26/01/2026",
    expiryDate: "28/01/2026",
    contractMonth: "February",
  },
  {
    commodity: "Wheat_H6",
    startDate: "12/11/2025",
    closeOnlyDate: "11/2/2026",
    expiryDate: "12/2/2026",
    contractMonth: "March",
  },
  {
    commodity: "WTI_F6",
    startDate: "14/11/2025",
    closeOnlyDate: "15/12/2025",
    expiryDate: "16/12/2025",
    contractMonth: "January",
  },
];

const CommoditiesExpiryTable = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-8">
          CFDs on Commodities Expiry Information:
        </h2>

        {/* Table Wrapper */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full text-left text-sm">
            {/* Table Head */}
            <thead className="bg-green-400 text-black">
              <tr>
                <th className="px-6 py-4 font-semibold">Commodity</th>
                <th className="px-6 py-4 font-semibold">Start Date</th>
                <th className="px-6 py-4 font-semibold">Close Only Date</th>
                <th className="px-6 py-4 font-semibold">Expiry Date</th>
                <th className="px-6 py-4 font-semibold">Contract Month</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {commoditiesData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{item.commodity}</td>
                  <td className="px-6 py-4">{item.startDate}</td>
                  <td className="px-6 py-4">{item.closeOnlyDate}</td>
                  <td className="px-6 py-4">{item.expiryDate}</td>
                  <td className="px-6 py-4">{item.contractMonth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesExpiryTable;
