import styled, { css } from 'styled-components';

interface ActiveLinkProps {
  isActive: boolean;
}

export const Text = styled.a<ActiveLinkProps>`
  text-align: center;
  padding: 1rem;
  width: 100vw;
  text-decoration: none;

  ${props =>
    props.isActive &&
    css`
      background: #930101;
      color: #fff;
    `}
`;
