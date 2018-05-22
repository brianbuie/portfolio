import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';

const Container = styled.span`
  font-size: 70%;
  border: 1px solid ${theme.colors.blue};
  border-radius: 0.5rem;
  display: inline-block;
  padding: 0.25rem 0.5rem 0.1rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  margin-right: 0.5rem;
`;

const Tag = ({ title }) => (
  <Container>{title}</Container>
);

export default Tag;