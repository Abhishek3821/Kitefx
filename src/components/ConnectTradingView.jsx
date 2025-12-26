import { UserPlus, User } from "lucide-react";

const ConnectTradingView = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* TOP LABEL */}
        <p className="text-sm text-gray-600">Start Trading with TradingView</p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Connect your KiteFX Global account to TradingView
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* NEW CLIENT */}
          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col items-center space-y-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              NEW to KiteFX Global
            </h3>

            <button className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 rounded-md transition">
              Connect your Account
            </button>
          </div>

          {/* EXISTING CLIENT */}
          <div className="bg-gray-50 rounded-2xl p-10 flex flex-col items-center space-y-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Existing KiteFX Global Client
            </h3>

            <button className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 rounded-md transition">
              Connect your Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectTradingView;
