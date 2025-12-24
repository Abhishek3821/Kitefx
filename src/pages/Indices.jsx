
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import IndicesFactsSection from "../components/IndicesFactsSection";
import EquityIndicesSection from "../components/EquityIndicesSection";
import DividendEntitlementSection from "../components/DividendEntitlementSection";
import IndicesTradingExample from "../components/IndicesTradingExample";

export default function Indices() {
  return (
    <div>
      <Banner
        title="Indices"
        description="The IC Markets Global Indices offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <IndicesFactsSection />
      <EquityIndicesSection />
      <DividendEntitlementSection />
      <IndicesTradingExample />
    </div>
  );
}
