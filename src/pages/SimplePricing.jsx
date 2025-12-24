import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import AccountCards from "../components/Quick_3/AccountCards";
import CTraderTradingViewCommission from "../components/Quick_3/CTraderTradingViewCommission";
import RawSpreadCommissionTable from "../components/Quick_3/RawSpreadCommissionTable";
import SpreadsAccordion from "../components/Quick_3/SpreadsAccordion";
import SpreadsSection from "../components/Quick_3/SpreadsSection";

export default function Quickstart() {
  return (
    <div>
      <Banner
        title="Spreads"
        description="IC Markets Global's spreads are among the lowest across all major and minor currency pairs. In particular, our average EUR/USD spread* of 0.1 pips is one of the lowest in the world."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx22}
      />
      <SpreadsSection />
      <SpreadsAccordion />
      <RawSpreadCommissionTable />
      <CTraderTradingViewCommission />
      <AccountCards />
    </div>
  );
}
