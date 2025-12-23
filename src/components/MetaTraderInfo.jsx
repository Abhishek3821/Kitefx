import React from "react";

const MetaTraderInfo = ({
  title,
  paragraphs = [],
  ctaText = "Open Account",
  onCtaClick,
  systemRequirements,
}) => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
          {title}
        </h1>

        {/* Paragraphs */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* CTA */}
        {ctaText && (
          <div className="mt-12">
            <button
              onClick={onCtaClick}
              className="bg-green-500 hover:bg-green-600 transition text-black font-semibold text-lg px-10 py-4 rounded-lg"
            >
              {ctaText}
            </button>
          </div>
        )}

        {/* System Requirements */}
        {systemRequirements && (
          <p className="mt-10 text-md text-gray-600">
            <span className="font-semibold">System Requirements </span>
            {systemRequirements}
          </p>
        )}
      </div>
    </section>
  );
};

export default MetaTraderInfo;
