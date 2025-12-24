import { Check } from "lucide-react";
import { assets } from "../assets/assets";
const ForexVPSSection = () => {
  return (
    <section className="bg-black text-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* BADGES */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
              Forex<span className="text-green-400">VPS</span>.net
            </span>
            <span className="border border-gray-600 px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2">
              <span className="text-blue-400">▮▮</span> NYC SERVERS
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-bold mb-4">ForexVPS</h2>

          <p className="text-lg font-semibold mb-6">
            VPS Activation Time: <span className="text-white">5 Minutes</span>
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 text-gray-300 mb-8">
            <li className="flex gap-3">
              <Check className="text-green-400 mt-1" size={18} />
              <span>
                We understand traders, because we are traders too.
              </span>
            </li>

            <li className="flex gap-3">
              <Check className="text-green-400 mt-1" size={18} />
              <span>
                At ForexVPS, you will get 1 millisecond latency times to IC
                Markets Global live server.
              </span>
            </li>

            <li className="flex gap-3">
              <Check className="text-green-400 mt-1" size={18} />
              <span>
                Our customer support team are multi-lingual and on hand via Live
                Chat 24 hours a day. We will help you install Expert Advisors,
                Third Party Tools or troubleshoot any issues you may experience.
              </span>
            </li>

            <li className="flex gap-3">
              <Check className="text-green-400 mt-1" size={18} />
              <span>
                ForexVPS will come with IC Markets Global MetaTrader 4
                pre-installed so you can get trading immediately.
              </span>
            </li>
          </ul>

          {/* CTA */}
          <button className="bg-green-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-green-300 transition">
            Trade with ForexVPS
          </button>

          {/* DISCLAIMER */}
          <div className="text-gray-500 text-xs mt-8 space-y-3 leading-relaxed">
            <p>
              *To qualify for our sponsored VPS service, you must meet our
              minimum monthly criteria.
            </p>
            <p>
              Only trading volume in Forex and Metals will count toward meeting
              this requirement. If the minimum criteria are not met for two
              consecutive months, your subscription will be automatically
              cancelled without prior notice.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:block">
          <img
            src="/images/forex-vps-server.png"
            alt="Forex VPS Server"
            className="w-full max-w-xl ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default ForexVPSSection;
