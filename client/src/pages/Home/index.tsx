import { useEffect, useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { HomeContainer, HomeMain, MovieList } from './styles'

import { useWindowSize } from '../../hooks/useWindowSize'

import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { ButtonLink } from '../../components/ButtonLink'

export function Home() {
  const movieListRef = useRef<HTMLDivElement>(null)
  const [isScrollMovieListVisible, setIsScrollMovieListVisible] =
    useState(false)

  const { innerWidth } = useWindowSize()

  useEffect(() => {
    if (movieListRef.current) {
      const { scrollHeight, offsetHeight } = movieListRef.current
      setIsScrollMovieListVisible(scrollHeight > offsetHeight)
    }
  }, [movieListRef])

  return (
    <HomeContainer>
      <Header />

      <HomeMain>
        <div>
          <h1>Meus filmes</h1>
          <ButtonLink to="/create">
            <FiPlus />
            {innerWidth > 480 && 'Adicionar filme'}
          </ButtonLink>
        </div>

        <MovieList
          ref={movieListRef}
          isScrollMovieListVisible={isScrollMovieListVisible}
        >
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </MovieList>
      </HomeMain>
    </HomeContainer>
  )
}
