import styled, { css } from 'styled-components';

interface IDropdownMenuState {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100vw;
  height: 9rem;
  background: #710000;
  position: relative;
`;

export const Content = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img``;

export const Navbar = styled.nav``;

export const NavItem = styled.a``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FranchiseButton = styled.button`
  width: 210px;
  height: 36px;
  border-radius: 20px;
  border: none;
  margin-bottom: 1rem;

  font-size: 0.8rem;
  font-weight: bold;
  color: #ffffff;

  background: #ff0000;

  &:hover {
    background-color: #ffd800;
    color: #000;
  }
`;

export const MenuButton = styled.button`
  width: 210px;
  height: 36px;
  border-radius: 20px;
  border: none;

  background: #ffd800;

  font-size: 0.8rem;
  color: #ff0000;

  &:hover {
    background: #ff0000;
    color: #ffffff;
  }
`;

export const MobileNavigationMenu = styled.nav<IDropdownMenuState>`
  ${props =>
    props.isActive === true
      ? css`
          width: 100vw;
          background: #fff;
          position: absolute;
          z-index: 10;
          top: 7.7rem;
          left: 0;

          display: flex;
          align-items: center;
          flex-direction: column;
        `
      : css`
          display: none;
        `}
`;

export const MobileNavigationLink = styled.a`
  text-align: center;
  padding: 1rem;
  width: 100vw;
`;
