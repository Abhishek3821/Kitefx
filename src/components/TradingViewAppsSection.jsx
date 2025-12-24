import { Check } from "lucide-react";
import Image from "../assets/kitefx33.webp";

const TradingViewAppsSection = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* GREEN GLOW BACKGROUND */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            TradingView desktop & <br /> mobile apps
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-lg">
            Trade on the go on your phone or enhance your experience with the
            powerful desktop terminal.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3 text-gray-800">
              <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-400">
                <Check className="text-black w-4 h-4" />
              </span>
              <span>
                <strong>100% synchronisation</strong> across your browser,
                mobile and desktop versions.
              </span>
            </li>

            <li className="flex items-start gap-3 text-gray-800">
              <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-400">
                <Check className="text-black w-4 h-4" />
              </span>
              <span>
                Get expanded workspace, multiple displays and more features in
                the terminal.
              </span>
            </li>
          </ul>

          {/* CTA */}
          <button className="mt-6 bg-green-400 hover:bg-green-300 transition text-black font-semibold px-8 py-3 rounded-md">
            Open Account
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={Image}
            alt="TradingView desktop and mobile apps"
            className="w-full max-w-xl drop-shadow-2xl"
          />

          {/* FLOATING TICKERS (OPTIONAL VISUAL MATCH) */}
          <div className="hidden md:block absolute top-8 left-0 bg-black text-white text-xs px-3 py-2 rounded-md shadow-lg">
            EUR USD <span className="text-green-400 ml-2">+0.15%</span>
          </div>

          <div className="hidden md:block absolute bottom-10 right-0 bg-black text-white text-xs px-3 py-2 rounded-md shadow-lg">
            XAU USD <span className="text-red-400 ml-2">-0.09%</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingViewAppsSection;
