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
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/')
                  ? 'text-[#97D702]'
                  : 'text-gray-700 hover:text-green'
              }`}
            >
              Home
              {isActive('/') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#97d602]'></span>
              )}
            </Link>
            <Link
              to='/resources'
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/resources')
                  ? 'text-[#97d602]'
                  : 'text-gray-700 hover:text-[#97d602]'
              }`}
            >
              Resources
              {isActive('/resources') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#97d602]'></span>
              )}
            </Link>
            <Link
              to='/about'
              className={`text-base font-semibold transition-colors relative py-2 ${
                isActive('/about')
                  ? 'text-[#97d602]'
                  : 'text-gray-700 hover:text-[#97d602]'
              }`}
            >
              About
              {isActive('/about') && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#97d602]'></span>
              )}
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className='flex items-center gap-3'>
            <Link to='/login'>
              <Button
                variant='outline'
                size='sm'
                className='hover:bg-[#97d602] hover:text-white hover:border-[#97d602]'
              >
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                variant='primary'
                size='sm'
                className='bg-[#97d602] hover:bg-[#7ab002] border-[#97d602]'
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
