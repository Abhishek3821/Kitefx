import React from "react";

const TwoColumnInfo = ({
  backgroundColor = "#F3F3F3",
  leftTitle,
  leftText,
  rightTitle,
  rightText,
}) => {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">{leftTitle}</h2>
            <p className="text-md text-gray-800 leading-relaxed">{leftText}</p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">{rightTitle}</h2>
            <p className="text-md text-gray-800 leading-relaxed">{rightText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnInfo;
