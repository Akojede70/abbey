import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  bgColor = 'bg-primaryBlue', 
  hoverColor = 'hover:bg-primaryLightBlue', 
  textColor = 'text-white', 
  className = '', 
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} py-2 px-4 rounded ${hoverColor} ${className}`} // Remove the hover: prefix from dynamic hoverColor
    >
      {label}
    </button>
  );
};

export default Button;
