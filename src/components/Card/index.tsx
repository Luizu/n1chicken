import { Container, Image, Title } from './styles';

export function Card(): JSX.Element {
  return (
    <Container>
      <Image src="images/products/suino-m.jpg" />
      <Title>FILÉ MIGNON SUÍNO</Title>
    </Container>
  );
}
