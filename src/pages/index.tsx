import { Slider } from '../components/Slider';
import { Header } from '../components/Header';
import {
  Container,
  FeaturedSection,
  FeaturedTitle,
  CardContainer,
  FeaturedDescription,
  FeaturedButton,
} from './homeStyles';
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
    </Container>
  );
}
