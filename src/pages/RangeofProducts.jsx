import ForexCFDCard from "../components/TrandingAcc/RamgeProduct/ForexCFDCard";
import IndicesCFDCard from "../components/TrandingAcc/RamgeProduct/IndicesCFDCard";
import CommoditiesCFDCard from "../components/TrandingAcc/RamgeProduct/CommoditiesCFDCard";
import StocksCFDCard from "../components/TrandingAcc/RamgeProduct/StocksCFDCard";
import BondsCFDCard from "../components/TrandingAcc/RamgeProduct/BondsCFDCard";
import CryptocurrencyCFD from "../components/TrandingAcc/RamgeProduct/CryptocurrencyCFD";
import FuturesCFD from "../components/TrandingAcc/RamgeProduct/FuturesCFD";


export default function RangeProducts() {
  return (
    <div>
       <ForexCFDCard/>
       <IndicesCFDCard/>
       <CommoditiesCFDCard/>
       <StocksCFDCard/>
       <BondsCFDCard/>
       <CryptocurrencyCFD/>
       <FuturesCFD/>
    </div>
  );
}