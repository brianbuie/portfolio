import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Link from 'gatsby-link';
import LogoLockupSVG from '../assets/logolockup.svg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';

const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  svg {
    width: 100%;
    height: 100%;
    .letter {
      fill: ${theme.colors.bkg};
    }
    .background {
      fill: ${theme.colors.blue};
    }
    .buoy {
      fill: ${theme.colors.orange};
    }
  }
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  a {
    margin: 0 0.25rem;
    display: flex;
    align-items: center;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
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

const Menu = () => (
  <nav>
    <Link to="/">
      <LogoContainer>
        <LogoLockupSVG />
      </LogoContainer>
    </Link>
    <MenuRight>
      <a href="https://github.com/brianbuie" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/brian-buie-49921872/" target="_blank">
        <LinkedIn />
      </a>
    </MenuRight>
  </nav>
);

export default Menu;