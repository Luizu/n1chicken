import { Slider } from '../components/Slider';
import { Header } from '../components/Header';
import { Container } from './homeStyles';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Slider />
    </Container>
  );
}
