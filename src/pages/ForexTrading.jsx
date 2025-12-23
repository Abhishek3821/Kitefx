import ForexAccountTypes from "../components/Quick_4/ForexAccountTypes";
import ForexCFDTrading from "../components/Quick_4/ForexCFDTrading";
import ForexDemoAccounts from "../components/Quick_4/ForexDemoAccounts";



export default function Quickstart() {
  return (
    <div>
      <ForexAccountTypes/>
      <ForexDemoAccounts/>
      <ForexCFDTrading/>
    </div>
  );
}