import { Upload, Eye, BarChart3, Calendar } from "lucide-react";

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

const HowItWorksSection = () => {
  return (
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

        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
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

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 relative z-10">
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
                  <p className="text-gray-300 text-sm leading-relaxed grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
