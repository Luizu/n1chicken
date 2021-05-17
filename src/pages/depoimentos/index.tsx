import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageBanner } from '../../components/PageBanner';
import { Container } from '../../styles/pagesStyles/Depoimentos';

export default function Depoimentos(): JSX.Element {
  return (
    <Container>
      <Header />
      <PageBanner title="DEPOIMENTOS" />
      <Footer />
    </Container>
  );
}
