import styled from 'styled-components';

const media = {
  laptop: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
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
  ${media.laptop} {
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

  ${media.laptop} {
    margin-top: 40px;
  }
`;
export const FeaturedButton = styled.button`
  width: 280px;
  height: 36px;

  margin: 2rem 0;
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

  ${media.laptop} {
    margin-top: 40px;
    width: 500px;
    height: 40px;
    font-size: 1rem;
  }
`;

export const AboutSection = styled.section`
  background: #ffbb03;

  ${media.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  ${media.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    width: 100vw;
    height: 740px;
  }

  ${media.desktop} {
    height: 780px;
  }
`;

export const AboutCityImg = styled.div`
  display: none;

  ${media.laptop} {
    display: initial;
    position: relative;
    margin: 40px 0;
  }
`;
export const CityImg1 = styled.img`
  display: none;

  ${media.laptop} {
    display: initial;
    position: absolute;
    top: 10px;
    left: 50px;
  }
`;
export const CityImg2 = styled.img`
  display: none;

  ${media.laptop} {
    display: initial;
    position: absolute;
    top: 260px;
    left: 50px;
  }
`;

export const AboutTextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.laptop} {
    align-items: flex-end;
    position: absolute;
    top: 10px;
    left: 280px;
    width: 400px;
  }

  ${media.desktop} {
    left: 400px;
  }
`;

export const AboutTitle = styled.h1`
  margin-top: 40px;

  font-family: 'Alfa Slab One', cursive;
  font-size: 2.5rem;
  color: #930101;
  text-align: center;
  line-height: 4rem;
  letter-spacing: 2px;

  ${media.laptop} {
    text-align: right;
  }
`;

export const AboutBorder = styled.div`
  margin: 40px 0;

  width: 300px;
  height: 4px;
  border-radius: 20px;
  background: #930101;
`;

export const AboutBrandName = styled.p`
  margin-top: 20px;

  font-family: 'Alfa Slab One', cursive;
  font-size: 2rem;
  color: #930101;
  text-align: center;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 2px;

  ${media.laptop} {
    text-align: right;
  }
`;
export const AboutDescription = styled.p`
  margin-top: 20px;

  color: #000;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2rem;

  ${media.laptop} {
    text-align: right;
    width: 500px;
    margin-top: 20px;
  }
`;
export const AboutButton = styled.button`
  margin: 20px 0;
  width: 250px;
  height: 36px;
  background: #930101;

  color: #fff;
  font-weight: bold;

  border-radius: 20px;
  border: none;

  transition: all 0.4s;

  &:hover {
    background: #ff0000;
  }

  ${media.laptop} {
    margin-top: 60px;
  }
`;

export const AboutImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.laptop} {
    position: absolute;
    top: 60px;
    right: -200px;
  }

  ${media.desktop} {
    top: 10px;
    right: 0;
  }
`;

export const AboutSeal = styled.img`
  width: 205px;
  height: 290px;

  ${media.laptop} {
    top: 270px;
    left: 80px;
    position: absolute;
  }
`;

export const AboutProductImg = styled.img`
  width: 380px;
  height: 250px;

  ${media.laptop} {
    width: 850px;
    height: 600px;
  }

  ${media.desktop} {
    width: 1050px;
    height: 800px;
  }
`;
