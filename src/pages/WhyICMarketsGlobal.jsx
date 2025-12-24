import TradingFeatures from "../components/TradingFeatures";
import UltimateTradingConditions from "../components/UltimateTradingConditions";
import CustomerServiceAndTrust from "../components/CustomerServiceAndTrust";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

export default function Quickstart() {
  return (
    <div>
      <Banner
        title="Why Choose IC Markets Global"
        description="IC Markets Global has grown to become one of the largest MetaTrader 4 Forex CFD providers in the world by giving traders what they really want."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <TradingFeatures />
      <UltimateTradingConditions />
      <CustomerServiceAndTrust />
    </div>
  );
}
