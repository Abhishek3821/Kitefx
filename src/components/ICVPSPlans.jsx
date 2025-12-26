import { Check } from "lucide-react";

const plans = [
  {
    title: "Standard",
    lots: "15",
    description:
      "Steady performance for casual EA traders. Get started with ease.",
    specs: ["1 CPU", "2GB RAM", "60GB Disk Space", "Windows Server"],
  },
  {
    title: "Pro",
    lots: "30",
    description: "Advanced network, speed and more space for active traders.",
    specs: ["2 CPU", "4GB RAM", "80GB Disk Space", "Windows Server"],
  },
  {
    title: "Premium",
    lots: "75",
    description: "Top-tier power and speed for professionals.",
    specs: ["4 CPU", "6GB RAM", "90GB Disk Space", "Windows Server"],
  },
];

const ICVPSPlans = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Power your EAs with IC VPS
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto">
          Discover IC VPS by KiteFX Global and access a fast, reliable and
          glitch-free trading network.
        </p>

        <p className="text-gray-900 font-medium">
          Get it for <span className="font-bold">FREE</span> when you meet our
          monthly criteria*
        </p>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border relative overflow-hidden"
            >
              {/* TOP BAR */}
              <div className="h-2 bg-green-400" />

              <div className="p-8 text-left space-y-6">
                <h3 className="font-semibold text-gray-900">{plan.title}</h3>

                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.lots} lots
                  </span>
                  <span className="text-gray-500 text-sm"> /month</span>
                </div>

                <p className="text-sm text-gray-600">{plan.description}</p>

                <ul className="space-y-2 text-sm text-gray-800">
                  {plan.specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-green-500 w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-3 rounded-md transition">
                  Start Trading
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="text-xs text-gray-600 max-w-4xl mx-auto mt-10 space-y-2">
          <p>
            *Qualifying trading volume lots are trades conducted on Forex pairs
            and Precious Metals products per calendar month.
          </p>
          <p>
            Please refer to our Terms & Conditions, only available on Secured
            Client Area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ICVPSPlans;
