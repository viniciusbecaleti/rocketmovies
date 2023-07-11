import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 116rem calc(100vh - 116rem);
  grid-template-areas:
    'header'
    'content';

  overflow: hidden;

  @media (max-width: 480px) {
    grid-template-rows: 96rem calc(100vh - 96rem);
  }
`

export const HomeMain = styled.main`
  grid-area: content;

  width: 100%;
  max-width: 1152rem;
  margin-inline: auto;
  margin-bottom: 30rem;
  padding-inline: 16rem;

  display: grid;
  grid-template-rows: 132rem calc(100% - 132rem);

  overflow: hidden;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: fit-content;
    }
  }

  @media (max-width: 480px) {
    grid-template-rows: 96rem calc(100% - 96rem);
  }
`

interface MovieListProps {
  isScrollMovieListVisible: boolean
}

export const MovieList = styled.div<MovieListProps>`
  justify-items: start;

  display: flex;
  flex-direction: column;
  gap: 24rem;

  overflow-y: auto;

  padding-right: ${({ isScrollMovieListVisible }) =>
    isScrollMovieListVisible && '16rem'};

  @media (max-width: 480px) {
    gap: 16rem;
  }
`
