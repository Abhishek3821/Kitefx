import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import EquinixInfoSection from "../components/EquinixInfoSection";

export default function TradingServers() {
  return (
    <div>
      <Banner
        title="Trading Servers"
        description="KiteFX Global trading infrastructure is collocated in the Equinix NY4 Data Centre with our prices and technology partners to give you  best execution and the low latency pricing possible."
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />

      <EquinixInfoSection />
    </div>
  );
}
