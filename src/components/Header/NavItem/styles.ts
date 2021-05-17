import styled, { css } from 'styled-components';

interface ActiveLinkProps {
  isActive: boolean;
}

export const Text = styled.a<ActiveLinkProps>`
  color: #fff;
  padding: 1rem;
  white-space: nowrap;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #ffd800;
    font-weight: bold;
  }

  ${props =>
    props.isActive &&
    css`
      border-bottom: 2px solid #ffd800;
      font-weight: bold;
    `}
`;
