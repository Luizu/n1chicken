import styled, { css } from 'styled-components';

const media = {
  maxMobile: '@media(max-width:800px)',
  desktop: '@media(min-width: 1280px)',
};

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
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.desktop} {
    max-width: 1000px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;

  ${media.desktop} {
    width: 120px;
    height: 120px;
  }
`;

export const Navbar = styled.nav`
  display: none;

  ${media.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavItem = styled.a`
  color: #fff;
  padding: 1rem;
  white-space: nowrap;
  font-size: 1rem;

  &:hover {
    border-bottom: 2px solid #ffd800;
    font-weight: bold;
  }
`;

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

  ${media.desktop} {
    margin-bottom: 0;
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

  ${media.desktop} {
    display: none;
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
          transition: height 10.5s;
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
