import React from 'react';
import { HeaderContainer, Title, Navigation } from './header.styled';

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Zulin</Title>

      <Navigation>
        <a href="#about">Sobre mim</a>
        <a href="#project">Projetos</a>
        <a href="#contact">Contato</a>
      </Navigation>
    </HeaderContainer>
  );
}
