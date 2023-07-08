import { FiMail, FiLock } from 'react-icons/fi'

import { Background, Form, Login, SignInContainer } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

export function SignIn() {
  return (
    <SignInContainer>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Form>
          <Input icon={FiMail} type="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/register">Criar conta</Link>
      </Login>

      <Background />
    </SignInContainer>
  )
}
