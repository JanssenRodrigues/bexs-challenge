import React from 'react';
import { HeaderFluid, HeaderContainer } from './style';
import { Logo } from '../Logo/style';
import Menu from '../Menu';

const Header = () => {
  return (
    <HeaderFluid>
      <HeaderContainer>
        <Logo />
        <Menu />
      </HeaderContainer>
    </HeaderFluid>
  );
};

export default Header;