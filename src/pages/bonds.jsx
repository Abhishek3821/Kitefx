
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import BondFactsSection from "../components/BondsFactsSection";
import BondsTradingSection from "../components/BondsTradingSection";
import BondsTradingExample from "../components/BondsTradingExample";
import UpcomingExpiringFutures from "../components/UpcomingExpiringFutures";

export default function Bonds() {
  return (
    <div>
      <Banner
        title="Bonds"
        description="Trade the world’s most popular and liquid fixed income securities from the United States, the UK, Europe and Japan on MetaTrader 4 and 5."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <BondFactsSection />

      <BondsTradingSection />

      <BondsTradingExample />

      <UpcomingExpiringFutures />
    </div>
  );
}
