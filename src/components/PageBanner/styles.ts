import styled from 'styled-components';
import { media } from '../../styles/global';

export const Container = styled.section`
  width: 100vw;
  height: 400px;
  position: relative;
  background: #000;

  ${media.laptop} {
    height: 230px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.3;
  background: url('images/pageBanner.jpg') no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.laptop} {
    max-width: 800px;
    margin-left: 10rem;
  }

  ${media.desktop} {
    width: 1400px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 2rem;
  letter-spacing: 2px;
  font-family: 'Alfa Slab One', cursive;
  z-index: 1;
`;
