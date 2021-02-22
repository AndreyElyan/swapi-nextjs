import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyles = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border-top: 2px solid ${({ theme, color }) => color || 'black'};
  animation: ${rotate} 1s linear infinite;
`;
