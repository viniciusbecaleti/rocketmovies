import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  grid-area: header;

  position: fixed;
  width: 100%;

  padding-inline: 16rem;
  border-bottom: 1px solid ${({ theme }) => theme['gray-500']};
  background: ${({ theme }) => theme['gray-800']};
`

export const HeaderContent = styled.div`
  max-width: 1120rem;
  height: 116rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32rem;

  @media (max-width: 480px) {
    height: 86rem;
  }
`

export const Logo = styled(Link)`
  color: ${({ theme }) => theme['pink-500']};
  font-size: clamp(18rem, 6vw, 24rem);
  font-weight: 700;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;

  text-align: right;

  a {
    color: ${({ theme }) => theme['gray-400']};
  }

  > img {
    width: 64rem;
    height: 64rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme['gray-500']};
  }

  @media (max-width: 480px) {
    > img {
      width: 48rem;
      height: 48rem;
    }
  }
`
