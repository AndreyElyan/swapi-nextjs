import Button from 'components/Button';
import React from 'react';

// import { Container } from './styles';

export interface ErrorProps {
  onClick: any;
}

const Error: React.FC<ErrorProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center  justify-center shadow-md py-16 px-16">
      <p className="text-xl font-bold mb-8">Ops, ocorreu um erro.</p>
      <Button onClick={onClick}>Ok, entendi</Button>
    </div>
  );
};

export default Error;
