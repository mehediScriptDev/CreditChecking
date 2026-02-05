import { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Activity,
  Download,
} from 'lucide-react';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../Components/ui/Card';
import Button from '../../Components/ui/Button';
import Table, { TablePagination } from '../../Components/ui/Table';
import StatusBadge from '../../Components/ui/StatusBadge';
import { adminService } from '../../services/apiService';
import { getPageMetadata } from '../../utils/seo';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const metadata = getPageMetadata('adminDashboard');
  const [, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalUsers: 0,
      activeUsers: 0,
      totalValidations: 0,
      completionRate: 0,
    },
    recentUsers: [],
    systemHealth: {
      uptime: '99.9%',
      responseTime: '125ms',
      errorRate: '0.1%',
    },
    activityLog: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const data = await adminService.getDashboard();
      setDashboardData(data);
    } catch {
      toast.error('Failed to load admin dashboard');
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      title: 'Total Users',
      value: dashboardData.stats.totalUsers,
      icon: Users,
      color: 'primary',
      change: '+12%',
    },
    {
      title: 'Active Users',
      value: dashboardData.stats.activeUsers,
      icon: Activity,
      color: 'success',
      change: '+8%',
    },
    {
      title: 'Total Validations',
      value: dashboardData.stats.totalValidations,
      icon: FileText,
      color: 'secondary',
      change: '+24%',
    },
    {
      title: 'Completion Rate',
      value: `${dashboardData.stats.completionRate}%`,
      icon: TrendingUp,
      color: 'success',
      change: '+5%',
    },
  ];

  const userColumns = [
    { key: 'id', label: 'User ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'validations', label: 'Validations' },
    { key: 'status', label: 'Status' },
  ];

  const mockUsers = [
    {
      id: 'USR001',
      name: 'John Doe',
      email: 'john@example.com',
      joinDate: '2024-01-15',
      validations: 3,
      status: <StatusBadge status='completed' />,
    },
    {
      id: 'USR002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      joinDate: '2024-01-18',
      validations: 1,
      status: <StatusBadge status='pending' />,
    },
    {
      id: 'USR003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      joinDate: '2024-01-20',
      validations: 2,
      status: <StatusBadge status='completed' />,
    },
  ];

  return (
    <>
      <div className='space-y-6'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-heading font-bold text-gray-900'>
              Admin Dashboard
            </h1>
            <p className='text-gray-600 mt-1'>
              Manage users and monitor system performance
            </p>
          </div>
          <Button variant='primary' leftIcon={<Download size={20} />}>
            Export Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} elevation='md' hoverable>
                <CardContent className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                        stat.color === 'primary'
                          ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                          : stat.color === 'success'
                            ? 'bg-gradient-to-br from-success-600 to-success-500'
                            : stat.color === 'secondary'
                              ? 'bg-gradient-to-br from-secondary-500 to-secondary-600'
                              : 'bg-gradient-to-br from-info-500 to-info-600'
                      }`}
                    >
                      <Icon className='text-white' size={28} />
                    </div>
                    <span className='text-sm font-bold px-3 py-1 bg-success-100 text-success-700 rounded-full'>
                      {stat.change}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600 mb-1 font-medium'>
                    {stat.title}
                  </p>
                  <p className='text-3xl font-bold text-gray-900'>
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Health */}
        <Card elevation='lg'>
          <CardHeader>
            <CardTitle className='text-2xl'>System Health</CardTitle>
            <CardDescription className='text-base'>
              Real-time system performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center shadow-lg'>
                  <CheckCircle2 className='text-white' size={28} />
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>Uptime</p>
                  <p className='text-2xl font-bold bg-gradient-to-r from-success-600 to-success-500 bg-clip-text text-transparent'>
                    {dashboardData.systemHealth.uptime}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg'>
                  <Clock className='text-white' size={28} />
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>
                    Response Time
                  </p>
                  <p className='text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent'>
                    {dashboardData.systemHealth.responseTime}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-warning-500 to-orange-500 flex items-center justify-center shadow-lg'>
                  <AlertCircle className='text-white' size={28} />
                </div>
                <div>
                  <p className='text-sm text-gray-600 font-medium'>
                    Error Rate
                  </p>
                  <p className='text-2xl font-bold bg-gradient-to-r from-warning-500 to-orange-500 bg-clip-text text-transparent'>
                    {dashboardData.systemHealth.errorRate}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card elevation='lg'>
          <CardHeader>
            <CardTitle className='text-2xl'>User Management</CardTitle>
            <CardDescription className='text-base'>
              Recent user registrations and activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table columns={userColumns} data={mockUsers} hoverable striped />
            <div className='mt-4'>
              <TablePagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                itemsPerPage={10}
                totalItems={100}
              />
            </div>
          </CardContent>
        </Card>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Recent Activity Log */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>System and user activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                {dashboardData.activityLog.length === 0 ? (
                  <div className='text-center py-8'>
                    <Activity
                      className='text-gray-400 mx-auto mb-3'
                      size={48}
                    />
                    <p className='text-gray-600'>No recent activity</p>
                  </div>
                ) : (
                  dashboardData.activityLog.map((log, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'
                    >
                      <div className='w-2 h-2 rounded-full bg-primary-600 mt-2' />
                      <div className='flex-1'>
                        <p className='text-sm text-gray-900'>{log.action}</p>
                        <p className='text-xs text-gray-500'>{log.timestamp}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Statistics</CardTitle>
              <CardDescription>Key metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <span className='text-sm font-medium text-gray-700'>
                    New Users (Today)
                  </span>
                  <span className='text-xl font-bold text-primary-600'>12</span>
                </div>
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <span className='text-sm font-medium text-gray-700'>
                    Validations (Today)
                  </span>
                  <span className='text-xl font-bold text-secondary-600'>
                    48
                  </span>
                </div>
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <span className='text-sm font-medium text-gray-700'>
                    Support Tickets
                  </span>
                  <span className='text-xl font-bold text-warning-600'>3</span>
                </div>
                <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                  <span className='text-sm font-medium text-gray-700'>
                    System Alerts
                  </span>
                  <span className='text-xl font-bold text-success-600'>0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
