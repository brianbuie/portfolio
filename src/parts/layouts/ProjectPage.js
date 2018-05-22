import React from 'react';
import styled from 'styled-components';
import Layout from '@parts/layouts/MainLayout';
import Author from '@parts/Author';
import MoreProjects from '@parts/MoreProjects';

const Styles = styled.div`
  header {
    padding: 5rem 1.5rem;
  }

  h1,
  h2 {
    text-align: center;
  }

  section {
    max-width: 740px;
    padding: 1.5rem;
    padding-bottom: 0;
    margin: 0 auto;
  }

  figcaption {
    margin-top: 0.5rem;
  }
`;

const ProjectPage = ({ children, location }) => (
  <Layout>
    <Styles>
      {children}
      <Author />
      <MoreProjects location={location} />
    </Styles>
  </Layout>
);

export default ProjectPage;
