import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container } from '../../styles/pagesStyles/Cardapio';
import { PageBanner } from '../../components/PageBanner';

export default function Cardapio(): JSX.Element {
  return (
    <Container>
      <Header />
      <PageBanner title="CARDÁPIO" />
      <Footer />
    </Container>
  );
}
