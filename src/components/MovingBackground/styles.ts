import styled from 'styled-components';
import { media } from '../../styles/global';

interface IMotoboyAvatarProps {
  position: string;
  positionMobile: string;
}

export const Container = styled.div`
  @keyframes backgroundScroll {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -180px 0px;
    }
  }

  width: 100vw;
  height: 180px;
  background: url('images/cities-background.png') repeat;
  background-size: auto;
  animation: backgroundScroll 15s linear infinite;
  animation-fill-mode: forwards;

  position: relative;
`;

export const MotoboyAvatar = styled.img<IMotoboyAvatarProps>`
  width: 150px;
  height: 150px;

  position: absolute;
  bottom: 0;
  transition: all 0.5s;
  transform: ${props => props.positionMobile};

  ${media.laptop} {
    transform: ${props => props.position};
  }
`;
