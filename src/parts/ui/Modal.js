import React from 'react';
import styled from 'styled-components';
import { Toggle } from 'react-powerplug';
import posed, { PoseGroup } from 'react-pose';
import { Link } from '@parts/ui';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 50;
`;

const OverlayAnimated = posed(Overlay)({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Content = styled.div`
  position: absolute;
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
    x: '-100%'
  }
});

const Modal = ({ children, Toggler }) => (
  <Toggle initial={false}>
    {({ on, toggle }) => (
      <React.Fragment>
        {Toggler && <Toggler toggle={toggle} />}
        <PoseGroup>
          {on && <OverlayAnimated key="overlay" />}
          {on && (
            <ContentAnimated key="content">
              {children}
              <Link onClick={toggle}>&times;</Link>
            </ContentAnimated>
          )}
        </PoseGroup>
      </React.Fragment>
    )}
  </Toggle>
);

export default Modal;
