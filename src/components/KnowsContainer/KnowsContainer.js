import React from 'react';
import {
  Container,
  KnowTitle,
  SectionContent,
  SectionTitle,
  KnowContent,
  SectionContentItem,
} from './knowsContainer.styled';

export default function KnowsContainer() {
  return (
    <Container>
      <SectionTitle>Meus Conhecimentos</SectionTitle>
      <SectionContent>
        <SectionContentItem>
          <KnowTitle>Front-End</KnowTitle>
          <KnowContent>
            Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
            Criação de sites responsivos seguindo princípio de Mobile First.
          </KnowContent>
        </SectionContentItem>

        <SectionContentItem>
          <KnowTitle>Back-End</KnowTitle>
          <KnowContent>
            Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API´s
            para comunicação com front-end seguindo princípio de Clean Code.
          </KnowContent>
        </SectionContentItem>
      </SectionContent>
    </Container>
  );
}
