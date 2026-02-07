import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Button from "../../../../Components/ui/Button";

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

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-24 bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
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
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary-500/20 text-primary-400 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            POWERFUL MODULES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 md:mb-4 px-2">
            Three Steps to Credit Clarity
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Our comprehensive system guides you through understanding and
            improving your credit profile
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Card Content */}
              <div className="pt-8 pb-4 px-8">
                <div
                  className={`xl:w-20 xl:h-20 h-16 w-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg  transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="px-8 pb-8">
                <ul className="space-y-3 mb-8">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-linear-to-br ${feature.gradient} flex items-center justify-center`}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
