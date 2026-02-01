import { forwardRef } from 'react';

/**
 * Card Component - Flexible card container with elevation and variants
 */

const Card = forwardRef(
  (
    {
      children,
      variant = 'default',
      elevation = 'md',
      padding = 'default',
      rounded = 'default',
      hoverable = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    // Base styles
    const baseStyles = 'bg-white transition-all duration-200';

    // Variant styles
    const variants = {
      default: 'border border-gray-200',
      outlined: 'border-2 border-gray-300',
      filled: 'bg-gray-50',
      gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50',
    };

    // Elevation styles (shadows)
    const elevations = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
    };

    // Padding styles
    const paddings = {
      none: '',
      sm: 'p-3',
      default: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    };

    // Rounded styles
    const roundedStyles = {
      none: '',
      sm: 'rounded-sm',
      default: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full',
    };

    // Hover effect
    const hoverStyles = hoverable
      ? 'hover:shadow-card-hover hover:scale-[1.01] cursor-pointer'
      : '';

    const combinedClassName = `${baseStyles} ${variants[variant]} ${elevations[elevation]} ${paddings[padding]} ${roundedStyles[rounded]} ${hoverStyles} ${className}`;

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

/**
 * Card subcomponents for better composition
 */
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-gray-200 pb-3 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3
    className={`text-xl font-heading font-semibold text-gray-900 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-gray-600 mt-1 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div
    className={`border-t border-gray-200 pt-4 mt-4 flex items-center justify-end gap-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
