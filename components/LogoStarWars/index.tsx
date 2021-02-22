import React from 'react';

import { Container } from './styles';

const LogoStarWars = ({ children, className }) => {
  return (
    <Container className={className}>
      <h1 className="glow sm:text-5xl text-lg">{children}</h1>
    </Container>
  );
};

export default LogoStarWars;
