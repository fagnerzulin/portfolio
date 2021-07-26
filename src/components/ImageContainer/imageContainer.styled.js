import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  width: 49.5vw;
  margin-left: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(38, 70, 83, 0.47);
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30px;
  height: 225px;
  position: relative;
  right: -60px;
`;
