import styled from 'styled-components'
import { darken, transparentize } from 'polished'
import { IRadioBox } from '../../Interfaces/IRadioBox'

export const Content = styled.div`
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: all 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  button[type='submit'] {
    margin-top: 1.5rem;
  }
`
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
}

export const RadioBox = styled.button<IRadioBox>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
