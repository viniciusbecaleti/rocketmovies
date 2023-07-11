import { useState } from 'react'
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi'

import {
  CreateContainer,
  CreateContent,
  CreateMain,
  Form,
  Marcador,
  Marcadores,
  NewMarker,
} from './styles'

import { Header } from '../../components/Header'
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Create() {
  const [markers, setMarkers] = useState<string[]>([])
  const [newMarker, setNewMarker] = useState('')

  function handleCreateNewMarker() {
    const marker = newMarker.toLowerCase()

    if (!newMarker) {
      return null
    }

    if (markers.find((mark) => mark === marker)) {
      return alert('Você está adicionando um marcador que já existe, palhaço')
    }

    setMarkers((prev) => [...prev, marker])
    setNewMarker('')
  }

  return (
    <CreateContainer>
      <Header />

      <CreateContent>
        <CreateMain>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <h1>Novo filme</h1>

          <Form id="newMovieForm">
            <div>
              <Input type="text" placeholder="Título" />
              <Input type="number" placeholder="Avaliação" min={1} max={5} />
            </div>

            <textarea placeholder="Observações" />
          </Form>

          <h2>Marcadores</h2>

          <Marcadores>
            {markers.map((mark) => (
              <Marcador key={mark}>
                {mark}
                <button type="button">
                  <FiX />
                </button>
              </Marcador>
            ))}

            <NewMarker>
              <input
                type="text"
                placeholder="Novo marcador"
                value={newMarker}
                onChange={({ target }) => setNewMarker(target.value)}
                onKeyDown={({ key }) =>
                  key === 'Enter' && handleCreateNewMarker()
                }
              />
              <button type="button" onClick={handleCreateNewMarker}>
                <FiPlus />
              </button>
            </NewMarker>
          </Marcadores>

          <Button type="submit" form="newMovieForm">
            Cadastrar
          </Button>
        </CreateMain>
      </CreateContent>
    </CreateContainer>
  )
}
