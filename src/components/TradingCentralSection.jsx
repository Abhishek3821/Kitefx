import { Check } from "lucide-react";
import Image from "../assets/kitefx30.webp";

const TradingCentralSection = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Image}
            alt="Trading Central Analytics Dashboard"
            className="w-full max-w-xl drop-shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <p className="text-green-500 font-semibold">
            What is Trading Central?
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Global research analytics at <br /> your fingertips
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">
              Preparation is half the battle!
            </span>{" "}
            Seize the advantage you deserve. Improve your trading experience
            with Trading Central&apos;s top notch indicators.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 pt-2">
            <li className="flex items-center gap-3 text-gray-800">
              <Check className="text-green-500" size={18} />
              <span>Award-winning analytics</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800">
              <Check className="text-green-500" size={18} />
              <span>Time your trades</span>
            </li>
            <li className="flex items-center gap-3 text-gray-800">
              <Check className="text-green-500" size={18} />
              <span>Manage your risk</span>
            </li>
          </ul>

          {/* CTA */}
          <div className="pt-4">
            <button className="bg-green-400 hover:bg-green-300 transition text-black font-semibold px-8 py-3 rounded-md">
              Join Now
            </button>
          </div>

          {/* DISCLAIMER */}
          <p className="text-xs text-gray-500 pt-4">
            All trading involves risk. It is possible to lose all your capital.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TradingCentralSection;
