import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Target,
  Trophy,
  Clock,
  AlertCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import ProgressBar from "../../Components/ui/ProgressBar";
import { toast } from "react-toastify";

// Credit Score Validation Categories based on FICO model
const CATEGORIES = [
  {
    id: "payment_history",
    name: "Payment History",
    weight: 35,
    icon: "💳",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    description: "Your track record of making payments on time",
    questionCount: 8,
  },
  {
    id: "amounts_owed",
    name: "Amounts Owed",
    weight: 30,
    icon: "💰",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    description: "How much you owe relative to your credit limits",
    questionCount: 8,
  },
  {
    id: "length_of_history",
    name: "Length of History",
    weight: 15,
    icon: "📅",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    description: "How long your credit accounts have been open",
    questionCount: 8,
  },
  {
    id: "credit_mix",
    name: "Credit Mix",
    weight: 10,
    icon: "🔀",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    description: "The variety of credit types you have",
    questionCount: 8,
  },
  {
    id: "new_credit",
    name: "New Credit",
    weight: 10,
    icon: "🆕",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    description: "Recent credit inquiries and new accounts",
    questionCount: 8,
  },
];

// Sample Questions (40 total - 8 per category)
const QUESTIONS = {
  payment_history: [
    {
      id: "ph1",
      text: "Do you have any late payments on your credit report?",
      type: "yesno",
    },
    {
      id: "ph2",
      text: "If yes, how many late payments appear on your credit report?",
      type: "number",
      depends: "ph1",
    },
    {
      id: "ph3",
      text: "Do you have any accounts currently in collections?",
      type: "yesno",
    },
    {
      id: "ph4",
      text: "Have you ever had a bankruptcy on your credit report?",
      type: "yesno",
    },
    {
      id: "ph5",
      text: "Do you have any judgments or liens on your credit report?",
      type: "yesno",
    },
    {
      id: "ph6",
      text: 'Are all your current accounts marked as "Pays as Agreed"?',
      type: "yesno",
    },
    {
      id: "ph7",
      text: "How many months since your last late payment?",
      type: "select",
      options: [
        "Never late",
        "Less than 6 months",
        "6-12 months",
        "12-24 months",
        "More than 24 months",
      ],
    },
    {
      id: "ph8",
      text: "Do you have any charge-offs on your credit report?",
      type: "yesno",
    },
  ],
  amounts_owed: [
    {
      id: "ao1",
      text: "What is your overall credit utilization ratio?",
      type: "select",
      options: ["0-10%", "11-30%", "31-50%", "51-75%", "Over 75%"],
    },
    {
      id: "ao2",
      text: "Do you have any maxed-out credit cards?",
      type: "yesno",
    },
    {
      id: "ao3",
      text: "How many credit cards have balances over 50% of their limit?",
      type: "number",
    },
    {
      id: "ao4",
      text: "Do you have installment loans (auto, mortgage, student)?",
      type: "yesno",
    },
    {
      id: "ao5",
      text: "What percentage of installment loan balances remain?",
      type: "select",
      options: ["Under 25%", "25-50%", "50-75%", "Over 75%"],
    },
    {
      id: "ao6",
      text: "Do you carry balances on your credit cards month to month?",
      type: "yesno",
    },
    {
      id: "ao7",
      text: "Is your total debt-to-income ratio under 36%?",
      type: "yesno",
    },
    {
      id: "ao8",
      text: "Have you reduced any account balances in the last 6 months?",
      type: "yesno",
    },
  ],
  length_of_history: [
    {
      id: "lh1",
      text: "What is the age of your oldest credit account?",
      type: "select",
      options: [
        "Less than 1 year",
        "1-3 years",
        "3-5 years",
        "5-10 years",
        "Over 10 years",
      ],
    },
    {
      id: "lh2",
      text: "What is the average age of all your credit accounts?",
      type: "select",
      options: [
        "Less than 1 year",
        "1-3 years",
        "3-5 years",
        "5-7 years",
        "Over 7 years",
      ],
    },
    {
      id: "lh3",
      text: "Have you opened any new accounts in the last 6 months?",
      type: "yesno",
    },
    {
      id: "lh4",
      text: "Have you closed any old accounts recently?",
      type: "yesno",
    },
    {
      id: "lh5",
      text: "Do you have accounts that are more than 5 years old?",
      type: "yesno",
    },
    {
      id: "lh6",
      text: "How long have you been at your current address?",
      type: "select",
      options: ["Less than 1 year", "1-3 years", "3-5 years", "Over 5 years"],
    },
    {
      id: "lh7",
      text: "Is your oldest account still open and active?",
      type: "yesno",
    },
    {
      id: "lh8",
      text: "Have you been managing credit for more than 7 years?",
      type: "yesno",
    },
  ],
  credit_mix: [
    { id: "cm1", text: "Do you have any credit cards?", type: "yesno" },
    {
      id: "cm2",
      text: "Do you have any retail store credit cards?",
      type: "yesno",
    },
    { id: "cm3", text: "Do you have an auto loan?", type: "yesno" },
    { id: "cm4", text: "Do you have a mortgage?", type: "yesno" },
    { id: "cm5", text: "Do you have student loans?", type: "yesno" },
    { id: "cm6", text: "Do you have a personal loan?", type: "yesno" },
    {
      id: "cm7",
      text: "How many different types of credit do you have?",
      type: "select",
      options: ["1 type", "2 types", "3 types", "4 types", "5+ types"],
    },
    {
      id: "cm8",
      text: "Have you had experience with both revolving and installment credit?",
      type: "yesno",
    },
  ],
  new_credit: [
    {
      id: "nc1",
      text: "How many hard inquiries appear on your credit report?",
      type: "number",
    },
    {
      id: "nc2",
      text: "Have you applied for new credit in the last 6 months?",
      type: "yesno",
    },
    {
      id: "nc3",
      text: "How many new accounts have you opened in the last year?",
      type: "number",
    },
    {
      id: "nc4",
      text: "When was your last hard inquiry?",
      type: "select",
      options: [
        "Less than 3 months ago",
        "3-6 months ago",
        "6-12 months ago",
        "Over 12 months ago",
        "No inquiries",
      ],
    },
    {
      id: "nc5",
      text: "Have you been denied credit in the last 12 months?",
      type: "yesno",
    },
    {
      id: "nc6",
      text: "Are you rate shopping for a mortgage, auto loan, or student loan?",
      type: "yesno",
    },
    { id: "nc7", text: "Do you have authorized user accounts?", type: "yesno" },
    {
      id: "nc8",
      text: "Have you recently transferred balances to a new card?",
      type: "yesno",
    },
  ],
};

