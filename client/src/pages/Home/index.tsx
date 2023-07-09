import { FiPlus } from 'react-icons/fi'

import { HomeContainer, HomeMain, MovieList, Movies } from './styles'

import { useWindowSize } from '../../hooks/useWindowSize'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

export function Home() {
  const { innerWidth } = useWindowSize()

  return (
    <HomeContainer>
      <Header />

      <HomeMain>
        <Movies>
          <header>
            <h1>Meus filmes</h1>
            <Button small>
              <FiPlus />
              {innerWidth > 480 && 'Adicionar filme'}
            </Button>
          </header>

          <MovieList>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
          </MovieList>
        </Movies>
      </HomeMain>
    </HomeContainer>
  )
}
