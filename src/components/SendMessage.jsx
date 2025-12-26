import { useState } from "react";

const SendMessage = () => {
  const [hasLiveAccount, setHasLiveAccount] = useState(true);

  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-gray-100">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Send us a message
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you are new to KiteFX Global or have a question about your
            existing account, we can help. Simply fill in your details below and
            we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form className="bg-gray-100 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First name*" />
            <Input label="Last name*" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Email address*" type="email" />
            <Input label="Phone*" />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={hasLiveAccount}
              onChange={() => setHasLiveAccount(!hasLiveAccount)}
              className="w-4 h-4 accent-green-500"
            />
            <span>Do you currently have a Live trading account?</span>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Your Live trading account number" />
            <Input label="Department" value="Support" />
          </div>

          {/* Subject */}
          <Input label="Subject*" value="CALL BACK REQUEST - CONTACT US" />

          {/* Message */}
          <div>
            <label className="text-sm font-medium mb-2 block">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Captcha Placeholder */}
          <div className="flex justify-center">
            <div className="border rounded-md px-6 py-4 flex items-center gap-4 bg-white">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-sm">I'm not a robot</span>
              <div className="text-xs text-gray-400">reCAPTCHA</div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SendMessage;

/* ---------------- Input Component ---------------- */

const Input = ({ label, type = "text", value }) => (
  <div>
    <label className="text-sm font-medium mb-2 block">{label}</label>
    <input
      type={type}
      defaultValue={value}
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);
