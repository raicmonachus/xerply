import React from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'filled' | 'filled-secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconPosition = 'left' | 'right';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'filled',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  ...props
}, ref) => {
  
  // Clases base del botón
  const baseClasses = "inline-flex justify-center items-center rounded-lg font-semibold font-['Inter'] transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variantes de estilo
  const variantClasses = {
    filled: "bg-primary-600 text-white-alpha-10/95 hover:bg-primary-700 active:bg-primary-800",
    'filled-secondary': "bg-primary-50 text-primary-600 hover:bg-primary-100 active:bg-primary-200",
    outline: "outline outline-[1.50px] outline-offset-[-1.50px] outline-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 active:bg-primary-100",
    ghost: "text-primary-600 bg-transparent hover:bg-primary-50 active:bg-primary-100"
  };
  
  // Tamaños
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2 text-sm gap-2",
    lg: "px-8 py-3 text-base gap-2.5"
  };
  
  // Tamaños de iconos
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-6 h-6"
  };
  
  // Construir clases finales
  const finalClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');
  
  const iconClasses = Icon ? iconSizes[size] : '';
  
  return (
    <button
      ref={ref}
      className={finalClasses}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={iconClasses} />
      )}
      
      <span className="leading-tight">{children}</span>
      
      {Icon && iconPosition === 'right' && (
        <Icon className={iconClasses} />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;