import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import TradingHours1 from "../components/TradingHours1";
import TradingHours2 from "../components/TradingHours2";

const TradingHours = () => {
  return (
    <div>
      <Banner
        title="Trading Hours"
        description="At IC Markets Global there’s always a market for you to trade. Our dedicated specialists are available for you 24 hours a day, 5 days a week."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <TradingHours1 />
      <TradingHours2 />
    </div>
  );
};

export default TradingHours;
