import styled from 'styled-components';
import { media } from '../../styles/global';

export const Container = styled.div`
  width: 100vw;
  margin-bottom: 2rem;

  ${media.laptop} {
    width: 70vw;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 160px !important;
  height: 160px;
`;

export const Image = styled.img`
  width: 160px !important;
  height: 160px;
  margin-bottom: 2rem;
`;
