import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Calendar,
  CheckCircle,
  Circle,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Trophy,
  Zap,
  BookOpen,
  ArrowRight,
  Star,
  Flame,
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

// 90-Day Action Plan Structure
const ACTION_PHASES = [
  {
    id: "immediate",
    name: "Immediate Actions",
    timeframe: "0-30 Days",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-600",
    icon: Zap,
    description: "Critical actions to address right away",
    tasks: [
      {
        id: "t1",
        title: "Review Credit Report Mismatches",
        description:
          "Address any discrepancies found in your side-by-side comparison",
        priority: "high",
        impact: "High impact on credit score",
        instructions: [
          "Review all flagged mismatches from your credit report validation",
          "Document any errors with supporting evidence",
          "Prepare a list of items that need correction",
        ],
      },
      {
        id: "t2",
        title: "Pay Down High Utilization",
        description: "Reduce credit card balances to under 30% of limits",
        priority: "high",
        impact: "Can improve score by 20-50 points",
        instructions: [
          "List all credit cards with balances over 30% utilization",
          "Create a payment plan prioritizing highest utilization cards",
          "Set up auto-pay for at least minimum payments",
        ],
      },
      {
        id: "t3",
        title: "Catch Up on Late Payments",
        description: "Bring all accounts current if any are past due",
        priority: "high",
        impact: "Prevents further score damage",
        instructions: [
          "Check for any accounts marked as late or past due",
          "Contact creditors to discuss payment arrangements",
          "Make payments to bring accounts current",
        ],
      },
    ],
  },
  {
    id: "short_term",
    name: "Short-Term Goals",
    timeframe: "30-60 Days",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-600",
    icon: Target,
    description: "Build momentum with these medium-priority actions",
    tasks: [
      {
        id: "t4",
        title: "Set Up Payment Reminders",
        description: "Never miss a payment with automated reminders",
        priority: "medium",
        impact: "Protects payment history (35% of score)",
        instructions: [
          "Set up calendar reminders 5 days before each due date",
          "Enable autopay for all accounts if possible",
          "Download your creditors mobile apps for notifications",
        ],
      },
      {
        id: "t5",
        title: "Request Credit Limit Increases",
        description: "Lower utilization by increasing available credit",
        priority: "medium",
        impact: "Improves utilization ratio",
        instructions: [
          "Wait for accounts to be in good standing for 6+ months",
          "Request increases through online portals (no hard inquiry)",
          "Do not request if it will trigger a hard inquiry unless necessary",
        ],
      },
      {
        id: "t6",
        title: "Become an Authorized User",
        description: "Add positive history from a family member's account",
        priority: "medium",
        impact: "Can add years of positive history",
        instructions: [
          "Find a trusted family member with excellent credit",
          "Ask to be added as an authorized user on their oldest card",
          "Ensure the card reports to all 3 bureaus",
        ],
      },
    ],
  },
  {
    id: "long_term",
    name: "Long-Term Strategy",
    timeframe: "60-90 Days",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-600",
    icon: TrendingUp,
    description: "Maintain progress and continue building",
    tasks: [
      {
        id: "t7",
        title: "Monitor Credit Regularly",
        description: "Check your credit reports at least monthly",
        priority: "low",
        impact: "Early detection of issues",
        instructions: [
          "Set up free credit monitoring with Credit Karma or similar",
          "Review reports from all 3 bureaus quarterly",
          "Document any new accounts or inquiries",
        ],
      },
      {
        id: "t8",
        title: "Maintain Credit Mix",
        description: "Keep a healthy mix of credit types",
        priority: "low",
        impact: "10% of credit score",
        instructions: [
          "Maintain both revolving (credit cards) and installment (loans) accounts",
          "Avoid closing old accounts unnecessarily",
          "Consider a secured credit card if building credit",
        ],
      },
      {
        id: "t9",
        title: "Plan Future Credit Applications",
        description: "Be strategic about new credit inquiries",
        priority: "low",
        impact: "Minimizes inquiry impact",
        instructions: [
          "Space out credit applications by at least 6 months",
          "Rate shop for mortgages/auto loans within 14-45 day window",
          "Pre-qualify with soft inquiries when possible",
        ],
      },
    ],
  },
];