const CreditScoreValidation = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const category = CATEGORIES[currentCategory];
  const categoryQuestions = QUESTIONS[category.id];
  const question = categoryQuestions[currentQuestion];

  // Calculate progress
  const totalQuestions = 40;
  const answeredCount = Object.keys(answers).length;
  const overallProgress = (answeredCount / totalQuestions) * 100;
  const categoryProgress =
    ((currentQuestion + 1) / categoryQuestions.length) * 100;

  // Handle answer selection
  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));

    // Auto advance to next question
    setTimeout(() => {
      if (currentQuestion < categoryQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else if (currentCategory < CATEGORIES.length - 1) {
        setCurrentCategory((prev) => prev + 1);
        setCurrentQuestion(0);
        toast.success(
          `${category.name} completed! Moving to ${CATEGORIES[currentCategory + 1].name}`,
        );
      } else {
        setShowResults(true);
        toast.success("🎉 All questions completed! Generating your results...");
      }
    }, 300);
  };

  // Navigate between questions
  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else if (currentCategory > 0) {
      const prevCategory = currentCategory - 1;
      setCurrentCategory(prevCategory);
      setCurrentQuestion(QUESTIONS[CATEGORIES[prevCategory].id].length - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < categoryQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else if (currentCategory < CATEGORIES.length - 1) {
      setCurrentCategory((prev) => prev + 1);
      setCurrentQuestion(0);
    }
  };

  // Jump to specific category
  const jumpToCategory = (index) => {
    setCurrentCategory(index);
    setCurrentQuestion(0);
  };

  // Calculate score based on answers (simplified scoring logic)
  const calculateScore = () => {
    // This is a simplified scoring algorithm
    // In production, this would be more sophisticated
    let score = 0;
    let maxScore = 100;

    // Positive answers get points, negative answers lose points
    Object.entries(answers).forEach(([questionId, answer]) => {
      // Payment History (35%)
      if (questionId.startsWith("ph")) {
        if (
          answer === "no" &&
          ["ph1", "ph3", "ph4", "ph5", "ph8"].includes(questionId)
        )
          score += 7;
        if (answer === "yes" && questionId === "ph6") score += 7;
      }
      // Similar logic for other categories...
    });

    return Math.min(Math.max(score * 10 + 300, 300), 850);
  };

  // Determine profile type
  const getProfileType = (score) => {
    if (score >= 750)
      return {
        type: "Senior",
        color: "from-green-500 to-green-600",
        icon: "🎓",
        description: "Excellent credit standing",
      };
    if (score >= 670)
      return {
        type: "Junior",
        color: "from-blue-500 to-blue-600",
        icon: "📚",
        description: "Good credit, room for improvement",
      };
    if (score >= 580)
      return {
        type: "Sophomore",
        color: "from-yellow-500 to-yellow-600",
        icon: "📝",
        description: "Fair credit, needs attention",
      };
    return {
      type: "Freshman",
      color: "from-red-500 to-red-600",
      icon: "🔰",
      description: "Building credit from ground up",
    };
  };

  if (showResults) {
    const estimatedScore = calculateScore();
    const profile = getProfileType(estimatedScore);

    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div
          className={`bg-linear-to-r ${profile.color} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">{profile.icon}</div>
            <h1 className="text-4xl font-heading font-bold mb-2">
              You are a Credit {profile.type}!
            </h1>
            <p className="text-xl opacity-90">{profile.description}</p>
          </div>
        </div>

        {/* Score Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-primary-200">
            <CardContent className="p-8 text-center">
              <BarChart3 size={48} className="mx-auto text-primary-600 mb-4" />
              <p className="text-5xl font-bold bg-linear-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {answeredCount}/40
              </p>
              <p className="text-gray-600 mt-2">Questions Answered</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-success-200">
            <CardContent className="p-8 text-center">
              <Trophy size={48} className="mx-auto text-success-600 mb-4" />
              <p className="text-5xl font-bold bg-linear-to-r from-success-600 to-success-500 bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-gray-600 mt-2">Validation Complete</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Score Category Analysis</CardTitle>
            <CardDescription>
              See how each category contributes to your credit profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${cat.color} flex items-center justify-center text-2xl`}
                >
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900">
                      {cat.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {cat.weight}% of score
                    </span>
                  </div>
                  <ProgressBar progress={100} variant="primary" size="sm" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card variant="success" className="border-2 border-success-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="text-success-600 shrink-0" size={32} />
              <div>
                <h4 className="font-semibold text-success-900 mb-2">
                  Your 5 Boosting Tips
                </h4>
                <ol className="text-sm text-success-800 space-y-2 list-decimal list-inside">
                  <li>Keep credit utilization under 30% on all cards</li>
                  <li>Always pay at least the minimum on time</li>
                  <li>Don't close old credit accounts unnecessarily</li>
                  <li>Limit hard inquiries - only apply when needed</li>
                  <li>Maintain a mix of credit types over time</li>
                </ol>
                <div className="mt-4 flex gap-3">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/dashboard/credit-monitoring")}
                    rightIcon={<ArrowRight size={18} />}
                  >
                    View 90-Day Action Plan
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/dashboard/resources")}
                  >
                    View Resources
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-secondary-600 via-secondary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BarChart3 size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-heading font-bold">
                  Credit Score Validation
                </h1>
                <p className="text-secondary-100 text-lg">
                  Answer 40 questions across 5 categories
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => setShowGuide(!showGuide)}
              leftIcon={<BookOpen size={18} />}
            >
              View Guide
            </Button>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="border-2 border-secondary-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Target className="text-secondary-600" size={20} />
              <h3 className="font-semibold text-gray-900">Overall Progress</h3>
            </div>
            <span className="text-sm font-medium text-gray-600">
              {answeredCount} of {totalQuestions} questions
            </span>
          </div>
          <ProgressBar
            progress={overallProgress}
            variant="secondary"
            size="lg"
            showPercentage
            animated
          />
        </CardContent>
      </Card>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto gap-3 pb-2">
        {CATEGORIES.map((cat, index) => {
          const catQuestions = QUESTIONS[cat.id];
          const catAnswered = catQuestions.filter(
            (q) => answers[q.id] !== undefined,
          ).length;
          const isComplete = catAnswered === catQuestions.length;
          const isCurrent = index === currentCategory;

          return (
            <button
              key={cat.id}
              onClick={() => jumpToCategory(index)}
              className={`shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                isCurrent
                  ? "border-primary-400 bg-primary-50 shadow-md"
                  : isComplete
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-linear-to-br ${cat.color} flex items-center justify-center text-xl`}
              >
                {isComplete ? "✓" : cat.icon}
              </div>
              <div className="text-left">
                <p
                  className={`font-medium ${isCurrent ? "text-primary-700" : "text-gray-700"}`}
                >
                  {cat.name}
                </p>
                <p className="text-xs text-gray-500">
                  {catAnswered}/{catQuestions.length} completed
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Current Question */}
      <Card elevation="lg" className="border-2 border-gray-100">
        <div className={`h-2 bg-linear-to-r ${category.color}`} />
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center text-2xl`}
            >
              {category.icon}
            </div>
            <div>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </div>
          </div>
          <ProgressBar
            progress={categoryProgress}
            variant="primary"
            size="sm"
            label={`Question ${currentQuestion + 1} of ${categoryQuestions.length}`}
          />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-8 h-8 rounded-full bg-linear-to-br ${category.color} text-white flex items-center justify-center text-sm font-bold`}
              >
                {currentQuestion + 1}
              </span>
              <span className="text-sm text-gray-500">
                of {categoryQuestions.length}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {question.text}
            </h3>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.type === "yesno" && (
                <>
                  <button
                    onClick={() => handleAnswer("yes")}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      answers[question.id] === "yes"
                        ? "border-green-400 bg-green-50 shadow-md"
                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        answers[question.id] === "yes"
                          ? "bg-green-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {answers[question.id] === "yes" ? (
                        <CheckCircle size={18} />
                      ) : (
                        <Circle size={18} className="text-gray-400" />
                      )}
                    </div>
                    <span className="font-medium text-gray-900">Yes</span>
                  </button>
                  <button
                    onClick={() => handleAnswer("no")}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      answers[question.id] === "no"
                        ? "border-red-400 bg-red-50 shadow-md"
                        : "border-gray-200 hover:border-red-300 hover:bg-red-50/50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        answers[question.id] === "no"
                          ? "bg-red-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {answers[question.id] === "no" ? (
                        <CheckCircle size={18} />
                      ) : (
                        <Circle size={18} className="text-gray-400" />
                      )}
                    </div>
                    <span className="font-medium text-gray-900">No</span>
                  </button>
                </>
              )}

              {question.type === "select" && question.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {question.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        answers[question.id] === option
                          ? "border-primary-400 bg-primary-50 shadow-md"
                          : "border-gray-200 hover:border-primary-300 hover:bg-primary-50/50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          answers[question.id] === option
                            ? "bg-primary-500 text-white"
                            : "bg-gray-100"
                        }`}
                      >
                        {answers[question.id] === option ? (
                          <CheckCircle size={14} />
                        ) : (
                          <Circle size={14} className="text-gray-400" />
                        )}
                      </div>
                      <span className="font-medium text-gray-900">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {question.type === "number" && (
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="0"
                    value={answers[question.id] || ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [question.id]: e.target.value,
                      }))
                    }
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none"
                    placeholder="Enter a number..."
                  />
                  <Button
                    variant="primary"
                    onClick={() => handleAnswer(answers[question.id])}
                    disabled={!answers[question.id]}
                  >
                    Confirm
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={goToPrevious}
              disabled={currentCategory === 0 && currentQuestion === 0}
              leftIcon={<ChevronLeft size={18} />}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">Take your time</span>
            </div>
            <Button
              variant="ghost"
              onClick={goToNext}
              disabled={
                currentCategory === CATEGORIES.length - 1 &&
                currentQuestion === categoryQuestions.length - 1
              }
              rightIcon={<ChevronRight size={18} />}
            >
              Skip
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card variant="info">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <HelpCircle className="text-info-600 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-info-900 mb-2">Need Help?</h4>
              <p className="text-sm text-info-800">
                These questions help assess your credit profile based on the 5
                key factors that determine your credit score. Answer honestly
                based on your current credit reports. Your answers are used to
                generate personalized improvement recommendations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditScoreValidation;
