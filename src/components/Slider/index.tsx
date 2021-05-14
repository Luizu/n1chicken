import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container } from './styles';
import { SliderItem } from './SliderItem';

export function Slider(): JSX.Element {
  return (
    <Container>
      <Carousel autoPlay showStatus={false} infiniteLoop>
        <SliderItem name="frango" title="frangrinho" />
        <SliderItem name="burguer" title="burguinho" />
      </Carousel>
    </Container>
  );
}
