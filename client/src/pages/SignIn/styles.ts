import styled from 'styled-components'
import { rgba } from 'polished'

import background from '../../assets/background.jpg'

export const SignInContainer = styled.div`
  max-width: 1920rem;
  height: 100vh;
  max-height: 1080rem;
  margin: 0 auto;

  display: flex;
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-inline: 134rem;

  > h1 {
    font-size: 48rem;
    color: ${({ theme }) => theme['pink-500']};
  }

  > p {
    font-size: 14rem;
    color: ${({ theme }) => theme['gray-300']};
  }

  > h2 {
    margin-block: 48rem;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    flex: 1;
    padding-inline: 16rem;
    align-items: center;

    background: ${({ theme }) => `
      linear-gradient(
        0deg,
        ${rgba(theme['gray-900'], 1)} 10%,
        ${rgba(theme['gray-900'], 0.7)} 100%
      ),
      url(${background}) no-repeat center/cover
    `};
  }
`

export const Form = styled.form`
  width: 100%;

  > div + div {
    margin-top: 8rem;
  }

  > button {
    margin-top: 24rem;
  }

  @media (max-width: 1024px) {
    max-width: 340rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: ${({ theme }) => `
    linear-gradient(
      0deg,
      ${rgba(theme['gray-900'], 0.7)},
      ${rgba(theme['gray-900'], 0.7)}
    ),
    url(${background}) no-repeat center/cover
  `};

  @media (max-width: 1024px) {
    display: none;
  }
`
