import styled from 'styled-components';
import { media } from '../../styles/global';

export const Container = styled.div`
  width: 350px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.laptop} {
    width: 500px;
    height: 350px;
  }

  ${media.desktop} {
    width: 600px;
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 20px;

  ${media.laptop} {
    width: 500px;
    height: 350px;
  }

  ${media.desktop} {
    width: 600px;
    height: 400px;
  }
`;
export const Title = styled.h1`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #fff;
`;
