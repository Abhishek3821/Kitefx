import React from "react";

const PlatformWebSection = ({
  image,
  imageAlt = "Trading Platform",
  title,
  description,
  descriptionSecondary,
  ctaText,
  onCtaClick,
  systemRequirements,
  features = [],
}) => {
  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          {image && (
            <div className="flex justify-center lg:justify-start">
              <img
                src={image}
                alt={imageAlt}
                className="w-full max-w-xl object-contain"
              />
            </div>
          )}

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">{title}</h1>

            {description && (
              <p className="text-gray-700 text-md leading-relaxed mb-6">
                {description}
              </p>
            )}

            {descriptionSecondary && (
              <p className="text-gray-700 text-md leading-relaxed mb-10">
                {descriptionSecondary}
              </p>
            )}

            {ctaText && (
              <button
                onClick={onCtaClick}
                className="bg-green-400 hover:bg-green-500 transition text-black font-semibold text-lg px-10 py-3 rounded-lg mb-4"
              >
                {ctaText}
              </button>
            )}

            {systemRequirements && (
              <p className="text-md text-gray-600 mt-4">
                <span className="font-semibold">System Requirements</span>{" "}
                {systemRequirements}
              </p>
            )}
          </div>
        </div>

        {/* FEATURES */}
        {features.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-14 text-center">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-lg">
                  {item.icon}
                </div>
                <p className="text-md font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformWebSection;
