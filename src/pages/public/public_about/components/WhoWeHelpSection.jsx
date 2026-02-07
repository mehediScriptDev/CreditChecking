import React from "react";
import { Users } from "lucide-react";

const WhoWeHelpSection = () => {
  const whoWeHelp = [
    "Beginners who feel overwhelmed and don't know where to start",
    "People tired of expensive dispute-based credit repair services",
    "Individuals who want DIY guidance without legal risk or confusion",
    "Those with limited credit history (Credit Invisible or Thin File)",
    "People rebuilding after financial setbacks",
    "Anyone who wants a lender-approved, dispute-free approach",
    "Users committed to building long-term, sustainable credit strength",
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Who We Help
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2">
              We help anyone who wants to take control of their credit the right
              way — through education, clarity, and strategy.
            </p>
            <div className="w-20 md:w-24 h-1 bg-linear-to-r from-primary-500 to-emerald-500 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            {whoWeHelp.map((person, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 hover:border-success-500/50 transition-all"
              >
                <Users
                  size={22}
                  className="text-success-400 shrink-0 mt-0.5 md:w-7 md:h-7"
                />
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                  {person}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-warning-500/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-warning-500">
            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
              <strong className="text-warning-400">Important:</strong> We do not
              promise specific score increases or approvals. Everyone's profile
              and outcomes are different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
