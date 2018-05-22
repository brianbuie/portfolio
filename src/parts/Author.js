import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';

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
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 80%;
  }
`;

const Author = ({  }) => (
  <section>
    <Container>
      <LeftColumn>
        <img src="http://res.cloudinary.com/brianbuie/image/upload/f_auto,w_200,h_200,r_max/v1526870247/profile-pic-cropped-v2_baex4c.jpg" alt="Handsome Man"/>
      </LeftColumn>
      <RightColumn>
        <h4>People call me Brian</h4>
        <p>I'm a Kansas City based full-stack Javascript developer. On the rare occasion I'm not programming, I'm probably riding my bike or eating pizza (still trying to figure out how to do those at the same time).</p>
      </RightColumn>
    </Container>
  </section>
);

export default Author;