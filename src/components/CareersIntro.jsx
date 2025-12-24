import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const CareersIntro = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* INTRO PARAGRAPH */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-900 leading-relaxed text-base max-w-6xl">
            We recognise that our continued growth is dependent upon attracting
            and retaining high calibre employees, so we are always looking for
            the best talent available. If you are looking for the chance to
            enhance and develop your career within a fast growing and innovative
            company, then{" "}
            <span className="text-green-500 font-medium">
              IC Markets Global
            </span>{" "}
            could be the place for you.
          </p>
        </motion.div>

        {/* EXPAND YOUR CAREER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Expand your Career</h2>

          <div className="space-y-4 text-gray-800 leading-relaxed max-w-6xl">
            <p>
              As IC Markets Global continues to experience strong growth, we are
              rapidly expanding our workforce around the world. This means there
              are frequent new opportunities within the company’s main areas:
              Trading, Marketing, Legal/Compliance, Sales, Support, Finance, IT
              Development/Production, Operations, Human Resources.
            </p>

            <p>
              We aim to provide a challenging and rewarding working environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersIntro;
