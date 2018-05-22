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

const MoreProjects = ({ location }) => {
  const activeIndex = projects.findIndex(project => project.slug === location.pathname.replace('/projects/', ''));
  const firstIndex = activeIndex !== 0 ? activeIndex - 1 : projects.length - 1;
  const secondIndex = activeIndex !== projects.length - 1 ? activeIndex + 1 : 0;
  const thirdIndex = secondIndex + 1 !== activeIndex ? secondIndex + 1 : null;
  return (
    <Container>
      <ProjectPreview {...projects[firstIndex]} />
      <ProjectPreview {...projects[secondIndex]} />
      {thirdIndex && thirdIndex !== firstIndex && thirdIndex !== secondIndex && <ProjectPreview {...projects[thirdIndex]}/>}
    </Container>
  );
}

export default MoreProjects;