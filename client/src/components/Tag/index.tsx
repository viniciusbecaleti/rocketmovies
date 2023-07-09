import { TagContainer } from './styles'

interface TagProps {
  value: string
}

export function Tag({ value }: TagProps) {
  return <TagContainer>{value}</TagContainer>
}
