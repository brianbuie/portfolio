import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Lockup from '@parts/Lockup-opt1';

const Menu = () => (
  <nav>
    <Link to="/">
      <Lockup />
    </Link>
  </nav>
);

export default Menu;