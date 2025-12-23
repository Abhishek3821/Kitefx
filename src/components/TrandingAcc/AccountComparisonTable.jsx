import { Check } from "lucide-react";

/* ---------------- DATA ---------------- */

const accounts = [
  {
    name: "Raw Pro +",
    platform: "MetaTrader",
    commission: "$2.0 ($4.0 per lot round turn)",
    deposit: "$10,000",
    spreads: "0.0",
    leverage: "1:1000",
    maxOrders: "2000",
    server: "New York",
    instruments: "72",
    suitable: "Discretionary Traders",
    cta: "Get early access",
    highlight: false,
  },
  {
    name: "Raw Pro",
    platform: "MetaTrader",
    commission: "$3.0 ($6.0 per lot round turn)",
    deposit: "$5,000",
    spreads: "0.0",
    leverage: "1:1000",
    maxOrders: "2000",
    server: "New York",
    instruments: "72",
    suitable: "Discretionary Traders",
    cta: "Get early access",
    highlight: false,
  },
  {
    name: "Raw Spread",
    platform: "MetaTrader",
    commission: "$3.5 ($7.0 per lot round turn)",
    deposit: "$0",
    spreads: "0.0",
    leverage: "1:1000",
    maxOrders: "200",
    server: "New York",
    instruments: "2250",
    suitable: "EAs & Scalpers",
    cta: "Start trading",
    highlight: true,
  },
  {
    name: "cTrader",
    platform: "cTrader, TradingView",
    commission: "$3.0 (per USD 100k)",
    deposit: "$0",
    spreads: "0.0",
    leverage: "1:1000",
    maxOrders: "2000",
    server: "London",
    instruments: "121",
    suitable: "Day Traders & Scalpers",
    cta: "Start trading",
    highlight: false,
  },
];

const features = [
  "Trading Platform",
  "Commission",
  "Minimum Deposit",
  "Spreads from (pips)",
  "Leverage",
  "Maximum number of position orders per account",
  "Server Location",
  "Micro Lot Trading (0.01)",
  "Tradable instruments",
  "Index CFD Trading",
  "Stop Out Level",
  "One Click Trading",
  "Swap Free Accounts",
  "Trading Styles Allowed",
  "Order Distance Restriction",
  "Programming Language",
  "Suitable For",
];

/* ---------------- COMPONENT ---------------- */

export default function AccountComparisonTable() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* -------- TOP CONTENT (SCREENSHOT PART) -------- */}
        <div className="mb-10 max-w-7xl">
          <p className="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-3">
            Compare Account Features
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Why Choose Our Raw Spread Account?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our Raw Spread account offers some of the lowest possible spreads
            available. Our average EUR/USD spread is 0.1 pips, with only a small
            commission of $3.50 per lot payable per side. With aggregated
            sources of pricing from up to 25 institutional-grade sources, IC
            Markets Global Raw Spread account was built for day traders,
            scalpers and expert advisors.
            <br /><br />
            Our MetaTrader 4 and 5 servers are located in the Equinix NY4 data
            center in New York, bringing you closer to our bridge and
            eliminating unnecessary latency. IC Markets Global MetaTrader 4
            and 5 platforms are the preferred choice for active day traders
            and scalpers globally.
          </p>
        </div>

        {/* -------- TABLE -------- */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] rounded-2xl border bg-white shadow-sm">

            {/* HEADER */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)]">
              <div />
              {accounts.map((acc, i) => (
                <div
                  key={i}
                  className="p-4 text-center font-bold bg-green-400 text-gray-800"
                >
                  <p className="text-xs uppercase opacity-80">Account</p>
                  <p className="text-lg">{acc.name}</p>
                </div>
              ))}
            </div>

            {/* BODY */}
            {features.map((feature, i) => (
              <div
                key={i}
                className="grid grid-cols-[260px_repeat(4,1fr)] border-t text-sm"
              >
                <div className="p-4 font-medium bg-gray-50">
                  {feature}
                </div>

                {accounts.map((acc, j) => (
                  <div
                    key={j}
                    className={`p-4 text-center transition
                    ${acc.highlight ? "bg-green-50" : "hover:bg-gray-50"}
                    `}
                  >
                    {renderValue(feature, acc)}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA ROW */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)] border-t">
              <div />
              {accounts.map((acc, i) => (
                <div key={i} className="p-6 text-center">
                  <button className="px-6 py-2 rounded-md bg-green-100 text-green-700 font-medium hover:bg-green-200 transition">
                    {acc.cta}
                  </button>

                  {acc.highlight && (
                    <p className="mt-2 text-xs text-green-600">
                      TRY FREE DEMO
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */

function renderValue(feature, acc) {
  const check = <Check className="mx-auto text-green-500" size={18} />;

  const map = {
    "Trading Platform": acc.platform,
    Commission: acc.commission,
    "Minimum Deposit": acc.deposit,
    "Spreads from (pips)": acc.spreads,
    Leverage: acc.leverage,
    "Maximum number of position orders per account": acc.maxOrders,
    "Server Location": acc.server,
    "Micro Lot Trading (0.01)": check,
    "Tradable instruments": acc.instruments,
    "Index CFD Trading": check,
    "Stop Out Level": "50%",
    "One Click Trading": check,
    "Swap Free Accounts": check,
    "Trading Styles Allowed": "All",
    "Order Distance Restriction": "None",
    "Programming Language": "MQL5 & MQL4",
    "Suitable For": acc.suitable,
  };

  return map[feature];
}
