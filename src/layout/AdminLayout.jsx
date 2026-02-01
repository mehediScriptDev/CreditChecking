import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Menu,
  X,
  Shield,
} from 'lucide-react';
import { authService } from '../services/apiService';
import { clearAuth } from '../utils/storage';
import { toast } from 'react-toastify';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'User Management', path: '/admin/users' },
    { icon: FileText, label: 'Validations', path: '/admin/validations' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = async () => {
    try {
      await authService.logout();
      clearAuth();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Mobile Menu Button */}
      <div className='lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Shield className='text-primary-600' size={28} />
            <span className='font-heading font-bold text-lg text-gray-900'>
              Admin Panel
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className='h-16 flex items-center gap-2 px-6 border-b border-gray-200'>
          <Shield className='text-primary-600' size={32} />
          <div>
            <h1 className='font-heading font-bold text-lg text-gray-900'>
              Admin Panel
            </h1>
            <p className='text-xs text-gray-500'>No Dispute Credit</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className='p-4 space-y-1'>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className='font-medium'>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Admin Info & Logout */}
        <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200'>
          <div className='flex items-center gap-3 mb-3 px-2'>
            <div className='w-10 h-10 rounded-full bg-linear-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold'>
              A
            </div>
            <div className='flex-1'>
              <p className='font-semibold text-sm text-gray-900'>Admin User</p>
              <p className='text-xs text-gray-500'>admin@nodispute.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-danger-600 hover:bg-danger-50 transition-colors'
          >
            <LogOut size={20} />
            <span className='font-medium'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className='lg:ml-64 pt-16 lg:pt-0'>
        <div className='p-6 lg:p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
