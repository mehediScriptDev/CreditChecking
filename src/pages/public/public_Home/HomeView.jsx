import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  BarChart3,
  TrendingUp,
  Upload,
  Eye,
  Calendar,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../../components/ui/Card';
import { getPageMetadata } from '../../../utils/seo';

const HomeView = () => {
  const metadata = getPageMetadata('home');

  const features = [
    {
      icon: <Shield size={40} className='text-primary-600' />,
      title: 'Credit Report Validation',
      description:
        'Side-by-side comparison of Equifax, TransUnion, and Experian reports',
      details: [
        'Bureau Comparison',
        'PDF Upload',
        'Manual Entry',
        'Traffic-Light Logic',
      ],
      link: '/login',
    },
    {
      icon: <BarChart3 size={40} className='text-secondary-600' />,
      title: 'Credit Score Validation',
      description:
        '40 automated scoring questions mapped from your report data',
      details: [
        '5 Categories',
        '40 Questions',
        'Score Analysis',
        'Profile Type',
      ],
      link: '/login',
    },
    {
      icon: <TrendingUp size={40} className='text-success-600' />,
      title: '90-Day Action Plan',
      description: 'Educational roadmap with results and correction steps',
      details: [
        'Immediate Actions',
        'Short-term Goals',
        'Long-term Strategy',
        'Progress Tracking',
      ],
      link: '/login',
    },
  ];

  const steps = [
    {
      number: '1',
      icon: <Upload size={28} />,
      title: 'Upload Reports',
      description:
        'Get all 3 credit reports from Equifax, TransUnion, and Experian',
    },
    {
      number: '2',
      icon: <Eye size={28} />,
      title: 'Compare & Validate',
      description: 'Side-by-side comparison with automated mismatch detection',
    },
    {
      number: '3',
      icon: <BarChart3 size={28} />,
      title: 'Answer Questions',
      description: 'Complete 40 questions to understand your credit score',
    },
    {
      number: '4',
      icon: <Calendar size={28} />,
      title: 'Get Your Plan',
      description: 'Receive personalized 90-day improvement recommendations',
    },
  ];

  const benefits = [
    'Educational platform - learn how lenders view your credit',
    'No disputes filed automatically - you stay in control',
    'Side-by-side bureau comparison with traffic-light validation',
    'Understand what data impacts your credit score',
    'Personalized credit profile type (Freshman, Sophomore, Junior, Senior)',
    'Step-by-step guidance and expert resources',
  ];

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
      </Helmet>

      <div className='min-h-screen bg-linear-to-br from-primary-50 via-white to-secondary-50'>
        {/* Hero Section */}
        <section className='pt-24 pb-24 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 animate-slideDown'>
              <img
                src='/logo.png'
                alt='No Dispute Credit Logo'
                className='h-24 sm:h-32 mx-auto mb-8'
              />
            </div>

            <div className='text-center max-w-4xl mx-auto'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 animate-slideUp leading-tight'>
                No Dispute Credit
                <span className='block text-primary-600 mt-2'>
                  Validation System
                </span>
              </h1>

              <p className='text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 animate-slideUp'>
                Educational Platform for Credit Report Analysis
              </p>

              <p className='text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto animate-fadeIn'>
                Learn how credit bureaus report your data and understand what
                impacts your credit score through our comprehensive validation
                system
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slideUp'>
                <Link to='/register'>
                  <Button
                    size='xl'
                    variant='primary'
                    rightIcon={<ArrowRight size={24} />}
                    className='w-full sm:w-auto'
                  >
                    Start My Credit Assessment
                  </Button>
                </Link>
                <Link to='/resources'>
                  <Button
                    size='xl'
                    variant='outline'
                    className='w-full sm:w-auto'
                  >
                    View Resources
                  </Button>
                </Link>
              </div>

              <div className='inline-flex items-center gap-2 bg-warning-100 text-warning-800 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium animate-fadeIn max-w-full'>
                <span className='text-left sm:text-center'>
                  Educational tool only • No disputes filed • No legal advice •
                  No guarantees
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                Three Powerful Modules
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive credit education system designed to help you
                understand your credit profile
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  hoverable
                  elevation='lg'
                  className='animate-slideUp border-2 border-transparent hover:border-primary-200'
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className='mb-6 p-4 bg-linear-to-br from-primary-50 to-secondary-50 rounded-xl inline-block'>
                      {feature.icon}
                    </div>
                    <CardTitle className='text-2xl mb-3'>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className='text-base'>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 mb-6'>
                      {feature.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className='flex items-center gap-2 text-base text-gray-700'
                        >
                          <CheckCircle
                            size={16}
                            className='text-success-600 shrink-0'
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={feature.link}>
                      <Button
                        variant='primary'
                        fullWidth
                        rightIcon={<ArrowRight size={18} />}
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
        <section className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                How It Works
              </h2>
              <p className='text-lg sm:text-xl text-gray-600'>
                Simple 4-step process to validate and understand your credit
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className='text-center animate-slideUp'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className='relative mb-4 sm:mb-6'>
                    <div className='w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto shadow-lg'>
                      {step.number}
                    </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-primary-100 rounded-full -z-10 opacity-50'></div>
                  </div>
                  <div className='mb-3 sm:mb-4 flex justify-center text-primary-600'>
                    {step.icon}
                  </div>
                  <h3 className='text-lg sm:text-xl font-heading font-semibold text-gray-900 mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600'>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'>
                Why Choose No Dispute Credit?
              </h2>
              <p className='text-lg sm:text-xl text-gray-600'>
                The educational platform designed with your success in mind
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-success-50 to-white rounded-xl border border-success-100 animate-slideLeft'
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className='shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-success-600 rounded-full flex items-center justify-center'>
                    <CheckCircle size={18} className='text-white' />
                  </div>
                  <p className='text-gray-700 text-base sm:text-lg font-medium pt-0.5 sm:pt-1'>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden'>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 sm:mb-6'>
              Ready to Understand Your Credit?
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl text-white opacity-90 mb-8 sm:mb-10'>
              Join thousands learning how credit bureaus report data and what
              impacts their scores
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/register' className='w-full sm:w-auto'>
                <Button
                  size='xl'
                  className='bg-white text-primary-600 hover:bg-gray-50 shadow-2xl w-full sm:w-auto'
                  rightIcon={<ArrowRight size={24} />}
                >
                  Start Your Journey - It's Free
                </Button>
              </Link>
              <Link to='/resources' className='w-full sm:w-auto'>
                <Button
                  size='xl'
                  variant='outline'
                  className='border-2 border-white text-white hover:bg-white hover:text-primary-600 w-full sm:w-auto'
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <p className='text-white text-xs sm:text-sm mt-6 sm:mt-8 opacity-75'>
              No credit card required • Start immediately • Cancel anytime
            </p>
          </div>
        </section>

        {/* Educational Disclaimer */}
        <section className='py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-4 sm:mb-6'>
              <h3 className='text-xl sm:text-2xl font-heading font-bold mb-2 sm:mb-3'>
                Educational Disclaimer
              </h3>
            </div>
            <div className='bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700'>
              <p className='text-sm sm:text-base text-gray-300 leading-relaxed text-center'>
                This is an educational tool. <strong>No Dispute Credit</strong>{' '}
                does not file disputes, provide legal/tax/financial advice, or
                guarantee outcomes. We do not submit data to credit bureaus.
                This system teaches users how lenders and scoring models
                interpret credit data. All information provided is for
                educational purposes only.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeView;
