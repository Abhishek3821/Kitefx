import React from "react";

const AboutPlatform = ({
  eyebrow,
  title,
  description,
  points = [],
  ctaLabel,
  onCtaClick,
  image,
  reverse = false,
}) => {
  return (
    <section className="w-full bg-black py-24 px-6">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE SIDE */}
        <div className="relative">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full max-w-xl mx-auto object-contain"
            />
          )}
        </div>

        {/* CONTENT SIDE */}
        <div className="text-white">
          {eyebrow && (
            <p className="text-green-400 font-semibold mb-3 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* POINTS */}
          <ul className="space-y-4 mb-10">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="mt-1 w-6 h-6 rounded-full bg-green-400 text-black flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-white/90 text-base">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          {ctaLabel && (
            <button
              onClick={onCtaClick}
              className="bg-green-400 hover:bg-green-500 transition text-black font-semibold text-lg px-10 py-4 rounded-lg shadow-lg"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
