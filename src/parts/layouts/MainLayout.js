import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import theme from '@parts/theme';
import Menu from '@parts/Menu';
import Footer from '@parts/Footer';
import Meta from '@parts/Meta';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
    line-height: 1.75;
    font-family: 'Khula', sans-serif;
    background-color: ${theme.colors.bkg};
    color: ${theme.colors.text};
  }

  body {
    margin: 0;
  }

  section {
    max-width: 740px;
    padding: 1.5rem;
    padding-bottom: 0;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, strong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: italic;
    color: ${theme.colors.blue};
  }

  h1, h2, h3, h4, h5 {
    margin: 0 0 1rem;
  }

  h1, h2 {
    text-align: center;
  }

  p, figure {
    margin: 0 0 1.5rem 0;
  }

  figcaption {
    font-size: 75%;
    font-style: italic;
    text-align: center;
    margin-top: 0.5rem;
  }

  a {
    color: ${theme.colors.orange};
    text-decoration: none;
  }
`;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <Body>
    <Meta
      title="What I've Been Working On"
      description="I'm a Kansas City based full-stack Javascript developer, specializing in React and Node."
    />
    <Menu />
    <Content>{children}</Content>
    <Footer />
  </Body>
);

export default Layout;
