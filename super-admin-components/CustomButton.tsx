import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | "ghost";
  className?: string;
  disabled?: boolean;
  size?: string
}

const CustomButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false,
  size=""
}) => {
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100'
  };

  return (
    <button
    type='button'
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-md transition-colors duration-200 
        ${variantClasses[variant]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
        ${size}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;