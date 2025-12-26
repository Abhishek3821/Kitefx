import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import CommoditiesFactsSection from "../components/CommoditiesFactsSection";
import CommoditiesOverview from "../components/CommoditiesOverview";
import CFDCommoditiesSection from "../components/CFDCommoditiesSection";
import CommodityTradingExample from "../components/CommodityTradingExample";

export default function Commodities() {
  return (
    <div>
      <Banner
        title="Commodities CFDs"
        description="The KiteFX Global Commodities offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <CommoditiesFactsSection />
      <CommoditiesOverview />
      <CFDCommoditiesSection />
      <CommodityTradingExample />
    </div>
  );
}
