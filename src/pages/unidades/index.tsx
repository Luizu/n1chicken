import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageBanner } from '../../components/PageBanner';
import { Container } from '../../styles/pagesStyles/Unidades';

export default function Unidades(): JSX.Element {
  return (
    <Container>
      <Header />
      <PageBanner title="UNIDADES" />
      <Footer />
    </Container>
  );
}
