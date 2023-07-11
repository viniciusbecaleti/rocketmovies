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

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme['pink-500']} ${({ theme }) =>
  theme['gray-900']};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['gray-900']};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['pink-500']};
    border-radius: 8px;
    border: 4px solid transparent;
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
    display: block;
    text-decoration: none;
  }

  @media (min-height: 1080px) {
    body {
      height: 100vh;
      display: grid;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 5.46875%;
    }
  }
`
