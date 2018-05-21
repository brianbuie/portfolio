import React from 'react';
import styled from 'styled-components';

const Video = ({ publicId, transforms }) => (
  <video autoPlay loop width="100%" height="auto">
    <source type="video/mp4" src={`https://res.cloudinary.com/brianbuie/video/upload/${transforms ? transforms + '/' : ''}v1526848482/${publicId}.mp4`} />
    <source type="video/webm" src={`https://res.cloudinary.com/brianbuie/video/upload/${transforms ? transforms + '/' : ''}v1526848482/${publicId}.webm`} />
  </video>
);

export default Video;