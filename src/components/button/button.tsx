import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  className?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  bgColor = 'bg-primaryBlue', 
  hoverColor = 'hover:bg-primaryLightBlue', 
  textColor = 'text-white', 
  className = '', 
  type = "button",
  width = "auto",
  height = "auto",
}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} py-2 px-4 rounded ${hoverColor} ${className} ${width} ${height}`} 
    >
      {label}
    </button>
  );
};

export default Button;
