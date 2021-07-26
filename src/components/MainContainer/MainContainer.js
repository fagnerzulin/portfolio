import React from 'react';
import AboutContainer from '../AboutContainer/AboutContainer';
import Header from '../Header/Header';
import ImageContainer from '../ImageContainer/ImageContainer';
import PrincipalContainer from './mainContainer.styled';

export default function MainContainer() {
  return (
    <PrincipalContainer>
      <Header />
      <AboutContainer />
      <ImageContainer />
    </PrincipalContainer>
  );
}
