import { Button } from '@chakra-ui/react';
import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  Slogan,
  Description,
  Tagline,
  Tags,
} from './aboutContainer.styled';

export default function AboutContainer() {
  return (
    <Container>
      <Title>Eu sou Fagner Zulin</Title>
      <Subtitle>Desenvolvedor Web Full Stack</Subtitle>
      <Slogan>Aspirante a Desenvolvedor, Apaixonado por Tecnologia</Slogan>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
      <Tagline>
        <Tags>NodeJS</Tags>
        <Tags>Typescript</Tags>
        <Tags>ReactJS</Tags>
        <Tags>SQL</Tags>
      </Tagline>

      <Button marginTop="10" colorScheme="blue">
        CV em PDF
      </Button>
    </Container>
  );
}
