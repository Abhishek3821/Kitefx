import { Phone, Mail, MessageSquare } from "lucide-react";

const NeedHelpSection = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-600 mb-16">
          If you need assistance or have any questions, contact our multilingual
          support team 24/7 on
        </p>

        {/* CONTACT OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* PHONE */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-400 mb-4">
              <Phone className="text-black" size={22} />
            </div>
            <span className="text-green-500 text-sm font-medium mb-1">
              Phone
            </span>
            <p className="font-semibold text-gray-900">+248 467 19 76</p>
            <span className="text-xs text-gray-400 mt-1">
              (International charges may apply)
            </span>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-400 mb-4">
              <Mail className="text-black" size={22} />
            </div>
            <span className="text-green-500 text-sm font-medium mb-1">
              Email
            </span>
            <a
              href="mailto:support@icmarkets.com"
              className="font-semibold text-gray-900 hover:underline"
            >
              support@icmarkets.com
            </a>
          </div>

          {/* LIVE CHAT */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-400 mb-4">
              <MessageSquare className="text-black" size={22} />
            </div>
            <span className="text-green-500 text-sm font-medium mb-1">
              Live Chat
            </span>
            <button className="font-semibold text-gray-900 hover:underline">
              Chat to support
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;
