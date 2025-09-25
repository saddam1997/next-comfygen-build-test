import React from 'react';

interface ButtonProps {
 text: string;
 onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
 return (
  <div className="flex justify-center">
   <button
    onClick={onClick}
    className="button flex items-center gap-2 px-4 py-1.5 rounded-md min-h-[2.4em] min-w-[4em] text-lg font-semibold border bg-gradient-to-r from-[#131327] to-[#797981] text-white shadow-md hover:text-gray-300 hover:scale-105 hover:shadow-lg active:scale-100"
   >
    {text}
   </button>
  </div>
 );
};

export default Button;
