import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Avatar, Fields, Form, Header, HeaderContent } from './styles'

import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <>
      <Header>
        <HeaderContent>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </HeaderContent>
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/viniciusbecaleti.png" alt="" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Fields>
          <Input icon={FiUser} type="text" value="Vinicius Becaleti" />
          <Input icon={FiMail} type="email" value="vinicius@becaleti.com" />
          <Input icon={FiLock} type="password" placeholder="Senha atual" />
          <Input icon={FiLock} type="password" placeholder="Nova senha" />
        </Fields>

        <Button type="submit" small disabled>
          Salvar
        </Button>
      </Form>
    </>
  )
}
