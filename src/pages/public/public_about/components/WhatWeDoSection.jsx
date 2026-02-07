import React from "react";
import { CheckCircle } from "lucide-react";

const WhatWeDoSection = () => {
  const whatWeDo = [
    "We simplify credit so you finally understand how it really works.",
    "We show you how to read your Equifax, TransUnion, and Experian reports.",
    "We teach you how to validate your credit data before making any decisions.",
    "We walk you through how lenders and FICO evaluate your credit.",
    "We help you build a stronger, cleaner, more strategic credit profile—DIY and dispute-free.",
    "We give you step-by-step plans designed to safely boost your credit scores over time.",
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              What We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2">
              We teach everyday people how to analyze, understand, validate, and
              strengthen their credit profile using education—not disputes.
            </p>
            <div className="w-20 md:w-24 h-1 bg-linear-to-r from-primary-500 to-emerald-500 mx-auto mt-6 md:mt-8"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 hover:border-primary-500/50 transition-all"
              >
                <CheckCircle
                  size={22}
                  className="text-primary-400 shrink-0 mt-0.5 md:w-7 md:h-7"
                />
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
