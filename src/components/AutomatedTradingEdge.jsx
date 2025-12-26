import React from "react";

const AutomatedTradingEdge = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background gradient / abstract glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061d1a] via-black to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto lg:px-6 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT STATS */}
        <div className="space-y-16 lg:pr-30 py-16 lg:py-30">
          {/* Stat 1 */}
          <div>
            <h3 className="text-5xl text-center lg:text-right font-light text-white">
              US$2.05 Trillion
            </h3>
            <p className="mt-3 text-sm tracking-widest text-center lg:text-right uppercase text-green-500">
              Trading Volume – October 2025
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-5xl text-center lg:text-right font-light text-white">
              200,000+
            </h3>
            <p className="mt-3 text-sm tracking-widest text-center lg:text-right uppercase text-green-500">
              Active Clients Worldwide
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-5xl text-center lg:text-right font-light text-white">
              Excellent 4.8/5
            </h3>
            <p className="mt-3 text-sm tracking-widest text-center lg:text-right uppercase text-green-500">
              Rating on Trustpilot
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center bg-black p-5 lg:pl-10">
          <h2 className="text-4xl font-bold text-white leading-tight mb-8">
            Give your automated trading system the edge
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            KiteFX Global is the one of the top choices for automated traders.
            Our order matching engine located in the New York Equinix NY4 data
            centre processes over 3,600,000 trades per day with over two thirds
            of all trades coming from automated trading systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomatedTradingEdge;
