import styled from 'styled-components'

export const InputContainer = styled.div`
  height: 56rem;

  display: flex;
  align-items: center;
  gap: 16rem;

  padding-inline: 16rem;

  border-radius: 10px;
  background: ${({ theme }) => theme['gray-700']};

  > svg {
    font-size: 20rem;
    color: ${({ theme }) => theme['gray-400']};
  }

  > input {
    width: 100%;

    color: ${({ theme }) => theme['gray-100']};

    border: none;
    background: none;

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
      opacity: 1;
    }
  }
`
