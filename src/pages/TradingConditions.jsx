import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import TradingFeatures1 from "../components/TradingFeatures1";

const TradingConditions = () => {
  return (
    <div>
      <Banner
        title="Trading Conditions "
        description="The KiteFX Global Trading environment offers the most aggressive pricing and flexible trading conditions globally. They are ideal for traders who demand the best execution quality and lowest spreads. "
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <TradingFeatures1 />
    </div>
  );
};

export default TradingConditions;
