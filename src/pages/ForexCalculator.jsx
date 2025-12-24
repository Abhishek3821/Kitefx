import React from "react";
import ForexCalculator1 from "../components/ForexCalculator1";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const ForexCalculator = () => {
  return (
    <div>
      <Banner
        title="Forex Trading Calculators"
        description="Forex trading calculators – Calculate current pip values in your account currency across IC Markets Global range of products."
        backgroundImage={assets.kitefx20}
      />
      <ForexCalculator1 />
    </div>
  );
};

export default ForexCalculator;
