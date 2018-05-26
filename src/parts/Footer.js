import React from 'react';
import styled from 'styled-components';
import ContactMe from '@parts/ContactMe';
import { Link } from '@parts/ui';

const Container = styled.footer`
  padding: 3rem 0 1rem;
  p {
    text-align: center;
    font-size: 75%;
    opacity: 0.8;
    margin: 0.25rem 0;
  }
`;

const Footer = ({}) => (
  <Container>
    <ContactMe />
    <p>
      How was this site built? <Link href="https://github.com/brianbuie/portfolio">Check out the repo!</Link>
    </p>
  </Container>
);

export default Footer;
