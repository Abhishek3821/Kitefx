import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import StockCFDTradingSection from "../components/StockCFDTradingSection";
import StocksTradingExample from "../components/StocksTradingExample";
import StocksFactsSection from "../components/StocksFactsSection";
import USStockTradingInfo from "../components/USStockTradingInfo";
import ASXTradingInformation from "../components/ASXTradingInformation";

export default function StocksCFDs() {
  return (
    <div>
      <Banner
        title="Stocks CFDs"
        description="The KiteFX  Global Digital Currencies offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <StocksFactsSection />
      <StockCFDTradingSection />
      <StocksTradingExample />
      <USStockTradingInfo />
      <ASXTradingInformation />
    </div>
  );
}
