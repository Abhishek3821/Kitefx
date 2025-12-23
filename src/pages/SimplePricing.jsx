import AccountCards from "../components/Quick_3/AccountCards";
import CTraderTradingViewCommission from "../components/Quick_3/CTraderTradingViewCommission";
import RawSpreadCommissionTable from "../components/Quick_3/RawSpreadCommissionTable";
import SpreadsAccordion from "../components/Quick_3/SpreadsAccordion";
import SpreadsSection from "../components/Quick_3/SpreadsSection";

export default function Quickstart() {
  return (
    <div>
     <SpreadsSection/>
     <SpreadsAccordion/>
     <RawSpreadCommissionTable/>
     <CTraderTradingViewCommission/>
     <AccountCards/>

    </div>
  );
}