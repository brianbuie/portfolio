import React from 'react';
import styled from 'styled-components';
import theme from '@src/theme';
import { Link, Modal } from '@parts/ui';
import Github from '@assets/github.svg';
import LinkedIn from '@assets/linkedin.svg';
import Email from '@assets/email.svg';
import WriteMeALetter from '@parts/WriteMeALetter';

const Icons = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.25rem;
    path {
      transition: all 0.2s ease;
      fill: ${theme.colors.blue};
    }
    &:hover {
      path {
        fill: ${theme.colors.orange};
    }
  }
`;

const ContactMe = ({ justify }) => (
  <Icons justify={justify}>
    <Link href="https://github.com/brianbuie" title="Github">
      <Github style={{ marginLeft: 0 }} />
    </Link>
    <Link href="https://www.linkedin.com/in/brian-buie-49921872/" title="LinkedIn">
      <LinkedIn />
    </Link>
    <Modal
      Toggler={({ toggle }) => (
        <Link onClick={toggle}>
          <Email />
        </Link>
      )}
    >
      {({ toggle }) => <WriteMeALetter toggleModal={toggle} />}
    </Modal>
  </Icons>
);

export default ContactMe;
