import { Link } from 'react-router';

const FooterLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='flex items-center gap-3 mb-4'>
              <img src='/footerLogo.png' alt='Logo' className='h-16 sm:h-20' />
            </div>
            <p className='text-gray-400 text-sm mb-4'>
              Educational credit validation platform helping you understand how
              credit bureaus report data.
            </p>
            <p className='text-xs text-gray-500'>
              © {currentYear} No Dispute Credit. All rights reserved.
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
  );
};

export default FooterLayout;
