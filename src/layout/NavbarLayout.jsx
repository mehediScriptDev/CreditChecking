import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import Button from '../Components/ui/Button';
import { getUser } from '../utils/storage';

const NavbarLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = getUser();
  const isLoggedIn = !!user;

  const isActive = (path) => location.pathname === path;

  return (
    <header className='bg-white shadow-xs fixed top-0 left-0 right-0 z-50 border-b border-gray-100'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link
            to='/'
            className='-ml-4 flex items-center hover:opacity-80 transition-all duration-300'
          >
            <img src='/logo.png' alt='Logo' className='h-16' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-10'>
            <Link
              to='/'
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive('/')
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Home
              {isActive('/') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full'></span>
              )}
            </Link>
            {isLoggedIn && (
              <Link
                to={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
                className={`text-base font-medium transition-all duration-300 relative py-2 ${
                  isActive('/dashboard') || isActive('/admin/dashboard')
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Dashboard
                {(isActive('/dashboard') || isActive('/admin/dashboard')) && (
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full'></span>
                )}
              </Link>
            )}
            <Link
              to='/resources'
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive('/resources')
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Resources
              {isActive('/resources') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full'></span>
              )}
            </Link>
            <Link
              to='/about'
              className={`text-base font-medium transition-all duration-300 relative py-2 ${
                isActive('/about')
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              About
              {isActive('/about') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full'></span>
              )}
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className=' hidden lg:flex items-center gap-4'>
            {isLoggedIn ? (
              <Link
                to={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
              >
                <Button
                  variant='primary'
                  size='md'
                  className='bg-primary hover:bg-primary-600 shadow-sm hover:shadow-md transition-all duration-300 font-medium px-6'
                >
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to='/login'>
                  <Button
                    variant='outline'
                    size='md'
                    className='text-gray-700 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium px-6'
                  >
                    Login
                  </Button>
                </Link>
                <Link to='/register'>
                  <Button
                    variant='primary'
                    size='md'
                    className='bg-primary hover:bg-primary-600 shadow-sm hover:shadow-md transition-all duration-300 font-medium px-6'
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6 text-gray-700'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMobileMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden py-4 border-t border-gray-100 animate-fadeIn'>
            <div className='flex flex-col space-y-4'>
              <Link
                to='/'
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive('/')
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                Home
              </Link>
              {isLoggedIn && (
                <Link
                  to={
                    user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                    isActive('/dashboard') || isActive('/admin/dashboard')
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  Dashboard
                </Link>
              )}
              <Link
                to='/resources'
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive('/resources')
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                Resources
              </Link>
              <Link
                to='/about'
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-4 rounded-lg transition-all ${
                  isActive('/about')
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                About
              </Link>
              <div className='pt-4 flex flex-col space-y-3'>
                {isLoggedIn ? (
                  <Link
                    to={
                      user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant='primary'
                      className='w-full bg-primary hover:bg-primary-600 shadow-sm transition-all font-medium'
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link
                      to='/login'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant='outline'
                        className='w-full text-gray-700 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all font-medium'
                      >
                        Login
                      </Button>
                    </Link>
                    <Link
                      to='/register'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        variant='primary'
                        className='w-full bg-primary hover:bg-primary-600 shadow-sm transition-all font-medium'
                      >
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarLayout;
