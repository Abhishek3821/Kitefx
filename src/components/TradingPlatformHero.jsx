import React from "react";

const TradingPlatformHero = ({
  title,
  description,
  ctaText,
  onCtaClick,
  systemRequirements,
  mainImage,
}) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            {ctaText && (
              <button
                onClick={onCtaClick}
                className="bg-green-500 hover:bg-green-600 transition text-black font-semibold px-10 py-3 rounded-lg mb-6"
              >
                {ctaText}
              </button>
            )}

            {systemRequirements && (
              <p className="text-sm text-gray-500 max-w-xl">
                <span className="font-semibold text-gray-700">
                  System Requirements
                </span>{" "}
                {systemRequirements}
              </p>
            )}
          </div>

          {/* RIGHT IMAGE STACK */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image */}
            {mainImage && (
              <img
                src={mainImage}
                alt="Trading Platform"
                className="relative z-10 max-w-full "
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatformHero;
