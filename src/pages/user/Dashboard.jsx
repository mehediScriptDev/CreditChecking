import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  FileText,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  Shield,
} from 'lucide-react';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import ProgressBar from '../../components/ui/ProgressBar';
import StatusBadge from '../../components/ui/StatusBadge';
import { userService } from '../../services/apiService';
import { getPageMetadata } from '../../utils/seo';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const metadata = getPageMetadata('dashboard');
  const navigate = useNavigate();
  const [, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    user: { firstName: 'User', lastName: '' },
    validationProgress: {
      reportValidation: { completed: false, progress: 0 },
      scoreValidation: { completed: false, progress: 0 },
      monitoring: { completed: false, progress: 0 },
    },
    recentActivities: [],
    stats: {
      totalValidations: 0,
      pendingTasks: 0,
      completionRate: 0,
    },
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const data = await userService.getDashboard();
      setDashboardData(data);
    } catch {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const validationSteps = [
    {
      id: 'report',
      title: 'Credit Report Validation',
      description: 'Upload and validate your credit reports from all 3 bureaus',
      icon: FileText,
      route: '/credit-report-validation',
      color: 'primary',
      completed: dashboardData.validationProgress.reportValidation.completed,
      progress: dashboardData.validationProgress.reportValidation.progress,
    },
    {
      id: 'score',
      title: 'Credit Score Validation',
      description: 'Answer 40 targeted questions to validate your credit score',
      icon: BarChart3,
      route: '/credit-score-validation',
      color: 'secondary',
      completed: dashboardData.validationProgress.scoreValidation.completed,
      progress: dashboardData.validationProgress.scoreValidation.progress,
    },
    {
      id: 'monitoring',
      title: '90-Day Credit Monitoring',
      description: 'Track your credit improvements over 90 days',
      icon: TrendingUp,
      route: '/credit-monitoring',
      color: 'success',
      completed: dashboardData.validationProgress.monitoring.completed,
      progress: dashboardData.validationProgress.monitoring.progress,
    },
  ];

  const quickActions = [
    {
      title: 'Start Report Validation',
      description: 'Upload your credit reports',
      icon: FileText,
      action: () => navigate('/credit-report-validation'),
      color: 'primary',
    },
    {
      title: 'Take Score Quiz',
      description: '40 questions assessment',
      icon: BarChart3,
      action: () => navigate('/credit-score-validation'),
      color: 'secondary',
    },
    {
      title: 'View Results',
      description: 'Check your profile type',
      icon: Shield,
      action: () => navigate('/results'),
      color: 'success',
    },
  ];

  return (
    <>
      <div className='space-y-6'>
        {/* Welcome Header */}
        <div className='bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white shadow-xl'>
          <h1 className='text-3xl font-heading font-bold mb-2'>
            Welcome back, {dashboardData.user.firstName}!
          </h1>
          <p className='text-primary-100 text-lg'>
            Continue your credit validation journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>
                    Total Validations
                  </p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {dashboardData.stats.totalValidations}
                  </p>
                </div>
                <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center'>
                  <CheckCircle2 className='text-primary-600' size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>Pending Tasks</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {dashboardData.stats.pendingTasks}
                  </p>
                </div>
                <div className='w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center'>
                  <Clock className='text-warning-600' size={24} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600 mb-1'>Completion Rate</p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {dashboardData.stats.completionRate}%
                  </p>
                </div>
                <div className='w-12 h-12 bg-success-100 rounded-full flex items-center justify-center'>
                  <TrendingUp className='text-success-600' size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Validation Journey */}
        <Card>
          <CardHeader>
            <CardTitle>Your Validation Journey</CardTitle>
            <CardDescription>
              Complete all three steps to get your credit profile type
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            {validationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className='relative'>
                  {/* Connector Line */}
                  {index < validationSteps.length - 1 && (
                    <div className='absolute left-6 top-16 w-0.5 h-20 bg-gray-200' />
                  )}

                  <div className='flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all'>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-success-100' : 'bg-gray-100'
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className='text-success-600' size={24} />
                      ) : (
                        <Icon className={`text-${step.color}-600`} size={24} />
                      )}
                    </div>

                    <div className='flex-1'>
                      <div className='flex items-center justify-between mb-2'>
                        <h3 className='font-semibold text-lg text-gray-900'>
                          {step.title}
                        </h3>
                        <StatusBadge
                          status={step.completed ? 'completed' : 'pending'}
                        />
                      </div>
                      <p className='text-gray-600 text-sm mb-3'>
                        {step.description}
                      </p>

                      {!step.completed && (
                        <>
                          <ProgressBar
                            progress={step.progress}
                            variant={step.color}
                            showPercentage
                            label='Progress'
                            size='md'
                            className='mb-3'
                          />
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => navigate(step.route)}
                            rightIcon={<ArrowRight size={16} />}
                          >
                            {step.progress > 0 ? 'Continue' : 'Start'}
                          </Button>
                        </>
                      )}

                      {step.completed && (
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => navigate(step.route)}
                        >
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Jump to any validation step</CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.title}
                    onClick={action.action}
                    className='w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-left'
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-${action.color}-100 flex items-center justify-center`}
                    >
                      <Icon className={`text-${action.color}-600`} size={20} />
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900'>
                        {action.title}
                      </h4>
                      <p className='text-sm text-gray-600'>
                        {action.description}
                      </p>
                    </div>
                    <ArrowRight className='text-gray-400' size={20} />
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions</CardDescription>
            </CardHeader>
            <CardContent>
              {dashboardData.recentActivities.length === 0 ? (
                <div className='text-center py-8'>
                  <AlertCircle
                    className='text-gray-400 mx-auto mb-3'
                    size={48}
                  />
                  <p className='text-gray-600'>No recent activity</p>
                  <p className='text-sm text-gray-500 mt-1'>
                    Start a validation to see your activity here
                  </p>
                </div>
              ) : (
                <div className='space-y-3'>
                  {dashboardData.recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'
                    >
                      <div className='w-2 h-2 rounded-full bg-primary-600 mt-2' />
                      <div className='flex-1'>
                        <p className='text-sm text-gray-900'>
                          {activity.title}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Educational Notice */}
        <Card variant='warning'>
          <CardContent className='p-6'>
            <div className='flex items-start gap-4'>
              <AlertCircle
                className='text-warning-600 flex-shrink-0'
                size={24}
              />
              <div>
                <h4 className='font-semibold text-warning-900 mb-1'>
                  Educational Purpose Only
                </h4>
                <p className='text-sm text-warning-800'>
                  This platform is designed for educational purposes to help you
                  understand credit validation. We do not file disputes or
                  provide legal/financial advice. Always consult with certified
                  professionals for credit repair services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
