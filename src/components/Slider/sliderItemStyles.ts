import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1280px)',
};

export const Container = styled.div`
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.img`
  height: 800px;
  width: 100vw;
  object-fit: cover;
  opacity: 0.5;
`;

export const ContentContainer = styled.section``;

export const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 4.9rem;
  font-family: 'Alfa Slab One', cursive;
  line-height: 6rem;
  margin: 8rem auto;
  text-align: center;

  ${media.desktop} {
    margin-top: 18rem;
  }
`;

export const Description = styled.div`
  margin-top: -4rem;
  color: #ffd800;
  font-size: 1rem;
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 2rem auto;

  width: 170px;
  height: 50px;
  border-radius: 20px;

  border: none;
  background: #910101;

  color: #fff;
  font-weight: bold;

  transition: all 0.4s;

  &:hover {
    background: #ffd800;
    color: #910101;
  }
`;
