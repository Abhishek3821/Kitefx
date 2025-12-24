import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import ForexSwapRate from "../components/ForexSwapRate";
import SwapRatesInfo from "../components/SwapRatesInfo";

const SwapRates = () => {
  return (
    <div>
      <Banner
        title="Swap Rates"
        description="IC Markets Global swap rates are amongst the most competitive in the world. Maximise your overnight swap earnings or reduce your swap costs across our wide range of products."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <ForexSwapRate />
      <SwapRatesInfo />
    </div>
  );
};

export default SwapRates;
