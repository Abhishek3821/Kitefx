import FastOrderExecutionSection from "../components/TrandingAcc/FastOrderExecutionSection";
import FlexibleFundingAndFeatures from "../components/TrandingAcc/FlexibleFundingAndFeatures";
import StandardAccountSection from "../components/TrandingAcc/StandardAccountSection";
import TradingRestrictionsAndMarketDepth from "../components/TrandingAcc/TradingRestrictionsAndMarketDepth";


export default function Standard() {
  return (
    <div>
        <StandardAccountSection/>
        <FastOrderExecutionSection/>
        <TradingRestrictionsAndMarketDepth/>
        <FlexibleFundingAndFeatures/>
    </div>
  );
}