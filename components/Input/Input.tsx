import React from 'react';

// import { Container } from './styles';

export interface InputProps {
  label: string;
  onChange: any;
  value: any;
}

const Input: React.FC<InputProps> = ({ label, onChange, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      className="w-full h-14 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors"
      placeholder={label}
      value={value}
    />
  );
};

export default Input;
