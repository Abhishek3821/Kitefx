import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Check } from "lucide-react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

/* ---------------- CORE VALUES ---------------- */

const coreValues = [
  "Integrity and Trust",
  "Honesty and Fairness",
  "Transparency",
  "Commitments and Responsibility",
  "Reliability",
  "Flexibility",
  "Constant Innovation",
  "Strong Corporate Governance",
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const AboutUs = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className=" bg-white overflow-hidden">
      <Banner
        title="About Us"
        description="KiteFX  Global is a regulated Forex CFD Provider. KiteFX Global fills to the gap between retail and institutional traders, making the world more tradable for everyone."
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 my-20">
        {/* LEFT CONTENT */}
        <motion.div
          className="lg:col-span-2 space-y-12 text-gray-800 leading-relaxed"
          variants={stagger}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          {/* ABOUT TEXT */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p>
              KiteFX Global is one of the most renowned Forex CFD provider,
              offering trading solutions for active day traders and scalpers as
              well as traders that are new to the forex market. KiteFX Global
              offers its clients cutting edge trading platforms, low latency
              connectivity and superior liquidity.
            </p>

            <p>
              KiteFX Global is revolutionizing online forex trading. Traders are
              now able to gain access to pricing previously only available to
              investment banks and high net worth individuals.
            </p>

            <p>
              Our management team have significant experience in the Forex, CFD
              and Equity markets in Asia, Europe and North America. It is this
              experience that has enabled us to select the best possible
              technology solutions and hand pick some of the best pricing
              providers available in the market.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-2">
              When was KiteFX Global Founded?
            </h3>
            <p>
              KiteFX Global was incorporated by a team of professionals in the
              financial services industry who were instrumental in the success
              of one of largest regulated CFD provider.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-2">
              Why was KiteFX Global Founded?
            </h3>
            <p>
              KiteFX Global sought to bridge the gap between retail and
              institutional clients offering a trading solution previously only
              available to Investment banks and high net worth individuals.
            </p>
            <p className="mt-4">
              KiteFX Global Raw Spread Connectivity was born, providing superior
              execution technology, lower spreads and unrivalled liquidity.
            </p>
            <p className="mt-4">
              KiteFX Global is dedicated to innovation, constant improvement and
              utilising cutting edge technology previously unavailable.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
            <p>
              KiteFX Global mission is to create the best and most transparent
              trading experience for retail and institutional clients alike
              allowing traders to focus more on their trading. Built by traders
              for traders KiteFX Global is dedicated to offering superior
              spreads, execution and service.
            </p>
          </motion.div>

          {/* CORE VALUES */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-6">Core Values</h2>
            <ul className="space-y-4">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* REGULATORY */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-4">
              Regulatory Compliance
            </h2>
            <p>
              KiteFX Global acknowledges the importance of compliance with all
              relevant laws, rules, regulations, policies and standards. IC
              Markets Global is committed to having strict management discipline
              and first-class controls in our compliance environment.
            </p>
            <p className="mt-4">
              KiteFX Global holds client money in segregated client money
              accounts with top tier banking institutions. Client money is not
              used for any operational expenses or purposes.
            </p>
          </motion.div>

          {/* AUDIT */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-4">Audit</h2>
            <p>
              KiteFX Global has in place an independent, external auditor to
              supplement operational processes and ensure regulatory compliance.
            </p>
          </motion.div>

          {/* CONFIDENTIALITY */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
            <p>
              KiteFX Global maintains appropriate controls and monitors the
              transfer of confidential and sensitive client information on a
              need-to-know basis and does not disclose information unless
              required by law.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* REFER */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <h4 className="text-lg font-semibold mb-4">
              Refer and earn
              <br />
              with
              <br />a regulated CFD Provider
            </h4>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition">
              Start Trading
            </button>
          </div>

          {/* CONTACT */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Phone className="text-white" />
              </div>
              <h4 className="text-xl font-semibold">Contact Us</h4>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              We are here 24hrs a day
              <br />
              Monday to Sunday.
            </p>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="font-medium text-sm">Help Centre</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="font-medium text-sm">Email Us</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
