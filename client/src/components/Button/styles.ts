import styled from 'styled-components'

interface ButtonContainerProps {
  small: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: ${({ small }) => (small ? '48rem' : '56rem')};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  padding-inline: 16rem;

  font-weight: 500;
  color: ${({ theme }) => theme['gray-800']};

  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['pink-500']};

  svg {
    font-size: 20rem;
  }
`
