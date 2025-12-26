import { motion } from "framer-motion";
import { Clock, Phone, CheckCircle } from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TradingHours1 = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-10 text-gray-900 leading-relaxed"
        >
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <Clock className="w-7 h-7 text-green-500" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold">
              See at a glance the market hours for all our tradable products
              below. Please note that KiteFX Global&apos;s server time and
              charts are GMT+2 or GMT+3 (when daylight savings is in effect).
            </h2>
          </div>

          {/* CONTENT BLOCKS */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p>
              The trading hours for all currency pairs is{" "}
              <strong>00:01 server time</strong> to{" "}
              <strong>23:59 server time</strong> daily (23:57 on Friday),
              whereas for Gold is <strong>01:02 server time</strong> to{" "}
              <strong>23:57</strong>. All other Metals (XAG, XPD, XPT) open for
              trading at <strong>01:00 server time</strong> (Monday) and close
              at <strong>23:59 server time</strong> daily (23:57 on Friday).
            </p>

            <p>
              You will also be able to view the Trading Hours from within your
              MetaTrader trading terminal by following the process outlined
              below.
            </p>

            {/* STEP CARD */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="font-medium mb-2">
                How to view Trading Hours in MetaTrader:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li>
                  Right click on any instrument in the{" "}
                  <strong>Market Watch</strong> section.
                </li>
                <li>
                  Left click on the <strong>Specification</strong> button.
                </li>
                <li>
                  A new window will open showing the Trading Hours for the
                  selected instrument.
                </li>
              </ol>
            </div>

            <p className="text-sm text-gray-700">
              Trading Hours are subject to change. The most accurate details are
              those displayed in your trading account through the electronic
              trading system.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:sticky lg:top-24 h-fit"
        >
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

export default TradingHours1;
