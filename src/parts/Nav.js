import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Link from 'gatsby-link';
import BuoySvg from '../assets/buoy.svg';
import BrianBuieSvg from '../assets/brianbuie.svg';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';

const Menu = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: ${theme.colors.blue};
`;

const Buoy = styled.div`
  width: 1.5rem;
  transform: translateY(-30%) scale(1.25);
  svg {
    height: 100%;
    width: 100%;
    path, polygon {
      fill: ${theme.colors.orange};
    }
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
`

const BrianBuie = styled.div`
  margin: 0 0.25rem;
  svg {
    height: 2rem;
    width: 4rem;
    path {
      fill: ${theme.colors.bkg};
    }
  }
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.25rem;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    path {
      fill: ${theme.colors.bkg};
    }
  }
`;

const Nav = () => (
  <Menu>
    <HomeLink to="/">
      <Buoy>
        <BuoySvg />
      </Buoy>
      <BrianBuie>
        <BrianBuieSvg />
      </BrianBuie>
    </HomeLink>
    <MenuRight>
      <a href="https://github.com/brianbuie" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/brian-buie-49921872/" target="_blank">
        <LinkedIn />
      </a>
    </MenuRight>
  </Menu>
);

export default Nav;