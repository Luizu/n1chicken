import { useCallback, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  Container,
  Content,
  Logo,
  Navbar,
  NavItem,
  ButtonsContainer,
  FranchiseButton,
  MenuButton,
  MobileNavigationMenu,
  MobileNavigationLink,
} from './styles';

export function Header(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const handleDropdownMenuState = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <>
      <Container>
        <Content>
          <Logo src="/images/Logo.png" />
          <Navbar>
            <NavItem>HOME</NavItem>
            <NavItem>QUEM SOMOS</NavItem>
            <NavItem>CARDÁPIO</NavItem>
            <NavItem>DEPOIMENTOS</NavItem>
            <NavItem>UNIDADES</NavItem>
          </Navbar>

          <ButtonsContainer>
            <FranchiseButton>SEJA UM FRANQUEADO</FranchiseButton>
            <MenuButton onClick={handleDropdownMenuState}>
              {isActive === false ? <FiMenu size="20" /> : <FiX size="20" />}
            </MenuButton>
          </ButtonsContainer>
          <MobileNavigationMenu isActive={isActive}>
            <MobileNavigationLink>HOME</MobileNavigationLink>
            <MobileNavigationLink>QUEM SOMOS</MobileNavigationLink>
            <MobileNavigationLink>CARDÁPIO</MobileNavigationLink>
            <MobileNavigationLink>DEPOIMENTOS</MobileNavigationLink>
            <MobileNavigationLink>UNIDADES</MobileNavigationLink>
          </MobileNavigationMenu>
        </Content>
      </Container>
    </>
  );
}
