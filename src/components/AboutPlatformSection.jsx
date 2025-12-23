import React from "react";

const AboutPlatformSection = ({
  badgeText,
  title,
  description,
  features = [],
  ctaText,
  onCtaClick,
  image,
  imageAlt = "Platform image",
}) => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {badgeText && (
            <span className="text-green-400 font-semibold uppercase tracking-wide">
              {badgeText}
            </span>
          )}

          <h2 className="text-4xl font-bold text-white mt-4 mb-6">{title}</h2>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-4 mb-10">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-6 h-6 mt-1 rounded-full bg-green-400 text-black flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {ctaText && (
            <button
              onClick={onCtaClick}
              className="bg-green-400 hover:bg-green-500 transition text-black font-semibold px-10 py-4 rounded-lg text-lg"
            >
              {ctaText}
            </button>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={image}
              alt={imageAlt}
              className="max-w-xl w-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPlatformSection;
