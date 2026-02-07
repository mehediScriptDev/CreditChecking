import { Link } from "react-router";
import { ArrowRight, Sparkles, Play, LogIn } from "lucide-react";
import Button from "../../../../Components/ui/Button";

const HeroSection = ({ onOpenQuiz }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-secondary-500/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-400 text-sm font-medium mb-6 animate-[fadeIn_1s_ease-out]">
            <Sparkles size={16} />
            <span>Educational Credit Validation Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-[slideUp_0.8s_ease-out]">
            Understand Your
            <span className="block bg-linear-to-r from-primary-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Credit Profile
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-[slideUp_1s_ease-out]">
            Learn how credit bureaus report your data and discover what impacts
            your score through our comprehensive validation system
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-[slideUp_1.2s_ease-out]">
            <Button
              size="xl"
              variant="primary"
              leftIcon={<Play size={20} />}
              rightIcon={<ArrowRight size={20} />}
              onClick={onOpenQuiz}
              className="bg-linear-to-r! from-primary-500! to-emerald-500! hover:from-primary-600! hover:to-emerald-600! shadow-2xl shadow-primary-500/30 w-full sm:w-auto cursor-pointer"
            >
              Take the Free Credit Quiz
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-[slideUp_1.2s_ease-out]">
            <Link to="/login">
              <Button
                size="md"
                variant="ghost"
                leftIcon={<LogIn size={18} />}
                className="text-gray-400! w-full sm:w-auto"
              >
                Already a member? Login
              </Button>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 backdrop-blur-sm rounded-full text-amber-300 text-sm animate-[fadeIn_1.4s_ease-out]">
            <span>
              ⚠️ Educational tool only • No disputes filed • No legal advice
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient - subtle dark fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
