import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled(Link)`
  color: ${({ theme }) => theme['pink-500']};

  display: flex;
  align-items: center;
  gap: 8rem;
`
