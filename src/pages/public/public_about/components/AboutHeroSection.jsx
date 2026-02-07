import React from "react";

const AboutHeroSection = () => {
  const keyPoints = [
    "That's old-school",
    "That's slow, and",
    "It doesn't always work.",
  ];

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 lg:w-125 h-64 md:h-96 lg:h-125 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 md:w-80 lg:w-100 h-48 md:h-80 lg:h-100 bg-secondary-500/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div> */}
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6 animate-slideUp leading-tight">
            Let's Be Honest...
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed animate-fadeIn px-2">
            Most people think 'fixing' credit means arguing with the credit
            bureaus.
          </p>
          <div className="space-y-2 md:space-y-4 mb-8 md:mb-10">
            {keyPoints.map((point, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-semibold animate-slideLeft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {point}
              </p>
            ))}
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 md:mb-8 animate-slideUp border border-white/10">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
              We saw too many people trapped in that same exhausting repair
              cycle — spending hundreds of dollars for something they could
              absolutely do themselves, but never learning the real skills they
              needed to succeed.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
              We watched families struggle, unable to qualify for better
              interest rates.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
              We saw entrepreneurs held back from business loans.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We met young adults who couldn't get approved for their first
              apartment because nobody ever taught them how credit really works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
