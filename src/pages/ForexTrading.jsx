import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import ForexAccountTypes from "../components/Quick_4/ForexAccountTypes";
import ForexCFDTrading from "../components/Quick_4/ForexCFDTrading";
import ForexDemoAccounts from "../components/Quick_4/ForexDemoAccounts";

export default function Quickstart() {
  return (
    <div>
      <Banner
        title="Forex Trading "
        description="KiteFX Global's carefully selected range of products, platforms, and account types give you access to the most popular and liquid markets across the world, for the best trading opportunities 24/7"
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <ForexAccountTypes />
      <ForexDemoAccounts />
      <ForexCFDTrading />
    </div>
  );
}
