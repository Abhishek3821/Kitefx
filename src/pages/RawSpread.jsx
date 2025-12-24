import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import ExecutionAndPricingDetails from "../components/TrandingAcc/ExecutionAndPricingDetails";
import RawPricingSection from "../components/TrandingAcc/RawPricingSection";
import RawSpreadFeature from "../components/TrandingAcc/RawSpreadFeature";

export default function YourAccount() {
  return (
    <div>
      <Banner
        title="Raw Spread Account"
        description="Give yourself the Raw Spread advantage on one of the world’s most popular trading platforms with our proprietary bridge aggregator blending select tier-1 pricing providers"
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <RawSpreadFeature />
      <RawPricingSection />
      <ExecutionAndPricingDetails />
    </div>
  );
}
