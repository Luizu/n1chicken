import { Container, Content, Background, Title } from './styles';

interface PageBannerProps {
  title: string;
}

export function PageBanner({ title }: PageBannerProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Background />
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
