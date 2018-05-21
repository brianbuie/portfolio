import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import theme from '../theme';
import Menu from '../Menu';
import Footer from '../Footer';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 21px;
    line-height: 1.75;
    font-family: 'Khula', sans-serif;
    background-color: ${theme.colors.bkg};
    color: ${theme.colors.text};
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: italic;
    color: ${theme.colors.blue};
    margin: 0 0 1rem;
  }

  p, figure {
    margin: 0 0 1.5rem 0;
  }

  figcaption {
    font-size: 75%;
    font-style: italic;
    text-align: center;
  }

  strong {
    font-family: 'Montserrat';
    color: ${theme.colors.blue};
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
    <Menu />
    <Content>
      {children}
    </Content>
    <Footer />
  </Body>
);

export default Layout;