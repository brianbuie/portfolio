import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import LogoLockupSVG from '@assets/logolockup.svg';

const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
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
  <LogoContainer>
    <LogoLockupSVG />
  </LogoContainer>
);

export default Lockup;