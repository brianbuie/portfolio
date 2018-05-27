import React from 'react';
import styled from 'styled-components';
import theme from '@src/theme';

const Button = styled.button`
  border: 0;
  border-radius: ${theme.sizes.borderRadius};
  box-shadow: none;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};
  padding: 0.75rem 2rem;
  background-color: ${props => theme.colors[props.color] || theme.colors.blue};
  color: white;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default Button;
