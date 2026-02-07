import { Link } from "react-router";
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Lightbulb,
  GraduationCap,
  ScrollText,
  Calculator,
  HelpCircle,
} from "lucide-react";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

const Resources = () => {
  // Educational Guides
  const guides = [
    {
      id: 1,
      title: "Understanding Your Credit Score",
      description:
        "Learn how FICO and VantageScore calculate your credit score and what factors matter most.",
      category: "Fundamentals",
      readTime: "10 min",
      icon: <GraduationCap size={24} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Reading Your Credit Report",
      description:
        "A complete walkthrough of how to read and interpret your Equifax, TransUnion, and Experian reports.",
      category: "Fundamentals",
      readTime: "15 min",
      icon: <ScrollText size={24} />,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "The 5 Credit Score Factors",
      description:
        "Deep dive into payment history, credit utilization, length of history, credit mix, and new credit.",
      category: "Score Factors",
      readTime: "20 min",
      icon: <Calculator size={24} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Credit Utilization Strategies",
      description:
        "Learn how to optimize your credit card balances for maximum score improvement.",
      category: "Strategies",
      readTime: "8 min",
      icon: <Lightbulb size={24} />,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Building Credit from Scratch",
      description:
        "A step-by-step guide for those starting their credit journey or rebuilding after setbacks.",
      category: "Getting Started",
      readTime: "12 min",
      icon: <Star size={24} />,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      title: "Common Credit Myths Debunked",
      description:
        "Separate fact from fiction with our guide to credit misconceptions.",
      category: "Education",
      readTime: "7 min",
      icon: <HelpCircle size={24} />,
      color: "from-teal-500 to-teal-600",
    },
  ];

  // Downloadable Resources
  const downloads = [
    {
      title: "Credit Improvement Checklist",
      description:
        "A printable checklist to track your credit improvement journey",
      type: "PDF",
      icon: <FileText size={20} />,
    },
    {
      title: "90-Day Credit Action Plan Template",
      description: "Customizable template for your personalized action plan",
      type: "PDF",
      icon: <FileText size={20} />,
    },
    {
      title: "Credit Score Tracker Spreadsheet",
      description:
        "Track your scores over time with this easy-to-use spreadsheet",
      type: "Excel",
      icon: <FileText size={20} />,
    },
    {
      title: "Bureau Contact Information",
      description: "Contact details for Equifax, TransUnion, and Experian",
      type: "PDF",
      icon: <FileText size={20} />,
    },
  ];

  // External Resources
  const externalLinks = [
    {
      title: "AnnualCreditReport.com",
      description: "Get your free credit reports from all 3 bureaus",
      url: "https://www.annualcreditreport.com",
    },
    {
      title: "Consumer Financial Protection Bureau",
      description: "Official government resource for financial education",
      url: "https://www.consumerfinance.gov",
    },
    {
      title: "MyFICO Education Center",
      description: "Learn directly from the creators of the FICO score",
      url: "https://www.myfico.com/credit-education",
    },
  ];

  // FAQ Items
  const faqs = [
    {
      question: "How often should I check my credit reports?",
      answer:
        "We recommend checking your credit reports at least once every 4 months - rotating between the three bureaus. This way you can monitor your credit throughout the year for free.",
    },
    {
      question:
        "What's the difference between a credit report and credit score?",
      answer:
        "Your credit report is a detailed record of your credit history, while your credit score is a numerical representation calculated from the data in your report. Lenders use both to make decisions.",
    },
    {
      question: "How long do negative items stay on my credit report?",
      answer:
        "Most negative items remain for 7 years. Bankruptcies can stay for 7-10 years depending on the type. However, the impact on your score diminishes over time as items age.",
    },
    {
      question: "Can I improve my credit score without disputing?",
      answer:
        'Absolutely! Our "No Dispute" approach focuses on building positive credit habits, reducing utilization, maintaining on-time payments, and strategic credit management - all of which can significantly improve your score.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">Resources</h1>
              <p className="text-blue-100 text-lg">
                Educational materials to help you understand and improve your
                credit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Guides */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-primary-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-900">
            Educational Guides
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Card key={guide.id} hoverable className="group cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${guide.color} flex items-center justify-center text-white`}
                  >
                    {guide.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={14} />
                    {guide.readTime} read
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    rightIcon={<ArrowRight size={14} />}
                  >
                    Read Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Downloads & External Resources */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Downloadable Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Download className="text-success-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">
              Downloadable Resources
            </h2>
          </div>
          <Card>
            <CardContent className="p-0 divide-y divide-gray-100">
              {downloads.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center text-success-600">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {item.type}
                    </span>
                    <Download size={18} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* External Resources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="text-info-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Helpful Links</h2>
          </div>
          <Card>
            <CardContent className="p-0 divide-y divide-gray-100">
              {externalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-info-100 rounded-lg flex items-center justify-center text-info-600">
                    <ExternalLink size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {link.title}
                    </h4>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400" />
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Video Resources Placeholder */}
          <div className="mt-6">
            <Card variant="info" className="border-2 border-info-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Video className="text-info-600 shrink-0" size={32} />
                  <div>
                    <h4 className="font-semibold text-info-900 mb-1">
                      Video Library Coming Soon
                    </h4>
                    <p className="text-sm text-info-700">
                      We're working on a comprehensive video library with
                      tutorials, walkthroughs, and expert advice. Stay tuned!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="text-warning-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-l-4 border-l-warning-400">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-warning-500 shrink-0">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-gray-600 pl-6">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card variant="success" className="border-2 border-success-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="text-success-600 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-success-900 mb-2">
            Need More Help?
          </h3>
          <p className="text-success-800 mb-6 max-w-2xl mx-auto">
            Our validation system provides personalized guidance based on your
            credit profile. Complete your credit report validation to get
            tailored recommendations.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard/credit-report-validation">
              <Button variant="primary" rightIcon={<ArrowRight size={18} />}>
                Start Validation
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;
