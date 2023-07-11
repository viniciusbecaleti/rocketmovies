import styled from 'styled-components'

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  svg {
    color: ${({ theme }) => theme['pink-500']};
  }
`
