import { Phone, Mail } from "lucide-react";

const CustomerSupport = () => {
  return (
    <section className="py-24 px-4 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Have a question or require specialist assistance?
          <br />
          Our dedicated customer service team is here 24/7 to assist you.
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Call Us */}
        <div className="bg-gray-100 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">Call Us</h3>

          <p className="font-medium">
            General: <span className="font-semibold">+248 467 19 76</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            (International charges may apply)
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Thailand:</strong> +66180001956
            </p>
            <p>
              <strong>Indonesia:</strong> +6280332160329
            </p>
            <p>
              <strong>Colombia:</strong> +5718005190364
            </p>
            <p>
              <strong>Vietnam:</strong> +8412032513
            </p>
            <p>
              <strong>South Africa:</strong> +27800172944
            </p>
          </div>
        </div>

        {/* Email Enquiries */}
        <div className="bg-gray-100 rounded-2xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Mail className="text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Email Enquiries</h3>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Client Relations:</strong>{" "}
              <a
                href="mailto:clientrelations@icmarkets.com"
                className="text-blue-600 hover:underline"
              >
                clientrelations@icmarkets.com
              </a>
            </p>
            <p>
              <strong>Support:</strong>{" "}
              <a
                href="mailto:support@icmarkets.com"
                className="text-blue-600 hover:underline"
              >
                support@icmarkets.com
              </a>
            </p>
            <p>
              <strong>Accounts:</strong>{" "}
              <a
                href="mailto:accounts@icmarkets.com"
                className="text-blue-600 hover:underline"
              >
                accounts@icmarkets.com
              </a>
            </p>
            <p>
              <strong>Marketing:</strong>{" "}
              <a
                href="mailto:marketing@icmarkets.com"
                className="text-blue-600 hover:underline"
              >
                marketing@icmarkets.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
