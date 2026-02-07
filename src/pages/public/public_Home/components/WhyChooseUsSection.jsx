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
    <section className="py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-success-500/20 text-success-400 rounded-full text-sm font-semibold mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
                Why No Dispute Credit?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're not just another credit repair service. We're an
                educational platform designed to help you understand and take
                control of your credit journey.
              </p>
              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight size={20} />}
                onClick={onOpenQuiz}
                className="shadow-xl cursor-pointer"
              >
                Take the Free Quiz
              </Button>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-success-400/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-gray-200 font-medium pt-1">{benefit}</p>
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
