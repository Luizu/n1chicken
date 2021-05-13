import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { Container } from './homeStyles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Carousel />
    </Container>
  );
}
