import React from 'react';
import styled from 'styled-components';
import ContactMe from '@parts/ContactMe';

const Container = styled.footer`
  padding: 3rem 0 1rem;
  p {    
    text-align: center;
    font-size: 75%;
    opacity: 0.8;
    margin: 0.25rem 0;
  }
`;

const Footer = ({  }) => (
  <Container>
    <ContactMe />
    <p>How was this site built? <a href="https://github.com/brianbuie/portfolio" target="_blank">Check out the repo!</a></p>
  </Container>
);

export default Footer;