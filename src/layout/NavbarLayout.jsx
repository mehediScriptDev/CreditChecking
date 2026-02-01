import { Link, useLocation } from 'react-router';
import Button from '../components/ui/Button';

const NavbarLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center hover:opacity-90 transition-opacity'
          >
            <img src='/logo.png' alt='Logo' className='h-12' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <Link
              to='/'
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/')
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
              {isActive('/') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary'></span>
              )}
            </Link>
            <Link
              to='/resources'
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/resources')
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Resources
              {isActive('/resources') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary'></span>
              )}
            </Link>
            <Link
              to='/about'
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/about')
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              About
              {isActive('/about') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary'></span>
              )}
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className='flex items-center gap-3'>
            <Link to='/login'>
              <Button
                variant='outline'
                size='sm'
                className='hover:bg-primary hover:text-white hover:border-primary'
              >
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                variant='primary'
                size='sm'
                className='bg-primary hover:bg-primary-500 border-primary'
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarLayout;
