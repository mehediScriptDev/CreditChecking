import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "../../../../Components/ui/Button";

const benefits = [
  "Educational platform - learn how lenders view your credit",
  "No disputes filed automatically - you stay in control",
  "Side-by-side bureau comparison with traffic-light validation",
  "Understand what data impacts your credit score",
  "Personalized credit profile type assessment",
  "Step-by-step guidance and expert resources",
];

const WhyChooseUsSection = ({ onOpenQuiz }) => {
  return (
    <section className="py-12 md:py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-success-500/10 rounded-full blur-[120px] " />
        <div
          className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"
          // style={{ animationDelay: "0.5s" }}
        />
      </div>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-success-500/20 text-success-400 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6 px-2 lg:px-0">
                Why No Dispute Credit?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-4 lg:px-0">
                We're not just another credit repair service. We're an
                educational platform designed to help you understand and take
                control of your credit journey.
              </p>
              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight size={18} />}
                onClick={onOpenQuiz}
                className="shadow-xl cursor-pointer text-sm md:text-base"
              >
                Take the Free Quiz
              </Button>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-success-500 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle
                      size={14}
                      className="text-white md:w-4 md:h-4"
                    />
                  </div>
                  <p className="text-gray-200 font-medium text-sm md:text-base pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
