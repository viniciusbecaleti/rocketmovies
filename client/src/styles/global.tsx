import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  html {
    font-size: 6.25%;
  }

  body {
    color: ${({ theme }) => theme['gray-100']};
    background-color: ${({ theme }) => theme['gray-800']};
  }

  body, input, select, textarea, button {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 16rem;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  @media (min-height: 1080px) {
    body {
      height: 100vh;
      display: grid;
      align-items: center;
    }
  }
`
