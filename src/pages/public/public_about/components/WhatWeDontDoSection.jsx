import React from "react";
import { AlertCircle, FileText, Shield, Users } from "lucide-react";

const WhatWeDontDoSection = () => {
  const whatWeDontDo = [
    {
      icon: <AlertCircle size={28} className="md:w-8 md:h-8" />,
      title: "No Score Guarantees",
      description:
        "We do not guarantee specific credit score increases, loan approvals, or definite timeline results. Credit improvement varies widely based on individual circumstances and diligent application of principles.",
    },
    {
      icon: <FileText size={28} className="md:w-8 md:h-8" />,
      title: "No Legal or Tax Advice",
      description:
        "Our curriculum is educational and informational. We are not qualified to offer, and therefore do not provide, any legal or tax advice. Always consult a licensed professional for these matters.",
    },
    {
      icon: <Shield size={28} className="md:w-8 md:h-8" />,
      title: "No Automatic Disputes",
      description:
        'We do not submit credit disputes on your behalf. Our "No Dispute" method focuses on building positive credit behavior. Any dispute actions are initiated by you, with your explicit, written direction, using the knowledge we provide.',
    },
    {
      icon: <Users size={28} className="md:w-8 md:h-8" />,
      title: "No Unnecessary Data",
      description:
        "Your privacy and security are paramount. We only request the sensitive personal information that is absolutely necessary for your enrollment and participation in our educational programs.",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              What We Don't Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
              Our commitment to transparency means being clear about what we
              offer and, just as importantly, what we don't.
            </p>
            <div className="w-20 md:w-24 h-1 bg-linear-to-r from-primary-500 to-emerald-500 mx-auto mt-6 md:mt-8"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
            {whatWeDontDo.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl h-full hover:border-danger-500/50 transition-all duration-300 p-5 sm:p-6 md:p-8"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="p-3 md:p-4 bg-danger-500/20 rounded-xl md:rounded-2xl text-danger-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-r from-success-500/20 to-primary-500/20 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 border border-success-500/30 text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-success-400">
              This isn't repair. This is education that makes you your own best
              credit advocate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDoSection;
