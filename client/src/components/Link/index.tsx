import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { LinkContainer } from './styles'

interface LinkType extends LinkProps {
  children: ReactNode
}

export function Link({ to, children }: LinkType) {
  return <LinkContainer to={to}>{children}</LinkContainer>
}
