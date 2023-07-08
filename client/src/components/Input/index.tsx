import { ComponentType, InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <InputContainer>
      {Icon && <Icon />}
      <input {...rest} />
    </InputContainer>
  )
}
