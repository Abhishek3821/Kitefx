import React from "react";
import { assets } from "../assets/assets";

const Banner = ({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section
      className="relative w-full bg-black overflow-hidden pt-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Subtle chart ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* Right glow */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>

        <p className="text-white/70 max-w-3xl mx-auto text-lg mb-12 leading-relaxed">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-green-500 hover:bg-green-600 transition text-black font-semibold text-lg px-12 py-3 rounded-lg shadow-lg"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
