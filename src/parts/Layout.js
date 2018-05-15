import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.7;
`;

const Layout = ({ children }) => (
  <Body>
    <Menu />
    <Content>
      {children}
    </Content>
    <Footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </Footer>
  </Body>
);

export default Layout;