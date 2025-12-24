import CommoditiesCFDBox from "../components/quick_2/CommoditiesCFDBox";
import ForexCFDBox from "../components/quick_2/ForexCFDBox";
import IndicesCFDBox from "../components/quick_2/IndicesCFDBox";
import StocksCFDBox from "../components/quick_2/StocksCFDBox";
import BondsCFDBox from "../components/quick_2/BondsCFDBox";
import CryptocurrencyCFDBox from "../components/quick_2/CryptocurrencyCFDBox";
import FuturesCFDBox from "../components/quick_2/FuturesCFDBox";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
export default function Quickstart() {
  return (
    <div>
      <Banner
        title="Range of Products"
        description="IC Markets Global's carefully selected range of products gives you access to the most popular and liquid markets across the world for the best trading opportunities 24/7."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx21}
      />
      <ForexCFDBox />
      <IndicesCFDBox />
      <CommoditiesCFDBox />
      <StocksCFDBox />
      <BondsCFDBox />
      <CryptocurrencyCFDBox />
      <FuturesCFDBox />
    </div>
  );
}
