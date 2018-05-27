import React from 'react';
import styled from 'styled-components';
import theme from '@src/theme';
import { FieldError, MagicLabel } from './InputAddons';

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin: 0.3rem 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 0.6rem 0.8rem;
  outline: none;
  border: ${props => (props.error ? '1px solid ' + theme.colors.error : 'none')};
  border-radius: ${theme.sizes.borderRadius};
`;

class TextInput extends React.Component {
  onChange = e => {
    if (!this.props.onChange) return;
    this.props.onChange(this.props.name, e.target.value);
  };

  render = () => {
    const { name, value, label, error, placeHolder } = this.props;
    return (
      <React.Fragment>
        <MagicLabel show={value} htmlFor={name}>
          {label}
        </MagicLabel>
        <Input {...this.props} id={name} placeholder={placeHolder || label} onChange={this.onChange} />
        <FieldError show={error}>{error}</FieldError>
      </React.Fragment>
    );
  };
}

export default TextInput;
