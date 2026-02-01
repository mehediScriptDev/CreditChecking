import { Link } from 'react-router';
import { Home, LogIn, UserPlus, Book, Info } from 'lucide-react';
import Button from '../components/ui/Button';

const NavbarLayout = () => {
  return (
    <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
  );
};

export default NavbarLayout;
