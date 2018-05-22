import React from 'react';
import styled from 'styled-components';
import Image from '@parts/ui/Image';

const Header = styled.header`
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
`;

const HeaderImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const Hero = ({ image, children }) => (
  <Header>
    <HeaderImage id={image} transforms={['c_fill', 'g_center']} width={1200} height={600} />
    <Content>{children}</Content>
  </Header>
);

export default Hero;
