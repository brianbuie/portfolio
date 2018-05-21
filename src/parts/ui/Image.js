import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image = props => (
  <IMG src={`https://res.cloudinary.com/brianbuie/image/upload/c_scale,f_auto,q_100,w_${props.width || 850}/v1526861374/${props.publicId}.jpg`} {...props}/>
);

export default Image;