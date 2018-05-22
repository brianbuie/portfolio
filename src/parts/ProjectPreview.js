import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Image from '@parts/ui/Image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  width: 300px;
  margin: 1rem;
`;

const Content = styled.div`
  padding: 0 1rem;

  h3, p {
    margin: 0.5rem 0;
  }

  p {
    font-size: 90%;
  }
`;

const ProjectPreview = ({ title, slug, image, description, tags }) => (
  <Container>
    <Link to={`/projects/${slug}`}>
      <Image publicId={image} transforms="c_fill,f_auto,g_center,w_400,h_250" alt={title} />
    </Link>
    <Content>
      <h3>{title}</h3>
      <p>{description} <Link to={`/projects/${slug}`}>Read More →</Link></p>
    </Content>
  </Container>
);

export default ProjectPreview;