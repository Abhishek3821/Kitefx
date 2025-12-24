import { motion } from "framer-motion";
import Image from "../assets/kitefx19.webp";

const DividendEntitlementSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={Image}
            alt="Index trading platform preview"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-700 leading-relaxed"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            How to determine if a client is entitled dividend from Index AUS200?
          </h2>

          <p>
            From the above example, let us assume that the ex-dividend date for
            Index AUS200 is on the 18th August 2016. Therefore, a client must
            have an open position for Index AUS200 before the 18th of August
            2016 and it must remain open until the 18th August 2016, in order
            to have the dividend adjustment of $2.44 per lot.
          </p>

          <p>
            To determine if the dividend adjustment is added or deducted to
            the client’s account, will depend on whether it is a SELL or BUY
            on AUS200. If the client has 1 lot of BUY for AUS200, the client
            will be credited $2.44 per lot. However, if it is a SELL of
            AUS200, the client will be deducted $2.44 per lot.
          </p>

          <p>
            The amount $2.44 per lot will be converted to the client’s base
            currency, before it is being deducted.
          </p>

          <p>
            Since this is from index AUS200, the dividend adjustment will be
            AUD $2.44 per lot. Alternatively, if the index is US500, the
            dividend adjustment would be USD $2.44 per lot.
          </p>

          <p>
            IC Markets Global EX-Dividends Excel sheet shows the expected
            Indices that will have their index points adjusted for the given
            week and the actual ex-dividend adjustment amount for each index
            will be updated regularly on our blog, Ex-Dividends Adjustments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DividendEntitlementSection;
