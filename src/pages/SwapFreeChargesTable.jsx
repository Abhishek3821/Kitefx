import { useState, useMemo } from "react";
import { Search } from "lucide-react";

/* ---------------- DATA ---------------- */

const categories = [
  "All",
  "Major",
  "Minor",
  "Exotic",
  "Index",
  "Energy",
  "Metal",
  "Crypto",
];

const data = [
  { symbol: "EURDKK", charge: 10, category: "Minor" },
  { symbol: "GBPDKK", charge: 10, category: "Minor" },
  { symbol: "GBPNOK", charge: 10, category: "Minor" },
  { symbol: "GBPSEK", charge: 10, category: "Minor" },
  { symbol: "GBPSGD", charge: 10, category: "Minor" },
  { symbol: "GBPTRY", charge: 10, category: "Exotic" },
  { symbol: "NOKJPY", charge: 10, category: "Minor" },
  { symbol: "NOKSEK", charge: 10, category: "Minor" },
  { symbol: "SEKJPY", charge: 10, category: "Minor" },
  { symbol: "SGDJPY", charge: 10, category: "Minor" },
];

/* ---------------- COMPONENT ---------------- */

export default function SwapFreeChargesTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(true);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchCategory =
        activeTab === "All" || row.category === activeTab;
      const matchSearch = row.symbol
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeTab, search]);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

          {/* TABS */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative pb-1 transition
                  ${
                    activeTab === cat
                      ? "text-green-500"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* SEARCH + SKIN */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by Symbol"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  pl-10 pr-4 py-2.5 rounded-full border
                  text-sm w-56
                  shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-green-400
                "
              />
            </div>

            {/* Skin Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Table Skin</span>
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setDark(false)}
                  className={`w-6 h-6 rounded-full transition ${
                    !dark ? "bg-white shadow" : ""
                  }`}
                />
                <button
                  onClick={() => setDark(true)}
                  className={`w-6 h-6 rounded-full transition ${
                    dark ? "bg-black" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div
          className={`
            rounded-3xl border overflow-hidden
            ${dark ? "bg-black text-white" : "bg-white"}
            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          `}
        >
          {/* HEADER */}
          <div
            className={`
              grid grid-cols-2 px-6 py-4 text-sm font-semibold sticky top-0 z-10
              ${dark ? "bg-neutral-900" : "bg-gray-100"}
            `}
          >
            <span>SYMBOL</span>
            <span className="text-right">Charges (US$ per lot)</span>
          </div>

          {/* BODY */}
          <div className="max-h-[380px] overflow-y-auto">
            {filteredData.map((row, i) => (
              <div
                key={i}
                className={`
                  grid grid-cols-2 px-6 py-4 text-sm border-t transition
                  ${
                    dark
                      ? "border-neutral-800 hover:bg-neutral-900"
                      : "border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                <span className="font-medium tracking-wide">
                  {row.symbol}
                </span>
                <span className="text-right font-semibold">
                  {row.charge}
                </span>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="px-6 py-12 text-center text-sm text-gray-500">
                No results found
              </div>
            )}
          </div>
        </div>

        {/* FOOT NOTES */}
        <div className="mt-8 text-xs text-gray-600 space-y-2 max-w-4xl">
          <p>
            The holding fee will be charged every calendar day including weekends.
            Weekend holding fees will be charged the next business day.
          </p>
          <p>
            New positions will benefit from a 5-day grace period. During this
            time, no holding fees will be incurred.
          </p>
          <p className="font-medium">
            * IC Markets Global reserves the right to request additional
            documentation in order to offer swap-free privilege to an account.
          </p>
        </div>

      </div>
    </section>
  );
}
