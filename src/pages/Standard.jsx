import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import FastOrderExecutionSection from "../components/TrandingAcc/FastOrderExecutionSection";
import FlexibleFundingAndFeatures from "../components/TrandingAcc/FlexibleFundingAndFeatures";
import StandardAccountSection from "../components/TrandingAcc/StandardAccountSection";
import TradingRestrictionsAndMarketDepth from "../components/TrandingAcc/TradingRestrictionsAndMarketDepth";

export default function Standard() {
  return (
    <div>
      <Banner
        title="Standard Account"
        description="Keep it simple with the IC Markets Global Standard account. Experience all the benefits of our Raw pricing  with an all-inclusive spread and no commissions."
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <StandardAccountSection />
      <FastOrderExecutionSection />
      <TradingRestrictionsAndMarketDepth />
      <FlexibleFundingAndFeatures />
    </div>
  );
}
