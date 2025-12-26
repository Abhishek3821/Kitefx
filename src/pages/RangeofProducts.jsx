import ForexCFDCard from "../components/TrandingAcc/RamgeProduct/ForexCFDCard";
import IndicesCFDCard from "../components/TrandingAcc/RamgeProduct/IndicesCFDCard";
import CommoditiesCFDCard from "../components/TrandingAcc/RamgeProduct/CommoditiesCFDCard";
import StocksCFDCard from "../components/TrandingAcc/RamgeProduct/StocksCFDCard";
import BondsCFDCard from "../components/TrandingAcc/RamgeProduct/BondsCFDCard";
import CryptocurrencyCFD from "../components/TrandingAcc/RamgeProduct/CryptocurrencyCFD";
import FuturesCFD from "../components/TrandingAcc/RamgeProduct/FuturesCFD";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

export default function RangeProducts() {
  return (
    <div>
      <Banner
        title="Range of Products"
        description="KiteFX Global's carefully selected range of products gives you access to the most popular and liquid markets across the world for the best trading opportunities 24/7."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <ForexCFDCard />
      <IndicesCFDCard />
      <CommoditiesCFDCard />
      <StocksCFDCard />
      <BondsCFDCard />
      <CryptocurrencyCFD />
      <FuturesCFD />
    </div>
  );
}
