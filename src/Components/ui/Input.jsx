import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      error = "",
      success = "",
      disabled = false,
      required = false,
      helperText = "",
      leftIcon = null,
      rightIcon = null,
      fullWidth = true,
      size = "md",
      className = "",
      ...props
    },
    ref,
  ) => {
    // Base input styles
    const baseStyles =
      "w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100";

    // Size styles
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };

    // State styles
    const stateStyles = error
      ? "border-danger-500 focus:ring-danger-500 focus:border-danger-500"
      : success
        ? "border-success-500 focus:ring-success-500 focus:border-success-500"
        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500";

    // Icon padding
    const iconPadding = leftIcon ? "pl-10" : rightIcon ? "pr-10" : "";

    const inputClassName = `${baseStyles} ${sizes[size]} ${stateStyles} ${iconPadding} ${className}`;
    const containerWidth = fullWidth ? "w-full" : "";

    return (
      <div className={containerWidth}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
            {required && <span className="text-danger-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={inputClassName}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper text or error/success messages */}
        {(helperText || error || success) && (
          <div className="mt-1.5 text-sm">
            {error && <p className="text-danger-600">{error}</p>}
            {success && <p className="text-success-600">{success}</p>}
            {!error && !success && helperText && (
              <p className="text-gray-500">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

/**
 * Textarea Component
 */
export const Textarea = forwardRef(
  (
    {
      label,
      placeholder = "",
      error = "",
      success = "",
      disabled = false,
      required = false,
      helperText = "",
      rows = 4,
      fullWidth = true,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 px-4 py-2 text-base resize-vertical";

    const stateStyles = error
      ? "border-danger-500 focus:ring-danger-500 focus:border-danger-500"
      : success
        ? "border-success-500 focus:ring-success-500 focus:border-success-500"
        : "border-gray-300 focus:ring-primary-500 focus:border-primary-500";

    const textareaClassName = `${baseStyles} ${stateStyles} ${className}`;
    const containerWidth = fullWidth ? "w-full" : "";

    return (
      <div className={containerWidth}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
            {required && <span className="text-danger-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={textareaClassName}
          {...props}
        />

        {(helperText || error || success) && (
          <div className="mt-1.5 text-sm">
            {error && <p className="text-danger-600">{error}</p>}
            {success && <p className="text-success-600">{success}</p>}
            {!error && !success && helperText && (
              <p className="text-gray-500">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Input;
