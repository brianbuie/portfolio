import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import Github from '@assets/github.svg';
import LinkedIn from '@assets/linkedin.svg';
import Email from '@assets/email.svg';

const Icons = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.25rem;
    path {
      transition: all 0.2s ease;
      fill: ${theme.colors.blue};
    }
    &:hover {
      path {
        fill: ${theme.colors.orange};
    }
  }
`;

const ContactMe = ({ justify }) => (
  <Icons justify={justify}>
    <a href="https://github.com/brianbuie" target="_blank" title="Github">
      <Github style={{ marginLeft: 0 }}/>
    </a>
    <a href="https://www.linkedin.com/in/brian-buie-49921872/" target="_blank" title="LinkedIn">
      <LinkedIn />
    </a>
    <a href="mailto:brian@brianbuie.com" title="Email Brian@BrianBuie.com">
      <Email />
    </a>
  </Icons>
);

export default ContactMe;