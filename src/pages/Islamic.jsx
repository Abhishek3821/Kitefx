import IslamicAccountSection from "../components/TrandingAcc/IslamicAccountSection";
import OvernightFinancingCharges from "../components/TrandingAcc/OvernightFinancingCharges";
import SwapFreeChargesTable from "./SwapFreeChargesTable";



export default function Islamic() {
  return (
    <div>
      <IslamicAccountSection />
      <OvernightFinancingCharges />
      <SwapFreeChargesTable />  
    </div>
  );
}