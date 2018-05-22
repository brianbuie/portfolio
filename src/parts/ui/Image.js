import React from 'react';
import styled from 'styled-components';

const IMG = styled.img`
  max-width: 100%;
  height: auto;
`;

const Image = props => (
  <IMG src={`https://res.cloudinary.com/brianbuie/image/upload/${props.transforms ? props.transforms + '/' : ''}v1526861374/${props.publicId}.jpg`} {...props}/>
);

export default Image;