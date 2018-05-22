import React from 'react';
import styled from 'styled-components';
import Visibility from 'react-visibility-sensor';

const Container = styled.div`
  background: url('${props => props.url}');
  background-size: cover;
  position: relative;
  height: 0;
  padding-bottom: ${props => props.aspectRatio}%;
  video {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

class Video extends React.Component {
  state = {
    loaded: false
  };

  makeURL = () => {
    const { width, id } = this.props;
    const transforms = ['c_scale', `w_${width}`];
    if (this.props.transforms) transforms.push(...this.props.transforms);
    return `https://res.cloudinary.com/brianbuie/video/upload/${transforms.join(',')}/v1526861374/${id}`;
  };

  makeBkgURL = () => {
    const { id } = this.props;
    return `https://res.cloudinary.com/brianbuie/video/upload/so_0p/v1526848482/${id}.jpg`;
  };

  onChange = isVisible => {
    if (isVisible && !this.state.loaded) this.setState({ loaded: true });
  };

  render = () => {
    const { width, height } = this.props;
    return (
      <Visibility partialVisibility={true} onChange={this.onChange}>
        <Container url={this.makeBkgURL()} aspectRatio={height / width * 100}>
          {this.state.loaded && (
            <video autoPlay loop width="100%" height="auto">
              <source type="video/mp4" src={this.makeURL() + '.mp4'} />
              <source type="video/webm" src={this.makeURL() + '.webm'} />
            </video>
          )}
        </Container>
      </Visibility>
    );
  };
}

export default Video;
