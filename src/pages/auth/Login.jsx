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
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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

      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4'>
        <div className='w-full max-w-md'>
          {/* Logo */}
          <div className='text-center mb-8'>
            <Link to='/'>
              <img src='/logo.png' alt='Logo' className='h-20 mx-auto mb-6' />
            </Link>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Welcome Back
            </h1>
            <p className='text-gray-600'>
              Log in to continue your credit journey
            </p>
          </div>

          {/* Login Card */}
          <Card className='shadow-xl border border-gray-200'>
            <CardHeader className='pb-4'>
              <CardTitle className='text-xl font-bold text-gray-900'>
                Login to Your Account
              </CardTitle>
              <CardDescription className='text-sm text-gray-600'>
                Enter your credentials to access your dashboard
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-5'>
                <Input
                  label='Email Address'
                  type='email'
                  name='email'
                  placeholder='user@demo.com'
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
                      name='rememberMe'
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className='w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary'
                    />
                    <span className='text-gray-700'>Remember me</span>
                  </label>
                  <Link
                    to='/forgot-password'
                    className='text-primary hover:text-primary-600 font-medium transition-colors'
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
                  className='bg-primary hover:bg-primary-500 text-white font-semibold'
                >
                  Login
                </Button>
              </form>
            </CardContent>

            <CardFooter className='justify-center border-t border-gray-100 pt-6'>
              <p className='text-sm text-gray-600'>
                Don't have an account?{' '}
                <Link
                  to='/register'
                  className='text-primary hover:text-primary-600 font-semibold transition-colors'
                >
                  Create one now
                </Link>
              </p>
            </CardFooter>
          </Card>

          {/* Demo Credentials */}
          {import.meta.env.DEV && (
            <Card className='mt-6 bg-yellow-50 border-2 border-yellow-300'>
              <CardContent className='p-4'>
                <p className='text-sm font-bold text-yellow-900 mb-2'>
                  Demo Credentials:
                </p>
                <p className='text-sm text-yellow-800'>
                  User: user@demo.com / password123
                </p>
                <p className='text-sm text-yellow-800'>
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
