import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import Github from '@assets/github.svg';
import LinkedIn from '@assets/linkedin.svg';
import Email from '@assets/email.svg';

const Container = styled.footer`
  padding: 3rem 0 1rem;
  p {    
    text-align: center;
    font-size: 60%;
    opacity: 0.8;
    margin: 0.25rem 0;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
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

const Footer = ({  }) => (
  <Container>
    <Icons>
      <a href="https://github.com/brianbuie" target="_blank" title="Github">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/brian-buie-49921872/" target="_blank" title="LinkedIn">
        <LinkedIn />
      </a>
      <a href="mailto:brian@brianbuie.com" title="Email Brian@BrianBuie.com">
        <Email />
      </a>
    </Icons>
    <p>&copy; {new Date().getFullYear()} Brian Buie</p>
    <p>How was this site built? <a href="https://github.com/brianbuie/portfolio" target="_blank">Check out the repo!</a></p>
  </Container>
);

export default Footer;