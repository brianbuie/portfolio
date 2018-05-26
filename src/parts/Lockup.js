import React from 'react';
import styled from 'styled-components';
import { Link } from '@parts/ui';
import theme from '@src/theme';
import LogoLockupSVG from '@assets/logolockup.svg';

const Nav = styled.nav`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 250px;
  @media (max-width: 700px) {
    width: 175px;
  }
  background: ${theme.colors.blue};
  clip-path: polygon(0 0, 0% 100%, 70% 0%);
  svg {
    width: 100%;
    height: 100%;
    .letter {
      fill: ${theme.colors.bkg};
    }
    .background {
      fill: none;
    }
    .buoy {
      fill: ${theme.colors.orange};
    }
  }
`;

const Lockup = () => (
  <Nav>
    <Link to="/">
      <LogoLockupSVG />
    </Link>
  </Nav>
);

export default Lockup;
