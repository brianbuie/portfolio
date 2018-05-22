import React from 'react';
import styled from 'styled-components';
import Image from '@parts/ui/Image';

const Header = styled.header`
  padding: 5rem 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.fallbackColor || 'transparent'};
  h1 {
    text-align: center;
  }
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
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`;

const Hero = ({ image, children, fallbackColor }) => (
  <Header fallbackColor={fallbackColor}>
    {image && <HeaderImage id={image} transforms={['c_fill', 'g_center']} width={1200} height={600} />}
    <Content>{children}</Content>
  </Header>
);

export default Hero;
