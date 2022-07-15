import styled, { css } from 'styled-components'
import { IButton } from '../Interfaces/IButton'

export const Button = styled.button<IButton>`
  font-size: 1rem;
  color: #fff;
  background-color: var(--blue-light);
  border: 0;
  width: ${({ width }) => (width ? width : '138px')};
  height: 3rem;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: opacity(0.6);
  }

  ${({ secondaryStyle }) =>
    secondaryStyle &&
    css`
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background-color: var(--green);
      color: #fff;
      border: 0;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }

      &:active {
        filter: opacity(0.6);
      }
    `}
`
