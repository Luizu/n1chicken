import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from './styles';

export default function About(): JSX.Element {
  return (
    <Container>
      <Header />
      <h1>quem-somos</h1>
      <Footer />
    </Container>
  );
}
