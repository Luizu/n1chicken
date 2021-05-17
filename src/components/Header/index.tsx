import { useCallback, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNavItem from '../MobileNavItem';
import { NavItem } from './NavItem';
import {
  Container,
  Content,
  Logo,
  Navbar,
  ButtonsContainer,
  FranchiseButton,
  MenuButton,
  MobileNavigationMenu,
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
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/quem-somos">QUEM SOMOS</NavItem>
            <NavItem href="/cardapio">CARDÁPIO</NavItem>
            <NavItem href="/depoimentos">DEPOIMENTOS</NavItem>
            <NavItem href="/unidades">UNIDADES</NavItem>
          </Navbar>

          <ButtonsContainer>
            <FranchiseButton>SEJA UM FRANQUEADO</FranchiseButton>
            <MenuButton onClick={handleDropdownMenuState}>
              {isActive === false ? <FiMenu size="20" /> : <FiX size="20" />}
            </MenuButton>
          </ButtonsContainer>

          <MobileNavigationMenu isActive={isActive}>
            <MobileNavItem href="/">HOME</MobileNavItem>
            <MobileNavItem href="/quem-somos">QUEM SOMOS</MobileNavItem>
            <MobileNavItem href="/cardapio">CARDÁPIO</MobileNavItem>
            <MobileNavItem href="/depoimentos">DEPOIMENTOS</MobileNavItem>
            <MobileNavItem href="/unidades">UNIDADES</MobileNavItem>
          </MobileNavigationMenu>
        </Content>
      </Container>
    </>
  );
}
