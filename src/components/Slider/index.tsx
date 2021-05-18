import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './styles';
import { SliderItem } from './SliderItem';

export function Slider(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Carousel {...settings}>
        <SliderItem name="frango" />
        <SliderItem name="burguer" />
      </Carousel>
    </Container>
  );
}
