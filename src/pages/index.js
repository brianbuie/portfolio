import React from "react";
import styled from "styled-components";
import projects from '@src/projects';
import Layout from '@parts/layouts/MainLayout';
import ProjectPreview from '@parts/ProjectPreview';

const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const Header = styled.div`
  padding: 3rem 0;
  text-align: center;
`;

export default () => (
  <Layout>
    <Header>
      <h1>What I've Been Working On</h1>
    </Header>
    <Container>
      {projects.map(project => <ProjectPreview key={project.slug} {...project} />)}
    </Container>
  </Layout>
);