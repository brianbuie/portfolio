import React from 'react';
import styled from 'styled-components';
import Visibility from 'react-visibility-sensor';

const IMG = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => (props.loaded ? 'none' : 'blur(5px)')};
  overflow: hidden;
`;

class Image extends React.Component {
  state = {
    loaded: false
  };

  makeURL = () => {
    const { width, height, id, extension } = this.props;
    const transforms = ['f_auto'];
    if (!this.state.loaded) {
      transforms.push('q_10', `w_${Math.floor(width / 50)}`, `h_${Math.floor(height / 50)}`);
    } else {
      transforms.push(`w_${width}`, `h_${height}`);
    }
    if (this.props.transforms) transforms.push(...this.props.transforms);
    return `https://res.cloudinary.com/brianbuie/image/upload/${transforms.join(',')}/v1526861374/${id}.${extension || 'jpg'}`;
  };

  onChange = isVisible => {
    if (isVisible && !this.state.loaded) this.setState({ loaded: true });
  };

  render = () => {
    const { width, height, ...passThrough } = this.props;
    return (
      <Visibility partialVisibility={true} onChange={this.onChange}>
        <IMG src={this.makeURL()} {...passThrough} {...this.state} />
      </Visibility>
    );
  };
}

export default Image;
