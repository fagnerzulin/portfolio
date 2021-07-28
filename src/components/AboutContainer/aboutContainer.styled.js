import styled from 'styled-components';
import palette from '../../constants/palette';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 0.5vw;
  height: 80vh;
  width: 49.5vw;
  background-color: ${palette.charcoal.hex};
`;

export const Title = styled.h1`
  width: 294px;
  height: 122px;
  margin: 0 75px 6px 0;
  font-size: 2.8em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
`;

export const Subtitle = styled.h2`
  width: 356px;
  height: 29px;
  margin: 6px 13px 12px 0;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const Slogan = styled.h3`
  width: 338px;
  height: 19px;
  margin: 12px 31px 52px 0;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
`;

export const Description = styled.p`
  width: 368px;
  height: 122px;
  margin: 12px 0 26px 1px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export const Tagline = styled.div`
  width: 338px;
  height: 19px;
`;

export const Tags = styled.span`
  font-size: 14px;
  padding-left: 5px;
  margin: 26px 16px 32px 5px;
  border-left: 3px solid ${palette.white.hex};
`;
