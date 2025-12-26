import Image1 from "../assets/kitefx29.webp";
import Image from "../assets/kitefx28.webp";

const PoweredByTipRanks = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={Image1} alt="TipRanks" className="h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powered By TipRanks
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            KiteFX Insights is powered by TipRanks, a comprehensive research and
            analysis platform. TipRanks consolidates data from diverse sources
            to provide crucial information such as analyst ratings, price
            targets, and news sentiment. It equips investors with actionable
            information, empowering them to refine their strategies and
            data-driven investment decisions.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          {/* MAIN IMAGE */}
          <img
            src={Image}
            alt="TipRanks dashboard"
            className="w-full max-w-xl rounded-2xl shadow-lg"
          />

          {/* OVERLAY IMAGE */}
          <img
            src={Image}
            alt="TipRanks insights"
            className="absolute bottom-[-40px] left-[-40px] w-72 rounded-2xl shadow-lg hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default PoweredByTipRanks;
