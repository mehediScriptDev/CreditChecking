import React from "react";
import { CheckCircle } from "lucide-react";

const GameChangerSection = () => {
  const focusAreas = [
    "On-time payments",
    "Balance and utilization",
    "Age of accounts",
    "Mix of credit types",
    "New credit activity",
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 md:mb-8">
              UNTIL…
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-400 font-bold mb-4">
              We realized the credit repair industry had it backwards.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl mb-8 md:mb-10 shadow-xl">
            <div className="p-6 sm:p-8 md:p-10 lg:p-14">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                People don't need someone to 'fix' their credit for them. They
                need <strong className="text-primary-400">education</strong>.
                They need{" "}
                <strong className="text-primary-400">transparency</strong>. They
                need practical tools and real understanding – not empty promises
                and dispute letter templates that rarely work.
              </p>
              <div className="bg-linear-to-r from-success-500/20 to-primary-500/20 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 border border-success-500/30">
                <p className="text-center text-base sm:text-lg md:text-xl font-bold text-success-400">
                  This isn't repair. This is education that makes you your own
                  best credit advocate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-primary-600 to-emerald-600 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-6 md:mb-8">
              That's when we decided to change the game
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
              We built something different: a credit data validation system that
              empowers you with knowledge, provides clear, actionable
              strategies, and teaches you skills that last a lifetime.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10">
              <strong className="text-yellow-300">NoDisputeCredit.com</strong>{" "}
              isn't another quick-fix credit repair company — it's credit
              school.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 border border-white/20">
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 font-semibold">
                Instead of fighting over what disappears, you'll learn how to
                validate the data that lenders really grade you on based on five
                key areas:
              </p>
              <ul className="space-y-3 md:space-y-4">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-3 md:gap-4">
                    <CheckCircle
                      size={20}
                      className="shrink-0 text-yellow-300 md:w-6 md:h-6"
                    />
                    <span className="text-sm sm:text-base md:text-lg">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs sm:text-sm italic opacity-90">
              Your NoDisputeCredit.com "validation report card" will come from
              your assessment of how you are performing in these categories, not
              from shortcuts or disputes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameChangerSection;
