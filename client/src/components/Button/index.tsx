import { ButtonHTMLAttributes, ComponentType, ReactNode } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType
  small?: boolean
  children: ReactNode
}

export function Button({
  icon: Icon,
  small = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer small={small} {...rest}>
      {Icon && <Icon />}
      {children}
    </ButtonContainer>
  )
}
