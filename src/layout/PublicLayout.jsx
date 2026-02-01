import { Outlet, Link } from 'react-router';
import { Home, LogIn, UserPlus, Book, Info } from 'lucide-react';
import Button from '../components/ui/Button';

const PublicLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Header/Navigation */}
      <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200'>
        <nav className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link
              to='/'
              className='flex items-center gap-3 hover:opacity-80 transition-opacity'
            >
              <img src='/logo.png' alt='No Dispute Credit' className='h-10' />
              <div className='hidden sm:block'>
                <span className='font-heading font-bold text-xl text-gray-900'>
                  No Dispute
                </span>
                <span className='font-heading font-bold text-xl text-primary-600'>
                  {' '}
                  Credit
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-8'>
              <Link
                to='/'
                className='flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium'
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                to='/resources'
                className='flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium'
              >
                <Book size={18} />
                <span>Resources</span>
              </Link>
              <Link
                to='/about'
                className='flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium'
              >
                <Info size={18} />
                <span>About</span>
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className='flex items-center gap-3'>
              <Link to='/login'>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={<LogIn size={16} />}
                >
                  Login
                </Button>
              </Link>
              <Link to='/register'>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={<UserPlus size={16} />}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className='flex-1'>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            {/* Brand */}
            <div className='md:col-span-2'>
              <div className='flex items-center gap-3 mb-4'>
                <img src='/logo.png' alt='Logo' className='h-12' />
                <span className='font-heading font-bold text-xl'>
                  No Dispute Credit
                </span>
              </div>
              <p className='text-gray-400 text-sm mb-4'>
                Educational credit validation platform helping you understand
                how credit bureaus report data.
              </p>
              <p className='text-xs text-gray-500'>
                © 2026 No Dispute Credit. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/resources'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to='/register'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className='font-semibold text-lg mb-4'>Legal</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 pt-8 text-center text-sm text-gray-500'>
            <p>
              Educational tool only. We do not file disputes or provide
              legal/financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
