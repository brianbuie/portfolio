import React from 'react';
import styled from 'styled-components';
import { Toggle } from 'react-powerplug';
import posed, { PoseGroup } from 'react-pose';
import { Link } from '@parts/ui';
import scrollbarWidth from 'get-scrollbar-width';

const Overlay = styled.div`
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 50;
`;

const OverlayAnimated = posed(Overlay)({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

const Content = styled.div`
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 60;
  overflow: hidden;
`;

const ContentAnimated = posed(Content)({
  enter: {
    opacity: 1,
    x: '0%'
  },
  exit: {
    opacity: 0,
    x: '-50%'
  }
});

const Modal = ({ children, Toggler }) => (
  <Toggle initial={false}>
    {({ on, toggle }) => {
      const body = document.body;
      body.style.overflowY = on ? 'hidden' : 'auto';
      body.style.marginRight = body.scrollHeight > body.clientHeight && on ? scrollbarWidth() + 'px' : 0;
      return (
        <React.Fragment>
          {Toggler && <Toggler toggle={toggle} />}
          <PoseGroup>
            {on && <OverlayAnimated key="overlay" />}
            {on && <ContentAnimated key="content">{children({ toggle })}</ContentAnimated>}
          </PoseGroup>
        </React.Fragment>
      );
    }}
  </Toggle>
);

export default Modal;
