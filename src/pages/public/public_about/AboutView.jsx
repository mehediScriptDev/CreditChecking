import React from 'react';
import {
  CheckCircle,
  Shield,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Target,
  Clock,
  AlertCircle,
  FileText,
} from 'lucide-react';
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../Components/ui/Card';
import Button from '../../../Components/ui/Button';
import { Link } from 'react-router';

const AboutView = () => {
  const keyPoints = [
    "That's old-school",
    "That's slow, and",
    "It doesn't always work.",
  ];

  const focusAreas = [
    'On-time payments',
    'Balance and utilization',
    'Age of accounts',
    'Mix of credit types',
    'New credit activity',
  ];

  const whatWeDo = [
    'We simplify credit so you finally understand how it really works.',
    'We show you how to read your Equifax, TransUnion, and Experian reports.',
    'We teach you how to validate your credit data before making any decisions.',
    'We walk you through how lenders and FICO evaluate your credit.',
    'We help you build a stronger, cleaner, more strategic credit profile—DIY and dispute-free.',
    'We give you step-by-step plans designed to safely boost your credit scores over time.',
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Upload Your Reports',
      description:
        'Upload 1, 2, or all 3 of your AnnualCreditReport.com Equifax, TransUnion, Experian credit reports.',
    },
    {
      number: '2',
      title: 'Analyze & Validate',
      description:
        'Your uploaded credit report data is analyzed and validated for accuracy.',
    },
    {
      number: '3',
      title: 'Validate Your Data',
      description:
        'Use our guided validation steps to review your reports for accuracy.',
    },
    {
      number: '4',
      title: 'Apply Boost Method',
      description:
        'Follow your credit score model-aligned action steps for safe, strategic improvement.',
    },
    {
      number: '5',
      title: 'Track Progress',
      description:
        'Use the Credit Improvement Tracker to monitor changes and stay consistent.',
    },
    {
      number: '6',
      title: 'Build Strong Habits',
      description:
        'No disputes. No shortcuts. Just real, sustainable credit growth.',
    },
  ];

  const whoWeHelp = [
    "Beginners who feel overwhelmed and don't know where to start",
    'People tired of expensive dispute-based credit repair services',
    'Individuals who want DIY guidance without legal risk or confusion',
    'Those with limited credit history (Credit Invisible or Thin File)',
    'People rebuilding after financial setbacks',
    'Anyone who wants a lender-approved, dispute-free approach',
    'Users committed to building long-term, sustainable credit strength',
  ];

  const whatWeDontDo = [
    {
      icon: <AlertCircle size={32} />,
      title: 'No Score Guarantees',
      description:
        'We do not guarantee specific credit score increases, loan approvals, or definite timeline results. Credit improvement varies widely based on individual circumstances and diligent application of principles.',
    },
    {
      icon: <FileText size={32} />,
      title: 'No Legal or Tax Advice',
      description:
        'Our curriculum is educational and informational. We are not qualified to offer, and therefore do not provide, any legal or tax advice. Always consult a licensed professional for these matters.',
    },
    {
      icon: <Shield size={32} />,
      title: 'No Automatic Disputes',
      description:
        'We do not submit credit disputes on your behalf. Our "No Dispute" method focuses on building positive credit behavior. Any dispute actions are initiated by you, with your explicit, written direction, using the knowledge we provide.',
    },
    {
      icon: <Users size={32} />,
      title: 'No Unnecessary Data',
      description:
        'Your privacy and security are paramount. We only request the sensitive personal information that is absolutely necessary for your enrollment and participation in our educational programs.',
    },
  ];

  return (
    <div className='min-h-screen bg-linear-to-br from-primary-50 via-white to-secondary-50'>
      {/* Hero Section - Let's Be Honest */}
      <section className='pt-32 pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-8 animate-slideUp'>
              Let's Be Honest...
            </h1>
            <p className='text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed animate-fadeIn'>
              Most people think 'fixing' credit means arguing with the credit
              bureaus.
            </p>
            <div className='space-y-3 mb-8'>
              {keyPoints.map((point, index) => (
                <p
                  key={index}
                  className='text-lg sm:text-xl text-gray-600 font-medium animate-slideLeft'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {point}
                </p>
              ))}
            </div>
            <div className='bg-gradient-to-r from-warning-50 to-danger-50 rounded-2xl p-8 sm:p-12 mb-8 animate-slideUp border border-warning-200'>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6'>
                We saw too many people trapped in that same exhausting repair
                cycle — spending hundreds of dollars for something they could
                absolutely do themselves, but never learning the real skills
                they needed to succeed.
              </p>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6'>
                We watched families struggle, unable to qualify for better
                interest rates.
              </p>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-6'>
                We saw entrepreneurs held back from business loans.
              </p>
              <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
                We met young adults who couldn't get approved for their first
                apartment because nobody ever taught them how credit really
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Changer Section */}
      <section className='py-16 sm:py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6'>
                UNTIL…
              </h2>
              <p className='text-xl sm:text-2xl text-primary-600 font-semibold mb-8'>
                We realized the credit repair industry had it backwards.
              </p>
            </div>

            <Card elevation='lg' className='border-2 border-primary-200 mb-8'>
              <CardContent className='p-8 sm:p-12'>
                <p className='text-lg sm:text-xl text-gray-700 leading-relaxed mb-6'>
                  People don't need someone to 'fix' their credit for them. They
                  need <strong>education</strong>. They need{' '}
                  <strong>transparency</strong>. They need practical tools and
                  real understanding – not empty promises and dispute letter
                  templates that rarely work.
                </p>
                <div className='bg-success-50 rounded-xl p-6 border border-success-200'>
                  <p className='text-center text-lg font-semibold text-success-800'>
                    This isn't repair. This is education that makes you your own
                    best credit advocate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className='bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 sm:p-12 text-white'>
              <h3 className='text-2xl sm:text-3xl font-heading font-bold mb-6'>
                That's when we decided to change the game
              </h3>
              <p className='text-base sm:text-lg leading-relaxed mb-6'>
                We built something different: a credit data validation system
                that empowers you with knowledge, provides clear, actionable
                strategies, and teaches you skills that last a lifetime.
              </p>
              <p className='text-base sm:text-lg leading-relaxed mb-8'>
                <strong>NoDisputeCredit.com</strong> isn't another quick-fix
                credit repair company — it's credit school.
              </p>

              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6'>
                <p className='text-lg mb-4'>
                  Instead of fighting over what disappears, you'll learn how to
                  validate the data that lenders really grade you on based on
                  five key areas:
                </p>
                <ul className='space-y-2'>
                  {focusAreas.map((area, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <CheckCircle size={20} className='flex-shrink-0' />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className='text-sm italic'>
                Your NoDisputeCredit.com "validation report card" will come from
                your assessment of how you are performing in these categories,
                not from shortcuts or disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 sm:py-20 bg-linear-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
              About No Dispute Credit
            </h2>
          </div>

          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
            {/* Our Mission */}
            <Card elevation='lg' className='h-full'>
              <CardHeader className='text-center'>
                <div className='mb-6 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl inline-block mx-auto'>
                  <Target size={40} className='text-primary-600' />
                </div>
                <CardTitle className='text-2xl mb-3'>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  We're transforming credit education by teaching you what
                  lenders actually look for — not through disputes, shortcuts,
                  or gimmicks, but through genuine understanding and strategic
                  credit report data management.
                </p>
                <p className='text-gray-700 leading-relaxed'>
                  Built by a former mortgage underwriter who knows exactly how
                  credit decisions are made, our approach focuses on analyzing
                  credit report data to ensure your credit profile is correctly
                  set up. We then offer education-first strategies that create
                  lasting results, not temporary fixes.
                </p>
              </CardContent>
            </Card>

            {/* Why We're Different */}
            <Card elevation='lg' className='h-full'>
              <CardHeader className='text-center'>
                <div className='mb-6 p-4 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl inline-block mx-auto'>
                  <Award size={40} className='text-success-600' />
                </div>
                <CardTitle className='text-2xl mb-3'>
                  Why We're Different
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Unlike traditional credit repair companies that rely on
                  dispute letters, we teach you how credit scoring models like
                  FICO and Vantage Score really work and how to build credit
                  strength from the inside out.
                </p>
                <p className='text-gray-700 leading-relaxed mb-4'>
                  Our methods are fully compliant, underwriter-approved, and
                  designed to help you understand every factor that impacts your
                  creditworthiness.
                </p>
                <p className='text-gray-700 font-semibold'>
                  No disputes. No confusion. Just clear, actionable education.
                </p>
                <div className='mt-6 bg-warning-50 rounded-lg p-4 border border-warning-200'>
                  <p className='text-xs text-gray-600 italic'>
                    Educational purposes only. We don't offer credit repair or
                    dispute services. This course teaches you how to understand
                    and manage your credit confidently and compliantly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className='py-16 sm:py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                What We Do
              </h2>
              <p className='text-xl text-gray-600'>
                We teach everyday people how to analyze, understand, validate,
                and strengthen their credit profile using education—not
                disputes.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 mb-12'>
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-white rounded-lg border border-primary-100'
                >
                  <CheckCircle
                    size={24}
                    className='text-primary-600 flex-shrink-0 mt-1'
                  />
                  <p className='text-gray-700'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-16 sm:py-20 bg-linear-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-lg sm:text-xl text-gray-600'>
              Your NoDisputeCredit.com validation journey follows a simple,
              guided path:
            </p>
          </div>

          <div className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {howItWorks.map((step, index) => (
              <Card
                key={index}
                elevation='md'
                className='text-center border-2 border-transparent hover:border-primary-200 transition-all'
              >
                <CardContent className='p-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4'>
                    {step.number}
                  </div>
                  <h3 className='text-lg font-heading font-semibold text-gray-900 mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className='py-16 sm:py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                Who We Help
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                We help anyone who wants to take control of their credit the
                right way — through education, clarity, and strategy.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 mb-8'>
              {whoWeHelp.map((person, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-5 bg-gradient-to-br from-success-50 to-white rounded-xl border border-success-100'
                >
                  <Users
                    size={24}
                    className='text-success-600 flex-shrink-0 mt-1'
                  />
                  <p className='text-gray-700 font-medium'>{person}</p>
                </div>
              ))}
            </div>

            <div className='bg-warning-100 rounded-xl p-6 border-l-4 border-warning-500'>
              <p className='text-sm text-gray-700 font-medium'>
                <strong>Important:</strong> We do not promise specific score
                increases or approvals. Everyone's profile and outcomes are
                different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className='py-16 sm:py-20 bg-linear-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                What We Don't Do
              </h2>
              <p className='text-xl text-gray-600'>
                Our commitment to transparency means being clear about what we
                offer and, just as importantly, what we don't.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-6 mb-8'>
              {whatWeDontDo.map((item, index) => (
                <Card key={index} elevation='lg' className='h-full'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 bg-danger-100 rounded-lg text-danger-600'>
                        {item.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                          {item.title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className='bg-success-50 rounded-xl p-8 border border-success-200 text-center'>
              <p className='text-lg font-semibold text-success-800'>
                This isn't repair. This is education that makes you your own
                best credit advocate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 sm:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <BookOpen size={64} className='mx-auto mb-6 text-white' />
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6'>
              Ready to Start Your Credit Education?
            </h2>
            <p className='text-lg sm:text-xl text-white opacity-90 mb-10'>
              Join thousands learning how to take control of their credit the
              right way
            </p>
            <Link to='/register'>
              <Button
                size='xl'
                className='!bg-white !text-primary-600 hover:!bg-gray-50 shadow-2xl'
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
