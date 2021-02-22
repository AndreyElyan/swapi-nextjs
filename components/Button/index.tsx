import React from 'react';

export interface ButtonProps {
  children?: any;
  onClick?: any;
  className?: string;
  type?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type
}) => {
  const buttonClassNames = `w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 ${className}`;
  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
