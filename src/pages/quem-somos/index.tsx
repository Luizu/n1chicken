import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageBanner } from '../../components/PageBanner';
import { MovingBackground } from '../../components/MovingBackground';

import {
  Container,
  ContentContainer,
  Background,
  Content,
  TextContent,
  Title,
  Description,
  SliderContent,
  Item,
  Moving,
} from '../../styles/pagesStyles/QuemSomos';

export default function About(): JSX.Element {
  return (
    <Container>
      <Header />
      <PageBanner title="NOSSA HISTÓRIA" />

      <ContentContainer>
        <Background />
        <Content>
          <TextContent>
            <Title>Number One Chicken</Title>
            <Description>
              O N1 Chicken surgiu em 2017 como uma marca inovadora 100% focada
              em delivery. Unimos a paixão pelo delicioso frango frito com a
              comodidade de comer em casa. O resultado é uma franquia de
              excelência, focada totalmente na qualidade do produto e na
              satisfação do cliente.
              <br />
              A empresa se apoia em três pilares essenciais: criatividade,
              colaboração e simplicidade.
              <br />
              Essa é a nossa ponte para o sucesso e a expressão mais pura do que
              é a marca.
              <br />
              Vamos proporcionar prazer e encantamento para as pessoas!
            </Description>
          </TextContent>
          {/* <SliderContent>
            <Carousel
              autoPlay
              showStatus={false}
              infiniteLoop
              showThumbs={false}
            >
              <Item src="images/quem-somos-carousel/img1.jpg" />
              <Item src="images/quem-somos-carousel/img2.jpg" />
              <Item src="images/quem-somos-carousel/img3.jpg" />
              <Item src="images/quem-somos-carousel/img4.jpg" />
            </Carousel>
          </SliderContent> */}
        </Content>
        <Moving>
          <MovingBackground />
        </Moving>
        <Footer />
      </ContentContainer>
    </Container>
  );
}
