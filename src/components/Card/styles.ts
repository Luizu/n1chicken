import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1280px)',
};

export const Container = styled.div`
  width: 350px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.desktop} {
    width: 500px;
    height: 350px;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 20px;

  ${media.desktop} {
    width: 500px;
    height: 350px;
  }
`;
export const Title = styled.h1`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #fff;
`;
