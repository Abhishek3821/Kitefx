import React from "react";
import { assets } from "../assets/assets";

const InstantAccountCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.kitefx9})` }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Instant account opening &amp; funding
        </h2>

        <p className="text-xl text-white mb-12">Trade within minutes!</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-[#36F936] hover:bg-[#36F936] text-black px-10 py-3 rounded-lg text-lg font-semibold transition">
            Get Started
          </button>

          <button className="border-2 border-[#36F936] text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-[#36F936] hover:text-black transition">
            Try a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstantAccountCTA;
