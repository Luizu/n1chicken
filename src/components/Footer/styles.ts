import styled from 'styled-components';
import { media } from '../../styles/global';

interface ISocialMediaProps {
  title: string;
}

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #930101;
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.2;
  background: url('images/footer-bg.jpg') no-repeat center;
  background-size: auto;
`;

export const SectionsContainer = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  ${media.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Sections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 170px;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const RLink = styled.a`
  color: #fff;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const SectionDescription = styled.p`
  color: #fff;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

export const ButtonsContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SocialMediaBtn = styled.button<ISocialMediaProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  margin: 0 1rem;

  transition: all 0.4s;

  &:hover {
    color: ${props => (props.title === 'face' ? '#0D8CF0' : '#CD2E96')};
  }
`;

export const IfoodSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const IfoodLogo = styled.img`
  color: #fff;
`;

export const IfoodBtn = styled.button`
  width: 200px;
  height: 50px;
  background: #fff;

  font-size: 1.2rem;
  font-weight: bold;
  color: #930101;

  border-radius: 20px;
  border: none;

  &:hover {
    animation: pulseEffect 1s infinite;
    background: #ffd000;
  }
`;

export const Disclaimer = styled.p`
  margin: 2rem 0;
  color: #fff;
  font-size: 1rem;
`;
