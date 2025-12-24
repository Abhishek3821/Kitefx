import { motion } from "framer-motion";
import Image from "../assets/kitefx19.webp";

const CFDCommoditiesSection = () => {
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
            alt="Commodity trading platforms"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How does CFDs on Commodities trading work?
          </h2>

          <p>
            CFDs on Commodities cover energy, agriculture and metals products.
            These products are traded in futures markets and derive their value
            from demand and supply characteristics.
          </p>

          <p>
            Supply characteristics include the weather in the case of
            agriculture and costs of extraction in the case of mining and
            energies.
          </p>

          <p>
            Demand for CFDs on Commodities tends to be characterised by broader
            conditions such as economic cycles and population growth. CFDs on
            Commodities can be traded as stand-alone products or in pairs.
          </p>

          <p>
            Metals and energies are traded against major currencies whereas
            agriculture futures contracts are traded as stand-alone contracts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CFDCommoditiesSection;
