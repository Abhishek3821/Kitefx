import React from "react";

const PlatformStepsSection = ({
  backgroundImage,
  title,
  description,
  steps = [],
  ctaText,
  onCtaClick,
}) => {
  return (
    <section
      className="relative overflow-hidden bg-black py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>

        {description && (
          <p className="text-gray-400 max-w-5xl mx-auto mb-14 text-lg">
            {description}
          </p>
        )}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {steps.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 backdrop-blur-sm bg-black/40 hover:border-green-500 transition"
            >
              <span className="text-sm text-gray-400 block mb-2">
                {item.step}
              </span>
              <p className="text-white text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="mt-6">
            <button
              onClick={onCtaClick}
              className="px-10 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformStepsSection;
