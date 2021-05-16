import { Slider } from '../components/Slider';
import { Header } from '../components/Header';
import {
  Container,
  FeaturedSection,
  FeaturedTitle,
  CardContainer,
  FeaturedDescription,
  FeaturedButton,
  AboutSection,
  AboutContent,
  AboutCityImg,
  CityImg1,
  CityImg2,
  AboutTextContent,
  AboutImgContent,
  AboutTitle,
  AboutBorder,
  AboutBrandName,
  AboutDescription,
  AboutButton,
  AboutSeal,
  AboutProductImg,
} from '../styles/homeStyles';
import { Card } from '../components/Card';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Slider />
      <FeaturedSection>
        <FeaturedTitle>DESTAQUES</FeaturedTitle>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>

        <FeaturedDescription>E muito mais...</FeaturedDescription>
        <FeaturedButton>VEJA NOSSO CARDÁPIO COMPLETO</FeaturedButton>
      </FeaturedSection>

      <AboutSection>
        <AboutContent>
          <AboutCityImg>
            <CityImg1 src="images/cidade-1.png" />
            <CityImg2 src="images/cidade-2.png" />
          </AboutCityImg>
          <AboutTextContent>
            <AboutTitle>CONHEÇA NOSSA HISTÓRIA</AboutTitle>

            <AboutBorder />

            <AboutBrandName>NUMBER ONE CHICKEN</AboutBrandName>

            <AboutDescription>
              Fundada em 2017, o N1 Chicken é uma marca inovadora no mercado de
              Dark Kitchen, especializada em Delivery e no saboroso Frango Frito
              Crocante.
            </AboutDescription>

            <AboutButton>SAIBA MAIS</AboutButton>
          </AboutTextContent>

          <AboutImgContent>
            <AboutSeal src="images/selo.png" />
            <AboutProductImg src="images/products/combo-gg.png" />
          </AboutImgContent>
        </AboutContent>
      </AboutSection>
    </Container>
  );
}