const CreditMonitoring = () => {
  const navigate = useNavigate();
  const [completedTasks, setCompletedTasks] = useState([]);
  const [expandedTask, setExpandedTask] = useState(null);
  const [startDate] = useState(new Date());

  // Calculate progress
  const totalTasks = ACTION_PHASES.reduce(
    (sum, phase) => sum + phase.tasks.length,
    0,
  );
  const completedCount = completedTasks.length;
  const overallProgress = (completedCount / totalTasks) * 100;

  // Calculate days remaining
  const daysPassed = Math.floor(
    (new Date() - startDate) / (1000 * 60 * 60 * 24),
  );
  const daysRemaining = Math.max(90 - daysPassed, 0);

  // Toggle task completion
  const toggleTask = (taskId) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId],
    );

    if (!completedTasks.includes(taskId)) {
      toast.success("🎉 Task completed! Keep up the great work!");
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority) => {
    const styles = {
      high: "bg-red-100 text-red-700 border-red-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200",
    };
    const icons = {
      high: <Flame size={12} />,
      medium: <Star size={12} />,
      low: <Clock size={12} />,
    };
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${styles[priority]}`}
      >
        {icons[priority]}
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-success-600 via-primary-500 to-secondary-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Calendar size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">
                90-Day Action Plan
              </h1>
              <p className="text-primary-100 text-lg">
                Your personalized credit improvement roadmap
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg">
                <Trophy size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">
                  Overall Progress
                </p>
                <p className="text-3xl font-bold text-primary-600">
                  {Math.round(overallProgress)}%
                </p>
                <ProgressBar
                  progress={overallProgress}
                  variant="primary"
                  size="sm"
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-success-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-success-500 to-success-600 flex items-center justify-center text-white shadow-lg">
                <CheckCircle size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Tasks Completed
                </p>
                <p className="text-3xl font-bold text-success-600">
                  {completedCount}/{totalTasks}
                </p>
                <p className="text-xs text-gray-500 mt-1">Keep going!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-warning-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Days Remaining
                </p>
                <p className="text-3xl font-bold text-warning-600">
                  {daysRemaining}
                </p>
                <p className="text-xs text-gray-500 mt-1">of 90 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Timeline */}
      <div className="space-y-6">
        {ACTION_PHASES.map((phase, phaseIndex) => {
          const PhaseIcon = phase.icon;
          const phaseTasks = phase.tasks;
          const phaseCompletedCount = phaseTasks.filter((t) =>
            completedTasks.includes(t.id),
          ).length;
          const phaseProgress = (phaseCompletedCount / phaseTasks.length) * 100;

          return (
            <Card
              key={phase.id}
              className={`border-2 ${phase.borderColor} overflow-hidden`}
            >
              {/* Phase Header */}
              <div className={`bg-linear-to-r ${phase.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <PhaseIcon size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{phase.name}</h2>
                      <p className="text-white/80">{phase.timeframe}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">
                      {phaseCompletedCount}/{phaseTasks.length}
                    </p>
                    <p className="text-sm text-white/80">tasks done</p>
                  </div>
                </div>
                <div className="mt-4">
                  <ProgressBar
                    progress={phaseProgress}
                    variant="primary"
                    size="md"
                    className="bg-white/20"
                  />
                </div>
              </div>

              {/* Phase Tasks */}
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {phaseTasks.map((task) => {
                    const isCompleted = completedTasks.includes(task.id);
                    const isExpanded = expandedTask === task.id;

                    return (
                      <div
                        key={task.id}
                        className={`transition-all ${isCompleted ? "bg-gray-50" : "bg-white hover:bg-gray-50/50"}`}
                      >
                        <div className="p-4 flex items-start gap-4">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`mt-1 w-6 h-6 rounded-full shrink-0 flex items-center justify-center border-2 transition-all ${
                              isCompleted
                                ? "bg-success-500 border-success-500 text-white"
                                : "border-gray-300 hover:border-primary-400"
                            }`}
                          >
                            {isCompleted && <CheckCircle size={14} />}
                          </button>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3
                                  className={`font-semibold ${isCompleted ? "text-gray-500 line-through" : "text-gray-900"}`}
                                >
                                  {task.title}
                                </h3>
                                <p
                                  className={`text-sm mt-1 ${isCompleted ? "text-gray-400" : "text-gray-600"}`}
                                >
                                  {task.description}
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                  {getPriorityBadge(task.priority)}
                                  <span className="text-xs text-gray-500">
                                    ⚡ {task.impact}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() =>
                                  setExpandedTask(isExpanded ? null : task.id)
                                }
                                className={`p-2 rounded-lg hover:bg-gray-100 transition-all ${isExpanded ? "bg-gray-100" : ""}`}
                              >
                                <ChevronRight
                                  size={20}
                                  className={`text-gray-400 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                                />
                              </button>
                            </div>

                            {/* Expanded Instructions */}
                            {isExpanded && (
                              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                  <BookOpen
                                    size={16}
                                    className="text-primary-600"
                                  />
                                  Step-by-Step Instructions
                                </h4>
                                <ol className="space-y-2">
                                  {task.instructions.map((instruction, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-3 text-sm text-gray-700"
                                    >
                                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 text-xs font-medium">
                                        {idx + 1}
                                      </span>
                                      {instruction}
                                    </li>
                                  ))}
                                </ol>
                                <div className="mt-4 flex gap-3">
                                  <Button
                                    size="sm"
                                    variant={
                                      isCompleted ? "outline" : "primary"
                                    }
                                    onClick={() => toggleTask(task.id)}
                                    leftIcon={
                                      isCompleted ? (
                                        <RotateCcw size={14} />
                                      ) : (
                                        <CheckCircle size={14} />
                                      )
                                    }
                                  >
                                    {isCompleted
                                      ? "Mark Incomplete"
                                      : "Mark Complete"}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Motivation Section */}
      <Card variant="success" className="border-2 border-success-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center shrink-0">
              <TrendingUp size={24} className="text-success-600" />
            </div>
            <div>
              <h4 className="font-semibold text-success-900 mb-2">
                Keep Up the Great Work!
              </h4>
              <p className="text-sm text-success-800 mb-4">
                Consistent effort over 90 days can significantly improve your
                credit profile. Remember: small steps lead to big changes. Focus
                on completing one task at a time, and you'll see progress before
                you know it!
              </p>
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  onClick={() => navigate("/dashboard/resources")}
                  rightIcon={<ArrowRight size={16} />}
                >
                  View Resources
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                >
                  Back to Dashboard
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditMonitoring;
