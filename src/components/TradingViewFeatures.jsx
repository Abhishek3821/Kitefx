import {
  LineChart,
  CandlestickChart,
  Bell,
  BarChart3,
  Cpu,
  MessageCircle
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-6 h-6 text-black" />,
    title: "Best-in-class charts",
    description:
      "Interactive and responsive 15+ chart types with 110+ drawing tools and a wide range of customisations."
  },
  {
    icon: <CandlestickChart className="w-6 h-6 text-black" />,
    title: "Technical analysis",
    description:
      "400+ pre-built indicators for popular strategies and thousands more custom-built in the community."
  },
  {
    icon: <Bell className="w-6 h-6 text-black" />,
    title: "Unmissable alerts",
    description:
      "Never miss a trading opportunity with 13 notification conditions on price, indicators, and strategies."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-black" />,
    title: "Analytical suite",
    description:
      "Forex screener with 100+ descriptive and technical criteria, financial news and corporate statements."
  },
  {
    icon: <Cpu className="w-6 h-6 text-black" />,
    title: "Strategy tester",
    description:
      "Simulate trading activity and use historical data to test various strategies and setups with detailed reports."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-black" />,
    title: "Chat and learn",
    description:
      "Communicate and follow top community traders from around the world and never trade alone again."
  }
];

const TradingViewFeatures = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <p className="text-green-500 text-sm font-semibold text-center mb-4">
          Start trading with IC Markets Global
        </p>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What makes TradingView a leading charting <br />
          platform?
        </h2>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TradingViewFeatures;
