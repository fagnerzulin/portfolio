import styled from 'styled-components';
import palette from '../../constants/palette';

export const Container = styled.div`
  margin-top: 1vh;
  height: 50vh;
  width: 100vw;
  background-color: ${palette.orangeYellowCrayola.hex};
`;

export const SectionTitle = styled.h2`
  margin-top: 42px;
  font-size: 1.5em;
  text-align: center;
`;

export const SectionContent = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SectionContentItem = styled.div`
  width: 20%;
`;

export const KnowTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export const KnowContent = styled.p`
  margin-top: 10px;
`;
