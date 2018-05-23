import React from 'react';
import styled from 'styled-components';
import projects from '@src/projects';
import Meta from '@parts/Meta';
import Layout from '@parts/layouts/MainLayout';
import Author from '@parts/Author';
import MoreProjects from '@parts/MoreProjects';

const ProjectPage = ({ children, location }) => {
  console.log(location);
  const activeSlug = location.pathname.replace(/(.+projects\/)/g, '');
  const activeProject = projects.find(project => project.slug === activeSlug);
  const { title, description, image } = activeProject;
  return (
    <Layout>
      <Meta title={title} description={description} imageId={image} />
      {children}
      <Author />
      <MoreProjects activeProject={activeProject} />
    </Layout>
  );
};

export default ProjectPage;
