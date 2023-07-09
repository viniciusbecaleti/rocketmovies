import styled from 'styled-components'

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  margin-block: 8rem 16rem;

  svg {
    color: ${({ theme }) => theme['pink-500']};
  }
`
