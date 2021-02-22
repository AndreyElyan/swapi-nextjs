import React from 'react';

import { Container, LoaderStyles } from './styles';

export interface LoaderProps {
  color?: string;
  size?: string;
}
const Loader: React.FC<LoaderProps> = ({ color, size }) => (
  <Container>
    <LoaderStyles color={color} size={size} />
  </Container>
);

Loader.defaultProps = {
  color: null,
  size: '20px'
};

export default Loader;
