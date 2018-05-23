import React from 'react';
import styled from 'styled-components';
import projects from '@src/projects';
import ProjectPreview from '@parts/ProjectPreview';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 0;
`;

const MoreProjects = ({ activeProject }) => {
  const availableProjects = projects.filter(project => !activeProject || project.slug !== activeProject.slug);
  if (!availableProjects.length) return null;
  return <Container>{availableProjects.map(project => <ProjectPreview key={project.slug} {...project} />)}</Container>;
};

export default MoreProjects;
