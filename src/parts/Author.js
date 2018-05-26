import React from 'react';
import styled from 'styled-components';
import theme from '@src/theme';
import ContactMe from '@parts/ContactMe';
import Image from '@parts/ui/Image';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${theme.colors.blue};
  padding: 3rem 0 0 0;
`;

const LeftColumn = styled.div`
  width: 20%;
  opacity: 0.8;
  img {
    max-width: 100%;
  }
`;

const RightColumn = styled.div`
  width: 75%;
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 80%;
    margin-bottom: 0.5rem;
  }
`;

const Author = ({}) => (
  <section>
    <Container>
      <LeftColumn>
        <Image
          id="profile-pic-cropped-v2_baex4c"
          transforms={['r_max']}
          width={200}
          height={200}
          extension="png"
          alt="Handsome Man"
        />
      </LeftColumn>
      <RightColumn>
        <h4>People call me Brian</h4>
        <p>
          I'm a Kansas City based full-stack Javascript developer. On the rare occasion I'm not programming, I'm probably riding
          my bike or eating pizza (still trying to figure out how to do those at the same time).
        </p>
        <ContactMe justify="flex-start" />
      </RightColumn>
    </Container>
  </section>
);

export default Author;
