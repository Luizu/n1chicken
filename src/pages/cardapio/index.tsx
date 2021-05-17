import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container } from '../../styles/pages/Cardapio';

export default function Cardapio(): JSX.Element {
  return (
    <Container>
      <Header />
      <h1>cardapio</h1>
      <Footer />
    </Container>
  );
}
