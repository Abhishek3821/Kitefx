import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import CryptoCFDFactsSection from "../components/CryptoCFDFactsSection";
import CryptoCFDsGrid from "../components/CryptoCFDsGrid";
import HowCryptoCFDWorks from "../components/HowCryptoCFDWorks";
import BitcoinCFDTradingExample from "../components/BitcoinCFDTradingExample";

export default function DigitalCurrencies() {
  return (
    <div>
      <Banner
        title="Digital Currencies "
        description="The KiteFX  Global Digital Currencies offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips. "
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <CryptoCFDFactsSection />
      <CryptoCFDsGrid />
      <HowCryptoCFDWorks />
      <BitcoinCFDTradingExample />
    </div>
  );
}
