import styled from 'styled-components';
import { media } from '../global';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100vw;
  position: relative;
  background: #fff;
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.1;
  background: url('images/background.jpg') no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  ${media.laptop} {
    flex-direction: row-reverse;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  max-width: 300px;

  ${media.laptop} {
    max-width: 800px;
    margin: 2rem;
  }
`;

export const Title = styled.h1`
  color: #ffbb03;
  font-family: 'Alfa Slab One', cursive;
  letter-spacing: 4px;
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;

  ${media.laptop} {
    max-width: 400px;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;

  ${media.laptop} {
    max-width: 600px;
  }
`;

export const SliderContent = styled.div`
  margin: 2rem 0;

  width: 350px;

  ${media.laptop} {
    width: 600px;
  }
`;

export const Item = styled.img`
  border-radius: 20px;
`;

export const Moving = styled.div``;
