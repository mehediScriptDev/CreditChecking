import { Link } from 'react-router';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const FooterLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-8'>
          {/* Brand */}
          <div>
            <div className='mb-6 -ml-6'>
              <img src='/footerLogo.png' alt='Logo' className='h-12 sm:h-16' />
            </div>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
              Educational credit validation platform helping you understand how
              credit bureaus report data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-base mb-4'>Quick Links</h3>
            <ul className='space-y-3 text-sm'>
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
                  to='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className='font-semibold text-base mb-4'>Account</h3>
            <ul className='space-y-3 text-sm'>
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
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='font-semibold text-base mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='TikTok'
              >
                <FaTiktok size={20} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='YouTube'
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500'>
            <p>
              © {currentYear}{' '}
              <span className='text-primary-500'>No Dispute Credit</span>. All
              Rights Reserved
            </p>
            <div className='flex gap-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms & Conditions
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
