import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import LogoLockupSVG from '@assets/logolockup.svg';

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

const Lockup = () => (
  <LogoContainer>
    <LogoLockupSVG />
  </LogoContainer>
);

export default Lockup;