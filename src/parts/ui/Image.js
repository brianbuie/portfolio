import React from 'react';
import styled from 'styled-components';
import Visibility from 'react-visibility-sensor';

const Clip = styled.span`
  overflow: hidden;
`;

const IMG = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => (props.loaded ? 'none' : 'blur(5px)')};
`;

class Image extends React.Component {
  state = {
    loaded: false
  };

  makeURL = () => {
    const { width, height, id, extension } = this.props;
    const transforms = ['f_auto'];
    if (!this.state.loaded) {
      transforms.push('q_10', `w_${Math.ceil(width / 50)}`, `h_${Math.ceil(height / 50)}`);
    } else {
      transforms.push(`w_${width}`, `h_${height}`);
    }
    if (this.props.transforms) transforms.push(...this.props.transforms);
    return `https://res.cloudinary.com/brianbuie/image/upload/${transforms.join(',')}/v1526861374/${id}.${extension || 'jpg'}`;
  };

  onChange = isVisible => {
    if (isVisible && !this.state.loaded) this.setState({ loaded: true });
  };

  render = () => (
    <Visibility partialVisibility={true} onChange={this.onChange}>
      <Clip>
        <IMG src={this.makeURL()} {...this.props} {...this.state} />
      </Clip>
    </Visibility>
  );
}

export default Image;
