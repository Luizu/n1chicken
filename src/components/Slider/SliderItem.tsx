import {
  Container,
  ImageContainer,
  Content,
  Title,
  Description,
  Button,
} from './sliderItemStyles';

interface SliderItemProps {
  name: string;
}

export function SliderItem({ name }: SliderItemProps): JSX.Element {
  const sliderContent = [
    {
      name: 'burguer',
      path: 'images/burguer.jpg',
      altText: 'Imagem de hamburguer',
      title: 'CONHEÇA NOSSOS BURGUERS',
      description: 'Pra te dar água na boca',
      buttonText: 'Conheça mais',
    },
    {
      name: 'frango',
      path: 'images/frango.jpg',
      altText: 'Imagem de frango frito',
      title: 'O MELHOR FRANGO FRITO DO BRASIL',
      description: 'Crocante, Saboroso, Viciante.',
      buttonText: 'Peça já o seu',
    },
  ];

  const filteredItem = sliderContent.find(item => item.name === name);

  return (
    <Container>
      <ImageContainer src={filteredItem.path} alt={filteredItem.altText} />
      <Content>
        <Title>{filteredItem.title}</Title>
        <Description>{filteredItem.description}</Description>
        <Button>{filteredItem.buttonText}</Button>
      </Content>
    </Container>
  );
}
