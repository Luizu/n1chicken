import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container } from './styles';
import { SliderItem } from './SliderItem';

export function Slider(): JSX.Element {
  return (
    <Container>
      <Carousel autoPlay showStatus={false} infiniteLoop showThumbs={false}>
        <SliderItem name="frango" />
        <SliderItem name="burguer" />
      </Carousel>
    </Container>
  );
}
