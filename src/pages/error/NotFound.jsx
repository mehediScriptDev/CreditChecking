import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../Components/ui/Button';

const NotFound = () => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4'>
        <div className='text-center'>
          <div className='mb-8'>
            <h1 className='text-9xl font-heading font-bold text-primary-600 mb-4'>
              404
            </h1>
            <h2 className='text-3xl font-heading font-bold text-gray-900 mb-2'>
              Page Not Found
            </h2>
            <p className='text-gray-600 text-lg'>
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/'>
              <Button variant='primary' size='lg' leftIcon={<Home size={20} />}>
                Go Home
              </Button>
            </Link>
            <Button
              variant='outline'
              size='lg'
              leftIcon={<ArrowLeft size={20} />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>

          <div className='mt-12'>
            <img
              src='/logo.png'
              alt='No Dispute Credit'
              className='h-16 mx-auto opacity-50'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
