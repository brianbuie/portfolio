import React from 'react';
import styled from 'styled-components';
import Layout from '@parts/layouts/MainLayout';
import Author from '@parts/Author';

const Styles = styled.div`
  header {
    padding: 5rem 1.5rem;
  }

  h1, h2 {
    text-align: center;
  }

  section {
    max-width: 740px;
    padding: 1.5rem;
    padding-bottom: 0;
    margin: 0 auto;
  }
`;

const ProjectPage = ({ children }) => (
  <Layout>
    <Styles>
      {children}
      <Author />
    </Styles>
  </Layout>
);

export default ProjectPage;