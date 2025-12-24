const tools = [
  {
    title: "Alarm Manager",
    description:
      "A personal trading assistant which can notify the trader or even their followers on social media.",
  },
  {
    title: "Correlation Matrix",
    description:
      "Gives trader market info on different time scales and enables them to make better decisions.",
  },
  {
    title: "Correlation Trader",
    description:
      "Lets traders compare correlation between two symbols, and trade emerging differences.",
  },
  {
    title: "Trade Terminal",
    description:
      "A feature-rich trade execution and analysis tool which offers precision trading, ordering template & more.",
  },
  {
    title: "Market Manager",
    description:
      "Provides full control over symbol watch-lists and all order activity from one small and convenient window.",
  },
  {
    title: "Mini Terminal",
    description:
      "It displays the same deal ticket as the Trade Terminal in the context of a specific trading chart.",
  },
  {
    title: "Sentiment Trader",
    description:
      "Shows sentiment based on real open positions: the number of traders who are currently long or short.",
  },
  {
    title: "Session Map",
    description:
      "Gives the trader a quick market overview through the world’s key markets and their time zones.",
  },
  {
    title: "Excel RTD",
    description:
      "App lets you enter up to 5 account numbers, and then automatically displays a dashboard of equity and balance etc.",
  },
  {
    title: "Stealth Orders",
    description:
      "App lets traders hide their pending orders from other market participants with more functionalities.",
  },
  {
    title: "Tick Chart Trader",
    description:
      "Displays variety of tick charts, including traditional line charts, timed tick charts, and tick bars/candles.",
  },
  {
    title: "And More..",
    description:
      "More apps and indicators are available exclusively on ICMarkets. Browse our apps and indicators list.",
  },
];

const TradingToolsGrid = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tool.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingToolsGrid;
