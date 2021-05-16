import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1280px)',
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FeaturedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #750000;
  width: 100vw;
`;

export const CardContainer = styled.div`
  ${media.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const FeaturedTitle = styled.div`
  font-family: 'Alfa Slab One', cursive;
  color: #fff;
  margin: 2rem 0;
  font-size: 2.5rem;
`;

export const FeaturedDescription = styled.p`
  color: #fff;
  font-size: 1.5rem;

  ${media.desktop} {
    margin-top: 40px;
  }
`;
export const FeaturedButton = styled.button`
  width: 280px;
  height: 36px;

  margin-top: 1rem;
  border-radius: 20px;
  border: none;

  background: #ffd800;
  color: #ff0000;
  font-weight: bold;

  transition: all 0.4s;

  &:hover {
    color: #fff;
    background: #ff0000;
  }

  ${media.desktop} {
    margin-top: 40px;
    width: 500px;
    height: 40px;
    font-size: 1rem;
  }
`;
