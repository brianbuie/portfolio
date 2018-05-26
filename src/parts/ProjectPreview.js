import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Image from '@parts/ui/Image';
import Tag from '@parts/ui/Tag';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  width: 300px;
  margin: 1rem;
`;

const Content = styled.div`
  padding: 0 1rem 0.5rem;

  h3,
  p {
    margin: 0.5rem 0;
  }

  p {
    font-size: 90%;
  }
`;

const ReadMore = styled(Link)`
  white-space: nowrap;
`;

const ProjectPreview = ({ title, slug, image, description, tags }) => (
  <Article>
    <Link to={`/projects/${slug}`}>
      <Image id={image} transforms={['c_fill', 'g_center']} width={400} height={250} alt={title} />
    </Link>
    <Content>
      <h3>{title}</h3>
      <p>
        {description} <ReadMore to={`/projects/${slug}`}>Read More →</ReadMore>
      </p>
      {tags.map(tag => <Tag title={tag} key={tag} />)}
    </Content>
  </Article>
);

export default ProjectPreview;
