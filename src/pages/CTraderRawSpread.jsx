import { motion } from "framer-motion";
import CTraderRawSpreadSection from "../components/TrandingAcc/CTraderRawSpreadSection.jsx";
import CTraderExecutionFeatures from "../components/TrandingAcc/CTraderExecutionFeatures.jsx";


export default function CTrader() {
  return (
    <div>
      <CTraderRawSpreadSection />
      <CTraderExecutionFeatures />
    </div>
  );
}