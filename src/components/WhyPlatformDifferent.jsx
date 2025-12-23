import React from "react";

const WhyPlatformDifferent = ({ title, sections = [] }) => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-14">{title}</h1>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-14 last:mb-0">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>

            {section.paragraphs.map((text, i) => (
              <p
                key={i}
                className={`text-gray-800 leading-relaxed text-md ${
                  i !== section.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPlatformDifferent;
