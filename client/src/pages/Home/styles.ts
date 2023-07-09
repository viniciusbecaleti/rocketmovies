import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'content';
`

export const HomeMain = styled.main`
  grid-area: content;

  width: 100%;
  max-width: 1152rem;
  margin-inline: auto;
  margin-top: 116rem;
  padding: 40rem 16rem;

  @media (max-width: 480px) {
    margin-top: 86rem;
  }
`

export const Movies = styled.section`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32rem;
      font-weight: 400;
    }

    button {
      width: fit-content;
    }
  }
`

export const MovieList = styled.div`
  margin-top: 32rem;

  display: flex;
  flex-direction: column;
  gap: 24rem;
`
