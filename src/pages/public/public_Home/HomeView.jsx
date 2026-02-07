import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  BarChart3,
  TrendingUp,
  Upload,
  Eye,
  Calendar,
  Sparkles,
  Star,
  Play,
  LogIn,
  UserPlus,
  ChevronRight,
  Lightbulb,
  Zap,
  Target,
  ArrowLeft,
  Gift,
  Lock,
} from "lucide-react";
import Button from "../../../Components/ui/Button";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../Components/ui/Card";
import { getPageMetadata } from "../../../utils/seo";

const HomeView = () => {
  const metadata = getPageMetadata("home");

  // Quiz State
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

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
    setShowQuiz(false);
  };

  const features = [
    {
      icon: <Shield size={40} className="text-white" />,
      title: "Credit Report Validation",
      description:
        "Side-by-side comparison of Equifax, TransUnion, and Experian reports with automated mismatch detection",
      details: [
        "Bureau Comparison",
        "PDF Upload",
        "Manual Entry Option",
        "Traffic-Light Validation",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      iconBg: "bg-blue-500",
      link: "/register",
    },
    {
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Credit Score Validation",
      description:
        "40 automated scoring questions across 5 FICO categories to understand your credit profile",
      details: [
        "5 Score Categories",
        "40 Targeted Questions",
        "Profile Type Analysis",
        "5 Boosting Tips",
      ],
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      iconBg: "bg-emerald-500",
      link: "/register",
    },
    {
      icon: <TrendingUp size={40} className="text-white" />,
      title: "90-Day Action Plan",
      description:
        "Personalized roadmap with milestones and educational guidance to improve your credit",
      details: [
        "Immediate Actions",
        "Short-term Goals",
        "Long-term Strategy",
        "Progress Tracking",
      ],
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
      iconBg: "bg-purple-500",
      link: "/register",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: <Upload size={28} />,
      title: "Upload Your Reports",
      description:
        "Get your free credit reports from AnnualCreditReport.com and upload all 3 bureau PDFs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: <Eye size={28} />,
      title: "Compare & Validate",
      description:
        "Our system compares data side-by-side and identifies mismatches using traffic-light logic",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "03",
      icon: <BarChart3 size={28} />,
      title: "Answer 40 Questions",
      description:
        "Complete targeted questions to analyze your credit score across 5 key categories",
      color: "from-orange-500 to-amber-500",
    },
    {
      number: "04",
      icon: <Calendar size={28} />,
      title: "Get Your 90-Day Plan",
      description:
        "Receive personalized recommendations and milestones to improve your credit profile",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const benefits = [
    "Educational platform - learn how lenders view your credit",
    "No disputes filed automatically - you stay in control",
    "Side-by-side bureau comparison with traffic-light validation",
    "Understand what data impacts your credit score",
    "Personalized credit profile type assessment",
    "Step-by-step guidance and expert resources",
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
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
              {/* Logo */}
              {/* <div className="mb-8 animate-[fadeIn_0.8s_ease-out]">
                <img
                  src="/logo.png"
                  alt="No Dispute Credit"
                  className="h-20 sm:h-28 mx-auto drop-shadow-2xl"
                />
              </div> */}

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
                Learn how credit bureaus report your data and discover what
                impacts your score through our comprehensive validation system
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-[slideUp_1.2s_ease-out]">
                <Button
                  size="xl"
                  variant="primary"
                  leftIcon={<Play size={20} />}
                  rightIcon={<ArrowRight size={20} />}
                  onClick={() => setShowQuiz(true)}
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
                    className="text-gray-400! hover:text-white! w-full sm:w-auto"
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

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[slideUp_0.3s_ease-out]">
              {!showResults ? (
                <>
                  {/* Quiz Header */}
                  <div className="bg-linear-to-r from-primary-600 to-secondary-600 p-6 rounded-t-3xl text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm opacity-80">
                        Free Credit Assessment
                      </span>
                      <button
                        onClick={resetQuiz}
                        className="text-white/80 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Discover Your Credit Profile
                    </h3>
                    <p className="text-primary-100">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </p>
                    {/* Progress Bar */}
                    <div className="mt-4 bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2 transition-all duration-300"
                        style={{
                          width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h4>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map(
                        (option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(option.score)}
                            className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all text-left group"
                          >
                            <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-primary-500 group-hover:bg-primary-500 flex items-center justify-center transition-all">
                              <ChevronRight
                                size={16}
                                className="text-gray-400 group-hover:text-white"
                              />
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-gray-900">
                              {option.label}
                            </span>
                          </button>
                        ),
                      )}
                    </div>

                    {currentQuestion > 0 && (
                      <button
                        onClick={() => setCurrentQuestion((prev) => prev - 1)}
                        className="mt-6 flex items-center gap-2 text-gray-500 hover:text-gray-700"
                      >
                        <ArrowLeft size={18} />
                        <span>Previous question</span>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Results */}
                  <div className="p-8">
                    <button
                      onClick={resetQuiz}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>

                    {/* Profile Result */}
                    <div className="text-center mb-8">
                      <div
                        className={`inline-flex items-center px-4 py-2 ${calculateProfile().bg} ${calculateProfile().color} rounded-full font-semibold mb-4`}
                      >
                        Your Credit Profile: {calculateProfile().type}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Quiz Complete!
                      </h3>
                      <p className="text-gray-600">
                        {calculateProfile().message}
                      </p>
                    </div>

                    {/* 3 Free Boosting Tips */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Gift className="text-primary-600" size={24} />
                        <h4 className="text-xl font-bold text-gray-900">
                          Your 3 Free Boosting Tips
                        </h4>
                      </div>
                      <div className="space-y-4">
                        {boostingTips.map((tip, idx) => (
                          <div
                            key={idx}
                            className="p-4 border border-gray-200 rounded-xl hover:border-primary-200 hover:shadow-md transition-all"
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`w-12 h-12 rounded-xl bg-linear-to-br ${tip.color} flex items-center justify-center text-white shrink-0`}
                              >
                                {tip.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-semibold text-gray-900">
                                    {tip.title}
                                  </h5>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full bg-linear-to-r ${tip.color} text-white`}
                                  >
                                    {tip.impact}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {tip.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upsell CTA */}
                    <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center">
                      <Lock
                        className="mx-auto text-primary-400 mb-3"
                        size={32}
                      />
                      <h4 className="text-xl font-bold text-white mb-2">
                        Want the Full Analysis?
                      </h4>
                      <p className="text-gray-300 mb-4 text-sm">
                        Get access to our complete credit validation system with
                        40 detailed questions, side-by-side bureau comparison,
                        and a personalized 90-day action plan.
                      </p>
                      <Link to="/register">
                        <Button
                          size="lg"
                          variant="primary"
                          rightIcon={<ArrowRight size={18} />}
                          className="bg-linear-to-r! from-primary-500! to-emerald-500! shadow-xl w-full"
                        >
                          Get Started - It's Free
                        </Button>
                      </Link>
                      <p className="text-gray-500 text-xs mt-3">
                        No credit card required
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
                POWERFUL MODULES
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Three Steps to Credit Clarity
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our comprehensive system guides you through understanding and
                improving your credit profile
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  hoverable
                  className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl"
                >
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-linear-to-r ${feature.gradient}`} />

                  <CardHeader className="pt-8 pb-4 px-8">
                    <div
                      className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-3">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-3 mb-8">
                      {feature.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div
                            className={`w-5 h-5 rounded-full ${feature.iconBg} flex items-center justify-center`}
                          >
                            <CheckCircle size={12} className="text-white" />
                          </div>
                          <span className="font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={feature.link}>
                      <Button
                        variant="primary"
                        fullWidth
                        rightIcon={<ArrowRight size={18} />}
                        className={`bg-linear-to-r! ${feature.gradient}! hover:opacity-90 shadow-lg`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-125 h-125 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/3 right-1/3 w-100 h-100 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-semibold mb-4">
                HOW IT WORKS
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Simple 4-Step Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From upload to action plan in just a few clicks
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Connector */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-white/20">
                        <div
                          className={`h-full bg-linear-to-r ${step.color} w-0 group-hover:w-full transition-all duration-500`}
                        />
                      </div>
                    )}

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10 border border-white/20 hover:border-white/30">
                      <div
                        className={`w-14 h-14 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                      >
                        {step.icon}
                      </div>
                      <div
                        className={`text-4xl font-bold bg-linear-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-success-500/20 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "0.5s" }}
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
                    educational platform designed to help you understand and
                    take control of your credit journey.
                  </p>
                  <Button
                    size="lg"
                    variant="primary"
                    rightIcon={<ArrowRight size={20} />}
                    onClick={() => setShowQuiz(true)}
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
                      <p className="text-gray-200 font-medium pt-1">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Start with our free quiz and get 3 boosting tips instantly
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="xl"
                  variant="primary"
                  leftIcon={<Play size={20} />}
                  rightIcon={<ArrowRight size={20} />}
                  onClick={() => setShowQuiz(true)}
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
      </div>
    </>
  );
};

export default HomeView;
