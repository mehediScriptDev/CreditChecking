import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../components/ui/Card';
import { authService } from '../../services/apiService';
import { setToken, setUser } from '../../utils/storage';
import { getPageMetadata } from '../../utils/seo';

const Login = () => {
  const metadata = getPageMetadata('login');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await authService.login(formData);
      setToken(response.token);
      setUser(response.user);
      toast.success('Login successful! Welcome back.');

      // Redirect based on role
      if (response.user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(
        error.message || 'Login failed. Please check your credentials.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Helmet>

      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4'>
        <div className='w-full max-w-md'>
          {/* Logo */}
          <div className='text-center mb-8'>
            <Link to='/'>
              <img
                src='/logo.png'
                alt='No Dispute Credit'
                className='h-20 mx-auto mb-4'
              />
            </Link>
            <h1 className='text-3xl font-heading font-bold text-gray-900'>
              Welcome Back
            </h1>
            <p className='text-gray-600 mt-2'>
              Log in to continue your credit journey
            </p>
          </div>

          {/* Login Card */}
          <Card elevation='xl' className='animate-scaleIn'>
            <CardHeader>
              <CardTitle className='text-2xl'>Login to Your Account</CardTitle>
              <CardDescription>
                Enter your credentials to access your dashboard
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <Input
                  label='Email Address'
                  type='email'
                  name='email'
                  placeholder='you@example.com'
                  leftIcon={<Mail size={18} />}
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  autoComplete='email'
                />

                <Input
                  label='Password'
                  type='password'
                  name='password'
                  placeholder='••••••••'
                  leftIcon={<Lock size={18} />}
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  required
                  autoComplete='current-password'
                />

                <div className='flex items-center justify-between text-sm'>
                  <label className='flex items-center gap-2 cursor-pointer'>
                    <input
                      type='checkbox'
                      className='rounded border-gray-300 text-primary-600 focus:ring-primary-500'
                    />
                    <span className='text-gray-600'>Remember me</span>
                  </label>
                  <Link
                    to='/forgot-password'
                    className='text-primary-600 hover:text-primary-700 font-medium'
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  fullWidth
                  loading={loading}
                  rightIcon={<ArrowRight size={20} />}
                >
                  Login
                </Button>
              </form>
            </CardContent>

            <CardFooter className='justify-center'>
              <p className='text-sm text-gray-600'>
                Don't have an account?{' '}
                <Link
                  to='/register'
                  className='text-primary-600 hover:text-primary-700 font-semibold'
                >
                  Create one now
                </Link>
              </p>
            </CardFooter>
          </Card>

          {/* Demo Credentials (Development Only) */}
          {import.meta.env.DEV && (
            <Card className='mt-4 bg-yellow-50 border-yellow-200'>
              <CardContent className='p-4'>
                <p className='text-xs font-semibold text-yellow-800 mb-2'>
                  Demo Credentials:
                </p>
                <p className='text-xs text-yellow-700'>
                  User: user@demo.com / password123
                </p>
                <p className='text-xs text-yellow-700'>
                  Admin: admin@demo.com / password123
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
