import React from "react";

const HowItWorksSection = () => {
  const howItWorks = [
    {
      number: "1",
      title: "Upload Your Reports",
      description:
        "Upload 1, 2, or all 3 of your AnnualCreditReport.com Equifax, TransUnion, Experian credit reports.",
    },
    {
      number: "2",
      title: "Analyze & Validate",
      description:
        "Your uploaded credit report data is analyzed and validated for accuracy.",
    },
    {
      number: "3",
      title: "Validate Your Data",
      description:
        "Use our guided validation steps to review your reports for accuracy.",
    },
    {
      number: "4",
      title: "Apply Boost Method",
      description:
        "Follow your credit score model-aligned action steps for safe, strategic improvement.",
    },
    {
      number: "5",
      title: "Track Progress",
      description:
        "Use the Credit Improvement Tracker to monitor changes and stay consistent.",
    },
    {
      number: "6",
      title: "Build Strong Habits",
      description:
        "No disputes. No shortcuts. Just real, sustainable credit growth.",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
            Your NoDisputeCredit.com validation journey follows a simple, guided
            path:
          </p>
          <div className="w-20 md:w-24 h-1 bg-linear-to-r from-primary-500 to-emerald-500 mx-auto mt-6 md:mt-8"></div>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-primary-500/50 transition-all duration-300 p-5 sm:p-6 md:p-8"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-linear-to-br from-primary-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl font-bold mx-auto mb-4 md:mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2 md:mb-4">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
