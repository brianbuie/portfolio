import React from 'react';
import styled from 'styled-components';
import Hero from '@parts/ui/Hero';
import Layout from '@parts/layouts/MainLayout';
import MoreProjects from '@parts/MoreProjects';

const SubHead = styled.h3`
  text-align: center;
  margin: 0;
`;

export default ({ location }) => (
  <Layout>
    <Hero fallbackColor="#ccc">
      <h1>That's a 404</h1>
    </Hero>
    <SubHead>Check out these other projects.</SubHead>
    <MoreProjects location={location} />
  </Layout>
);
