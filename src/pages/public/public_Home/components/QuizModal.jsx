import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  ArrowLeft,
  Gift,
  Lock,
} from "lucide-react";
import Button from "../../../../Components/ui/Button";

// Quiz Questions
const quizQuestions = [
  {
    id: "late_payments",
    question: "Do you have any late payments on your credit report?",
    options: [
      { value: "none", label: "No late payments", score: 3 },
      { value: "few", label: "1-2 late payments", score: 2 },
      { value: "several", label: "3+ late payments", score: 1 },
      { value: "unsure", label: "I'm not sure", score: 0 },
    ],
  },
  {
    id: "credit_utilization",
    question: "What percentage of your credit card limits are you using?",
    options: [
      { value: "low", label: "Under 30%", score: 3 },
      { value: "medium", label: "30-50%", score: 2 },
      { value: "high", label: "Over 50%", score: 1 },
      { value: "maxed", label: "Cards are maxed out", score: 0 },
    ],
  },
  {
    id: "credit_age",
    question: "How long have you had your oldest credit account?",
    options: [
      { value: "long", label: "Over 5 years", score: 3 },
      { value: "medium", label: "2-5 years", score: 2 },
      { value: "short", label: "Less than 2 years", score: 1 },
      { value: "new", label: "Just started building credit", score: 0 },
    ],
  },
  {
    id: "recent_inquiries",
    question: "Have you applied for new credit in the last 6 months?",
    options: [
      { value: "none", label: "No applications", score: 3 },
      { value: "one", label: "1 application", score: 2 },
      { value: "few", label: "2-3 applications", score: 1 },
      { value: "many", label: "4+ applications", score: 0 },
    ],
  },
  {
    id: "credit_mix",
    question: "What types of credit do you have?",
    options: [
      {
        value: "diverse",
        label: "Credit cards + loans (auto, mortgage, etc.)",
        score: 3,
      },
      { value: "some", label: "Credit cards + 1 type of loan", score: 2 },
      { value: "cards", label: "Only credit cards", score: 1 },
      { value: "limited", label: "Very limited credit history", score: 0 },
    ],
  },
];

// 3 Free Boosting Tips
const boostingTips = [
  {
    icon: <Zap size={24} />,
    title: "Pay Down High Balances",
    description:
      "Reduce credit card balances to under 30% of your limit. This alone can boost your score by 20-50 points!",
    impact: "High Impact",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target size={24} />,
    title: "Set Up Auto-Pay",
    description:
      "Never miss a payment! Payment history is 35% of your credit score. Set up automatic payments for at least the minimum.",
    impact: "Critical",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Don't Close Old Accounts",
    description:
      "Keep your oldest credit card open. Length of credit history matters! Closing old accounts can shorten your average age.",
    impact: "Moderate Impact",
    color: "from-purple-500 to-pink-500",
  },
];

const QuizModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Calculate score and profile
  const calculateProfile = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0,
    );
    const maxScore = quizQuestions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 80)
      return {
        type: "Excellent",
        color: "text-green-600",
        bg: "bg-green-100",
        message: "Your credit habits look great!",
      };
    if (percentage >= 60)
      return {
        type: "Good",
        color: "text-blue-600",
        bg: "bg-blue-100",
        message: "You have room for improvement.",
      };
    if (percentage >= 40)
      return {
        type: "Fair",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
        message: "Several areas need attention.",
      };
    return {
      type: "Needs Work",
      color: "text-red-600",
      bg: "bg-red-100",
      message: "Let us help you improve!",
    };
  };

  const handleAnswer = (score) => {
    setAnswers((prev) => ({
      ...prev,
      [quizQuestions[currentQuestion].id]: score,
    }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    onClose();
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div
        data-lenis-prevent
        className="bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl animate-[slideUp_0.3s_ease-out] border border-white/10 scrollbar-hide"
      >
        {!showResults ? (
          <>
            {/* Quiz Header */}
            <div className="bg-linear-to-r from-primary-600 to-emerald-600 p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl text-white">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-xs sm:text-sm opacity-80">
                  Free Credit Assessment
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-white/80 hover:text-white text-lg sm:text-xl p-1"
                >
                  ✕
                </button>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                Discover Your Credit Profile
              </h3>
              <p className="text-primary-100 text-sm sm:text-base">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
              {/* Progress Bar */}
              <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-white rounded-full h-1.5 sm:h-2 transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="p-4 sm:p-6 md:p-8">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-6">
                {quizQuestions[currentQuestion].question}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {quizQuestions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 border-2 border-white/10 rounded-lg sm:rounded-xl hover:border-primary-400 hover:bg-white/10 transition-all text-left group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-500 group-hover:border-primary-500 group-hover:bg-primary-500 flex items-center justify-center transition-all shrink-0">
                      <ChevronRight
                        size={14}
                        className="text-gray-400 group-hover:text-white sm:w-4 sm:h-4"
                      />
                    </div>
                    <span className="font-medium text-sm sm:text-base text-gray-200 group-hover:text-white">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion((prev) => prev - 1)}
                  className="mt-4 sm:mt-6 flex items-center gap-2 text-gray-400 hover:text-white text-sm sm:text-base"
                >
                  <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Previous question</span>
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="p-4 sm:p-6 md:p-8 relative">
              <button
                onClick={resetQuiz}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-lg sm:text-xl p-1"
              >
                ✕
              </button>

              {/* Profile Result */}
              <div className="text-center mb-6 sm:mb-8 pt-4 sm:pt-0">
                <div
                  className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 ${calculateProfile().bg} ${calculateProfile().color} rounded-full font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}
                >
                  Your Credit Profile: {calculateProfile().type}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Quiz Complete!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {calculateProfile().message}
                </p>
              </div>

              {/* 3 Free Boosting Tips */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Gift className="text-primary-400 w-5 h-5 sm:w-6 sm:h-6" />
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    Your 3 Free Boosting Tips
                  </h4>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {boostingTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl hover:border-primary-400/50 transition-all"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br ${tip.color} flex items-center justify-center text-white shrink-0`}
                        >
                          <span className="scale-75 sm:scale-100">
                            {tip.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                            <h5 className="font-semibold text-white text-sm sm:text-base">
                              {tip.title}
                            </h5>
                            <span
                              className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-linear-to-r ${tip.color} text-white whitespace-nowrap`}
                            >
                              {tip.impact}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upsell CTA */}
              <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <Lock className="mx-auto text-primary-400 mb-2 sm:mb-3 w-6 h-6 sm:w-8 sm:h-8" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                  Want the Full Analysis?
                </h4>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Get access to our complete credit validation system with 40
                  detailed questions, side-by-side bureau comparison, and a
                  personalized 90-day action plan.
                </p>
                <Link to="/register">
                  <Button
                    size="md"
                    variant="primary"
                    rightIcon={
                      <ArrowRight
                        size={16}
                        className="sm:w-[18px] sm:h-[18px]"
                      />
                    }
                    className="bg-linear-to-r! from-primary-500! to-emerald-500! shadow-xl w-full text-sm sm:text-base"
                  >
                    Get Started - It's Free
                  </Button>
                </Link>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-2 sm:mt-3">
                  No credit card required
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
