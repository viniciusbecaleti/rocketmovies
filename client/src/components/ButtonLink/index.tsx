import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { ButtonLinkContainer } from './styles'

interface ButtonLinkProps extends LinkProps {
  children: ReactNode
}

export function ButtonLink({ children, ...rest }: ButtonLinkProps) {
  return <ButtonLinkContainer {...rest}>{children}</ButtonLinkContainer>
}
