import { Link } from "react-router";
import { ArrowRight, Star, Play } from "lucide-react";
import Button from "../../../../Components/ui/Button";

const FinalCTASection = ({ onOpenQuiz }) => {
  return (
    <section className="py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Ready to Take Control of Your Credit?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with our free quiz and get 3 boosting tips instantly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="xl"
              variant="primary"
              leftIcon={<Play size={20} />}
              rightIcon={<ArrowRight size={20} />}
              onClick={onOpenQuiz}
              className="bg-linear-to-r! from-primary-500! to-emerald-500! hover:from-primary-600! hover:to-emerald-600! shadow-2xl shadow-primary-500/30 w-full sm:w-auto cursor-pointer"
            >
              Take the Free Quiz
            </Button>
            <Link to="/about">
              <Button
                size="xl"
                variant="outline"
                className="border-2! border-white/30! text-white! hover:bg-white/10! w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            No credit card required • Start immediately • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
