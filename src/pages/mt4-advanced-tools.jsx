import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import AdvancedTradingToolsSection from "../components/AdvancedTradingToolsSection";
import TradingToolsGrid from "../components/TradingToolsGrid";

export default function TradingServers() {
  return (
    <div>
      <Banner
        title="Advanced Trading Tools"
        description="With the help of Advanced Trading Tools, the world's best trading platform is now even better, providing our traders with a competitive edge"
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
        <AdvancedTradingToolsSection />
        <TradingToolsGrid />

    </div>
  );
}
