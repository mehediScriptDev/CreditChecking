import React from "react";
import { Target, Award } from "lucide-react";

const AboutMissionSection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
            About No Dispute Credit
          </h2>
          <div className="w-20 md:w-24 h-1 bg-linear-to-r from-primary-500 to-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Our Mission */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl h-full hover:border-primary-500/50 transition-all duration-300">
            <div className="text-center pt-6 md:pt-8 pb-4 md:pb-6">
              <div className="mb-4 md:mb-6 p-4 md:p-5 bg-linear-to-br from-primary-500/20 to-emerald-500/20 rounded-xl md:rounded-2xl inline-block mx-auto">
                <Target
                  size={36}
                  className="text-primary-400 md:w-12 md:h-12"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                Our Mission
              </h3>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
              <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                We're transforming credit education by teaching you what lenders
                actually look for — not through disputes, shortcuts, or
                gimmicks, but through genuine understanding and strategic credit
                report data management.
              </p>
              <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                Built by a former mortgage underwriter who knows exactly how
                credit decisions are made, our approach focuses on analyzing
                credit report data to ensure your credit profile is correctly
                set up. We then offer education-first strategies that create
                lasting results, not temporary fixes.
              </p>
            </div>
          </div>

          {/* Why We're Different */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl h-full hover:border-success-500/50 transition-all duration-300">
            <div className="text-center pt-6 md:pt-8 pb-4 md:pb-6">
              <div className="mb-4 md:mb-6 p-4 md:p-5 bg-linear-to-br from-success-500/20 to-primary-500/20 rounded-xl md:rounded-2xl inline-block mx-auto">
                <Award size={36} className="text-success-400 md:w-12 md:h-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                Why We're Different
              </h3>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
              <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                Unlike traditional credit repair companies that rely on dispute
                letters, we teach you how credit scoring models like FICO and
                Vantage Score really work and how to build credit strength from
                the inside out.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                Our methods are fully compliant, underwriter-approved, and
                designed to help you understand every factor that impacts your
                creditworthiness.
              </p>
              <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                No disputes. No confusion. Just clear, actionable education.
              </p>
              <div className="bg-warning-500/10 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 border-l-4 border-warning-500">
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  Educational purposes only. We don't offer credit repair or
                  dispute services. This course teaches you how to understand
                  and manage your credit confidently and compliantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
