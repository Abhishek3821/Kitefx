import React from "react";
import { Repeat, MessageCircle, CheckCircle } from "lucide-react";

const ForexSwapRate = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6">
            <Repeat className="w-7 h-7 text-green-500" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Forex Swap rate: what is it?
          </h1>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            A forex swap rate or rollover is defined as the overnight interest
            added or deducted for holding a position open overnight. Swap rates
            are determined by the overnight interest rate differential between
            the two currencies involved in the pair and whether the position is
            long or short.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">Contact Us</h3>
            </div>

            {/* Card Text */}
            <p className="text-gray-600 mb-6">
              We are here 24hrs a day
              <br />
              Monday to Sunday.
            </p>

            <hr className="my-4" />

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-black font-medium cursor-pointer">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Help Centre
              </div>

              <div className="flex items-center gap-3 text-black font-medium cursor-pointer">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Email Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexSwapRate;
