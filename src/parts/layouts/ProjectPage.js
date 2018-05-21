import React from 'react';
import styled from 'styled-components';
import Layout from './MainLayout';

const Styles = styled.div`
  header {
    text-align: center;
    padding: 3rem 1.5rem;
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
    </Styles>
  </Layout>
);

export default ProjectPage;