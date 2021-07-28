import React from 'react';
import AboutContainer from '../AboutContainer/AboutContainer';
import Header from '../Header/Header';
import ImageContainer from '../ImageContainer/ImageContainer';
import KnowsContainer from '../KnowsContainer/KnowsContainer';
import { PrincipalContainer, FirstSection } from './mainContainer.styled';

export default function MainContainer() {
  return (
    <PrincipalContainer>
      <Header />
      <FirstSection>
        <AboutContainer />
        <ImageContainer />
      </FirstSection>

      <KnowsContainer />
    </PrincipalContainer>
  );
}
