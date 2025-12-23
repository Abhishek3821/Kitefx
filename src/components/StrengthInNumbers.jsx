import React from "react";

const StrengthInNumbers = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#071f1c]" />
      <div className="absolute right-0 inset-y-0 w-1/2 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15),transparent_60%)] hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Our strength is in the numbers
          </h2>

          <p className="text-lg text-white/70 max-w-xl mb-12 leading-relaxed">
            IC Markets Global is one of the largest Forex CFD providers in the
            world by trading volume.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-lg text-lg font-bold transition">
              Start Trading
            </button>

            <button className="border-2 border-green-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-500 hover:text-black transition">
              Try a Free Demo
            </button>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="flex flex-col justify-center space-y-20 lg:pl-20 text-center lg:text-left">
          <div>
            <h3 className="text-5xl font-light text-white">3,600,000</h3>
            <p className="mt-3 text-sm tracking-widest uppercase text-green-500">
              Trades per day
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-light text-white">Equinix NY4</h3>
            <p className="mt-3 text-sm tracking-widest uppercase text-green-500">
              Trading hub at New York
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-light text-white">60%</h3>
            <p className="mt-3 text-sm tracking-widest uppercase text-green-500">
              Algo trades (% of all trades)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthInNumbers;
