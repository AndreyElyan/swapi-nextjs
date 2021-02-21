import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
