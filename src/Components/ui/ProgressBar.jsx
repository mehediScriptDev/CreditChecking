/**
 * ProgressBar Component - Visual progress indicator
 */

const ProgressBar = ({
  value = 0,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = true,
  label = null,
  className = '',
  animated = true,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  // Size styles
  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-6',
  };

  // Variant colors
  const variants = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    danger: 'bg-danger-600',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600',
  };

  const animationClass = animated ? 'transition-all duration-500 ease-out' : '';

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm font-medium text-gray-700'>
            {label || 'Progress'}
          </span>
          <span className='text-sm font-semibold text-gray-900'>
            {Math.round(percentage)}%
          </span>
        </div>
      )}

      <div
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}
      >
        <div
          className={`${sizes[size]} ${variants[variant]} ${animationClass} rounded-full`}
          style={{ width: `${percentage}%` }}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
