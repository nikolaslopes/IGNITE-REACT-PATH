import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`
