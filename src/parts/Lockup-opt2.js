import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import Buoy from '@assets/buoy.svg';

const Container = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: ${theme.colors.blue};
  clip-path: polygon(0 0, 0% 100%, 100% 0%);
  svg {
    height: 40px;
    width: 40px;
    transform: translateY(15%) translateX(5%);
    path {
      fill: ${theme.colors.orange};
    }
  }
`;

const Lockup = () => (
  <Container>
    <Buoy />
  </Container>
);

export default Lockup;
