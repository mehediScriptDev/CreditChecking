import { Outlet, Link, useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Calendar,
  Book,
  LogOut,
  User,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { removeToken, removeUser, getUser } from '../utils/storage';
import Button from '../components/ui/Button';
import { toast } from 'react-toastify';

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getUser() || {
    firstName: 'User',
    lastName: '',
    email: 'user@example.com',
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    removeToken();
    removeUser();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <FileText size={20} />,
      label: 'Report Validation',
      path: '/credit-report-validation',
    },
    {
      icon: <BarChart3 size={20} />,
      label: 'Score Validation',
      path: '/credit-score-validation',
    },
    {
      icon: <Calendar size={20} />,
      label: '90-Day Monitoring',
      path: '/monitoring',
    },
    { icon: <Book size={20} />, label: 'Resources', path: '/resources' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className='min-h-screen flex bg-gray-50'>
      {/* Sidebar - Desktop */}
      <aside className='hidden lg:flex lg:flex-col lg:w-64 bg-gray-900 text-white'>
        <div className='flex-1 flex flex-col'>
          {/* Logo */}
          <div className='p-6 border-b border-gray-800'>
            <Link to='/dashboard' className='flex items-center gap-3'>
              <img src='/logo.png' alt='Logo' className='h-10' />
              <span className='font-heading font-bold text-lg'>No Dispute</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4 py-6 space-y-1'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className='font-medium'>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className='p-4 border-t border-gray-800'>
            <div className='mb-3'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-10 h-10 bg-linear-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold'>
                  {user.firstName?.[0]}
                  {user.lastName?.[0]}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='font-medium truncate'>
                    {user.firstName} {user.lastName}
                  </p>
                  <p className='text-xs text-gray-400 truncate'>{user.email}</p>
                </div>
              </div>
            </div>
            <Button
              variant='outline'
              size='sm'
              fullWidth
              leftIcon={<LogOut size={16} />}
              onClick={handleLogout}
              className='border-gray-700 text-white hover:bg-gray-800'
            >
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          <div className='p-4 border-b border-gray-800 flex items-center justify-between'>
            <Link to='/dashboard' className='flex items-center gap-3'>
              <img src='/logo.png' alt='Logo' className='h-8' />
              <span className='font-heading font-bold'>No Dispute</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className='text-gray-400 hover:text-white'
            >
              <X size={24} />
            </button>
          </div>

          <nav className='flex-1 px-4 py-6 space-y-1'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className='p-4 border-t border-gray-800'>
            <Button
              variant='outline'
              size='sm'
              fullWidth
              leftIcon={<LogOut size={16} />}
              onClick={handleLogout}
              className='border-gray-700 text-white hover:bg-gray-800'
            >
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col min-w-0'>
        {/* Top Header - Mobile */}
        <header className='bg-white border-b border-gray-200 lg:hidden sticky top-0 z-30'>
          <div className='flex items-center justify-between p-4'>
            <button
              onClick={() => setSidebarOpen(true)}
              className='text-gray-600 hover:text-gray-900'
            >
              <Menu size={24} />
            </button>
            <Link to='/dashboard'>
              <img src='/logo.png' alt='Logo' className='h-8' />
            </Link>
            <div className='w-6' /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Page Content */}
        <main className='flex-1 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
