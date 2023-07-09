import styled from 'styled-components'

export const TagContainer = styled.div`
  color: ${({ theme }) => theme['gray-200']};
  font-size: 12rem;

  padding: 5rem 16rem;

  border-radius: 8rem;
  background: ${({ theme }) => theme['gray-600']};
`
