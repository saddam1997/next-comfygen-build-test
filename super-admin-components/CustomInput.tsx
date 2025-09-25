import React from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  multiple?: boolean;
  disabled?:boolean;
}

const CustomInput: React.FC<InputProps> = ({ 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  className = '',
  multiple = false,
  disabled= false
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiple={multiple}
      className={`
        w-full px-3 py-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${className}
      `}
    />
  );
};

export default CustomInput;