import React from 'react';
import styled from 'styled-components';
import Form from '@parts/ui/forms/Form';
import { Link } from '@parts/ui';
import { post } from '@parts/utils/fetch';

const Letter = styled.div`
  max-width: 500px;
  width: 100%;
`;

const WriteMeALetter = ({ toggleModal }) => (
  <Letter>
    <Form
      fields={[
        { name: 'name', label: 'Your Name', type: 'text' },
        { name: 'email', label: 'Your E-mail', type: 'email' },
        { name: 'message', label: 'Message', type: 'textarea' }
      ]}
      submit={data => {
        data.message += '----' + data.name + ' -- ' + data.email;
        return post('https://fresh-gamefowl.prod.with-datafire.io/contact', data);
      }}
      onSuccess={toggleModal}
    />
    <Link onClick={toggleModal}>Nevermind</Link>
  </Letter>
);

export default WriteMeALetter;
