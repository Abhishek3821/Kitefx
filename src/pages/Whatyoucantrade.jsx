import CommoditiesCFDBox from "../components/quick_2/CommoditiesCFDBox";
import ForexCFDBox from "../components/quick_2/ForexCFDBox";
import IndicesCFDBox from "../components/quick_2/IndicesCFDBox";
import StocksCFDBox from "../components/quick_2/StocksCFDBox";
import BondsCFDBox from "../components/quick_2/BondsCFDBox";
import CryptocurrencyCFDBox from "../components/quick_2/CryptocurrencyCFDBox";
import FuturesCFDBox from "../components/quick_2/FuturesCFDBox";
export default function Quickstart() {
  return (
    <div>
      <ForexCFDBox />
      <IndicesCFDBox />
      <CommoditiesCFDBox />
      <StocksCFDBox />
      <BondsCFDBox />
      <CryptocurrencyCFDBox/>
      <FuturesCFDBox/>
    </div>
  );
}