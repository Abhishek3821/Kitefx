import React from "react";

const cards = [
  {
    pair: "EURUSD",
    change: "-0.09%",
    changeType: "down",
    bid: "1.1703",
    ask: "1.1703",
    spread: "0.0",
    color: "red",
  },
  {
    pair: "AUDUSD",
    change: "+0.08%",
    changeType: "up",
    bid: "0.66053",
    ask: "0.66054",
    spread: "0.1",
    color: "green",
  },
  {
    pair: "GBPUSD",
    change: "-0.06%",
    changeType: "down",
    bid: "1.33718",
    ask: "1.33719",
    spread: "0.1",
    color: "red",
  },
  {
    pair: "XAUUSD",
    change: "-0.16%",
    changeType: "down",
    bid: "4325.83",
    ask: "4325.91",
    spread: "0.8",
    color: "red",
  },
];

const RawSpreadSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-black via-[#071f1c] to-black text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT – Trading Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-black/60 backdrop-blur-md border border-white/10 p-4 shadow-lg"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold tracking-wide">{card.pair}</span>
                <span
                  className={`text-sm flex items-center gap-1 ${
                    card.changeType === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {card.change}
                </span>
              </div>

              {/* Prices */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-white/60">Bid</p>
                  <p
                    className={`text-2xl font-mono ${
                      card.color === "green" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {card.bid}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/60">Ask</p>
                  <p
                    className={`text-2xl font-mono ${
                      card.color === "green" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {card.ask}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  Spread <strong>{card.spread}</strong>
                </span>

                <div className="flex gap-2">
                  <button className="px-4 py-1 rounded-full bg-green-500 text-black font-bold text-sm hover:scale-105 transition">
                    BUY
                  </button>
                  <button className="px-4 py-1 rounded-full bg-red-500 text-black font-bold text-sm hover:scale-105 transition">
                    SELL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Raw Spread <br /> Advantage
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-xl">
            Raw Spreads are the difference you have been waiting for. Trade with
            spreads from 0.0 pips, no requotes, best possible prices and no
            restrictions. KiteFX Global is the multi-asset trading platform of
            choice for high volume traders, scalpers and robots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-500 text-black font-bold px-8 py-4 rounded-lg hover:scale-105 transition">
              Start Trading
            </button>
            <button className="border border-green-400 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-500 hover:text-black transition">
              Try a Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RawSpreadSection;
