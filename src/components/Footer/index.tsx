import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {
  Container,
  Background,
  SectionsContainer,
  Sections,
  SectionTitle,
  RLink,
  SectionDescription,
  ButtonsContainer,
  SocialMediaBtn,
  IfoodSection,
  IfoodLogo,
  IfoodBtn,
  Disclaimer,
} from './styles';

export function Footer(): JSX.Element {
  return (
    <Container>
      <Background />
      <SectionsContainer>
        <Sections>
          <SectionTitle>INSTITUCIONAL</SectionTitle>
          <RLink>Home</RLink>
          <RLink>N1 Chicken</RLink>
          <RLink>Fale Conosco</RLink>
        </Sections>

        <Sections>
          <SectionTitle>COMERCIAL</SectionTitle>
          <RLink>Unidades</RLink>
          <RLink>Cardápio</RLink>
          <RLink>-</RLink>
        </Sections>

        <Sections>
          <SectionTitle>REDES SOCIAIS</SectionTitle>

          <SectionDescription>
            Acompanhe o N1 Chicken nas redes sociais
          </SectionDescription>

          <ButtonsContainer>
            <SocialMediaBtn title="face">
              <FiFacebook size="25" />
            </SocialMediaBtn>
            <SocialMediaBtn title="insta">
              <FiInstagram size="25" />
            </SocialMediaBtn>
          </ButtonsContainer>
        </Sections>

        <IfoodSection>
          <IfoodLogo src="images/partners/IfoodWhite.png" />
          <IfoodBtn>Faça seu pedido</IfoodBtn>
        </IfoodSection>
      </SectionsContainer>
      <Disclaimer>
        ATW Delivery Brands © 2021 - Todos os direitos reservados
      </Disclaimer>
    </Container>
  );
}
