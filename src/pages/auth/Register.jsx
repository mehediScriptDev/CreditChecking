import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';
import Input from '../../Components/ui/Input';
import Button from '../../Components/ui/Button';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../../Components/ui/Card';
import { setToken, setUser } from '../../utils/storage';
import { getPageMetadata } from '../../utils/seo';

const Register = () => {
  const metadata = getPageMetadata('register');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
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

    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      // Mock registration for development (no backend required)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: 'user',
      };

      const mockToken = `mock-token-${Date.now()}`;

      setToken(mockToken);
      setUser(newUser);

      toast.success(`Welcome aboard, ${newUser.firstName}!`);
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              Create Your Account
            </h1>
            <p className='text-gray-600 mt-2'>
              Start your credit education journey today
            </p>
          </div>

          {/* Registration Card */}
          <Card elevation='xl' className='animate-scaleIn'>
            <CardHeader>
              <CardTitle className='text-2xl'>Register</CardTitle>
              <CardDescription>
                Create your free account in seconds
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <Input
                    label='First Name'
                    type='text'
                    name='firstName'
                    placeholder='John'
                    leftIcon={<User size={18} />}
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                  />

                  <Input
                    label='Last Name'
                    type='text'
                    name='lastName'
                    placeholder='Doe'
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    required
                  />
                </div>

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
                  helperText='Minimum 8 characters'
                  required
                  autoComplete='new-password'
                />

                <Input
                  label='Confirm Password'
                  type='password'
                  name='confirmPassword'
                  placeholder='••••••••'
                  leftIcon={<Lock size={18} />}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  required
                  autoComplete='new-password'
                />

                <div className='space-y-3'>
                  <label className='flex items-start gap-2 cursor-pointer'>
                    <input
                      type='checkbox'
                      name='agreeToTerms'
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className='mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500'
                    />
                    <span className='text-sm text-gray-600'>
                      I agree to the{' '}
                      <a
                        href='#'
                        className='text-primary-600 hover:text-primary-700 font-medium'
                      >
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a
                        href='#'
                        className='text-primary-600 hover:text-primary-700 font-medium'
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className='text-sm text-danger-600'>
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  fullWidth
                  loading={loading}
                  rightIcon={<ArrowRight size={20} />}
                >
                  Create Account
                </Button>
              </form>
            </CardContent>

            <CardFooter className='justify-center'>
              <p className='text-sm text-gray-600'>
                Already have an account?{' '}
                <Link
                  to='/login'
                  className='text-primary-600 hover:text-primary-700 font-semibold'
                >
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>

          {/* Educational Notice */}
          <div className='mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
            <p className='text-xs text-yellow-800 text-center'>
              ⚠️ This is an educational tool. We do not file disputes or provide
              legal/financial advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
