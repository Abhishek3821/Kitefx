import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TABS = ["All-in-One", "Margin", "Pip Value", "Swap"];

const ForexCalculator1 = () => {
  const [tab, setTab] = useState("All-in-One");

  const [pair, setPair] = useState("EUR/USD");
  const [currency, setCurrency] = useState("USD");
  const [leverage, setLeverage] = useState(1000);
  const [positionSize, setPositionSize] = useState(10000);

  const [result, setResult] = useState({
    margin: 0,
    pip: 0,
    commission: 0,
    swapLong: 0,
    swapShort: 0,
  });

  useEffect(() => {
    if (!positionSize || positionSize <= 0) return;

    const pipValue = (positionSize * 0.0001).toFixed(2);
    const margin = (positionSize / leverage).toFixed(2);
    const commission = ((positionSize / 100000) * 7).toFixed(2);

    setResult({
      pip: pipValue,
      margin,
      commission,
      swapLong: (-0.85 * (positionSize / 10000)).toFixed(2),
      swapShort: (0.27 * (positionSize / 10000)).toFixed(2),
    });
  }, [pair, leverage, positionSize]);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-10">Forex Calculators</h1>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          {/* TABS */}
          <div className="flex flex-wrap gap-4 mb-10 border-b pb-4">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-2 font-medium transition ${
                  tab === t
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Select
              label="Currency Pair"
              value={pair}
              onChange={setPair}
              options={["EUR/USD", "GBP/USD", "USD/JPY"]}
            />

            <Select
              label="Account Currency"
              value={currency}
              onChange={setCurrency}
              options={["USD", "EUR", "GBP"]}
            />

            <Select
              label="Leverage"
              value={`1:${leverage}`}
              onChange={(v) => setLeverage(Number(v.split(":")[1]))}
              options={["1:100", "1:500", "1:1000"]}
            />

            <Input
              label="Position Size"
              value={positionSize}
              onChange={(e) => setPositionSize(Number(e.target.value))}
              placeholder="e.g. 10000"
            />
          </div>

          {/* RESULTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          >
            {(tab === "All-in-One" || tab === "Margin") && (
              <Result label="Required Margin (USD)" value={result.margin} />
            )}

            {(tab === "All-in-One" || tab === "Pip Value") && (
              <Result label="Pip Value (USD)" value={result.pip} />
            )}

            {tab === "All-in-One" && (
              <Result
                label="cTrader Commission (USD)"
                value={result.commission}
              />
            )}
          </motion.div>

          {(tab === "All-in-One" || tab === "Swap") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Result label="Swap Long (USD)" value={result.swapLong} />
              <Result label="Swap Short (USD)" value={result.swapShort} />
            </motion.div>
          )}

          {/* DISCLAIMER */}
          <p className="text-xs text-gray-500 mt-8">
            Calculations are indicative only and may vary based on market
            conditions and pricing providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForexCalculator1;

/* ---------------- UI COMPONENTS ---------------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-medium mb-2 block">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
    />
  </div>
);

const Select = ({ label, value, onChange, options }) => (
  <div>
    <label className="text-sm font-medium mb-2 block">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const Result = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-6 text-center">
    <p className="text-sm text-gray-600 mb-1">{label}</p>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);
