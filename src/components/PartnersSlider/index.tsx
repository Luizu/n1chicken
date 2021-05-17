import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container, Image } from './styles';

export function PartnersSlider(): JSX.Element {
  return (
    <Container>
      <Carousel autoPlay showStatus={false} infiniteLoop showThumbs={false}>
        <Image src="images/partners/Ifood.png" />
        <Image src="images/partners/Aryzta.png" />
        <Image src="images/partners/BenJerrys.png" />
        <Image src="images/partners/CocaCola.png" />
        <Image src="images/partners/Perdigao.png" />
      </Carousel>
    </Container>
  );
}
