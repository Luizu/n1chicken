import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, ImageContainer, Image } from './styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export function PartnersSlider(): JSX.Element {
  const { width } = useWindowDimensions();

  const partners = [
    {
      title: 'Aryzta',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Aryzta-1.png',
    },
    {
      title: 'Perdigão',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Perdigao.png',
    },
    {
      title: 'Ifood',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Ifood.png',
    },
    {
      title: "Ben & Jerry's",
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/BenJerrys.png',
    },
    {
      title: 'Coca Cola',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/CocaCola.png',
    },
    {
      title: 'Brf',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/brf.png',
    },
    {
      title: 'Sadia',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Sadia.png',
    },
    {
      title: 'Vaipe',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Vaipe.png',
    },
    {
      title: 'Good Pack',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/GoodPack.png',
    },
    {
      title: 'Kibon',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Kibon.png',
    },
    {
      title: 'Ame',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Ame.png',
    },
    {
      title: 'Unileven',
      imageUrl:
        'https://www.n1chicken.com.br/wp-content/uploads/2021/04/Unileven.png',
    },
  ];

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
        {partners.map(partner => {
          return (
            <ImageContainer key={partner.title}>
              <Image src={partner.imageUrl} alt={partner.title} />
            </ImageContainer>
          );
        })}
      </Carousel>
    </Container>
  );
}
