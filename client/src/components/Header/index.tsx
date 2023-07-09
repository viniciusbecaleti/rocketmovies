import { Link } from 'react-router-dom'

import { HeaderContainer, HeaderContent, Logo, Profile } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">RocketMovies</Logo>

        <Profile>
          <div>
            <strong>Vinicius</strong>
            <Link to="/">sair</Link>
          </div>

          <img src="https://github.com/viniciusbecaleti.png" alt="" />
        </Profile>
      </HeaderContent>
    </HeaderContainer>
  )
}
