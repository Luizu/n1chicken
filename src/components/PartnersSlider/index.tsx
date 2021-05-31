import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, ImageContainer, Image } from './styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export function PartnersSlider(): JSX.Element {
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: width <= 600 ? 1 : width <= 1000 ? 3 : 5,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Carousel {...settings}>
        <ImageContainer>
          <Image src="images/partners/Ifood.png" />
        </ImageContainer>
        <ImageContainer>
          <Image src="images/partners/Aryzta.png" />
        </ImageContainer>
        <ImageContainer>
          <Image src="images/partners/BenJerrys.png" />
        </ImageContainer>
        <ImageContainer>
          <Image src="images/partners/CocaCola.png" />
        </ImageContainer>
        <ImageContainer>
          <Image src="images/partners/Perdigao.png" />
        </ImageContainer>
      </Carousel>
    </Container>
  );
}
