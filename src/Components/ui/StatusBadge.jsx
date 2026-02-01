import { Check, X, AlertCircle, Info } from 'lucide-react';

/**
 * StatusBadge Component - Visual status indicator with icons
 */

const StatusBadge = ({
  status = 'match',
  text,
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  // Status configurations
  const statusConfig = {
    match: {
      text: 'Match',
      icon: Check,
      bgColor: 'bg-success-100',
      textColor: 'text-success-800',
      iconColor: 'text-success-600',
    },
    minor: {
      text: 'Minor Difference',
      icon: AlertCircle,
      bgColor: 'bg-warning-100',
      textColor: 'text-warning-800',
      iconColor: 'text-warning-600',
    },
    mismatch: {
      text: 'Mismatch',
      icon: X,
      bgColor: 'bg-danger-100',
      textColor: 'text-danger-800',
      iconColor: 'text-danger-600',
    },
    pending: {
      text: 'Pending',
      icon: Info,
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
      iconColor: 'text-gray-600',
    },
    completed: {
      text: 'Completed',
      icon: Check,
      bgColor: 'bg-success-100',
      textColor: 'text-success-800',
      iconColor: 'text-success-600',
    },
    'in-progress': {
      text: 'In Progress',
      icon: Info,
      bgColor: 'bg-info-100',
      textColor: 'text-info-800',
      iconColor: 'text-info-600',
    },
  };

  // Size styles
  const sizes = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-sm gap-1.5',
    lg: 'px-4 py-1.5 text-base gap-2',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  const config = statusConfig[status] || statusConfig.pending;
  const Icon = config.icon;
  const displayText = text || config.text;

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.bgColor} ${config.textColor} ${sizes[size]} ${className}`}
    >
      {showIcon && <Icon size={iconSizes[size]} className={config.iconColor} />}
      <span>{displayText}</span>
    </span>
  );
};

export default StatusBadge;
