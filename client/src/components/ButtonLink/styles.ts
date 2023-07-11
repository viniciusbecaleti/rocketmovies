import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const ButtonLinkContainer = styled(Link)`
  width: 100%;
  height: 48rem;

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
