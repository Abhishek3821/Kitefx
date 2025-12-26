import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import FuturesFactsSection from "../components/FuturesFactsSection";
import FuturesCFDExample from "../components/FuturesCFDExample";
import UpcomingExpiringMarkets from "../components/UpcomingExpiringMarkets";
import CommoditiesExpiryTable from "../components/CommoditiesExpiryTable";

export default function FuturesCFDs() {
  return (
    <div>
      <Banner
        title="Futures CFDs "
        description="The KiteFX  Global Digital Currencies offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips. "
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <FuturesFactsSection />
      <FuturesCFDExample />
      <UpcomingExpiringMarkets />
      <CommoditiesExpiryTable />
    </div>
  );
}
