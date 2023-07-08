import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'

import { Background, Form, Login, SignInContainer } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

export function SignUp() {
  return (
    <SignInContainer>
      <Login>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Form>
          <Input icon={FiUser} type="text" placeholder="Nome" />
          <Input icon={FiMail} type="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Login>

      <Background />
    </SignInContainer>
  )
}
