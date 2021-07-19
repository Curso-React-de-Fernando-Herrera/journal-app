import { useForm } from 'hooks/useForm'
import { useDispatch } from 'react-redux'
import GoogleLogin from 'components/GoogleLogin'

import { login } from 'actions/login'

import {
  PageContainer,
  ModalRegister,
  Title,
  InputForm,
  ButtonRegister,
  Link
} from './styles'

const Register = () => {
  const dispatch = useDispatch()

  const initialStates = {
    name: "",
    email: "",
  }

  const { handleInputChange, inputStates } = useForm(initialStates)
  const { email, password } = inputStates

  const handleRegister = e => {
    e.preventDefault()
    dispatch( login({ displayName: 'Mateo Alvarez', uid: 1234 }) )
  }

  return (
    <PageContainer>
      <ModalRegister>
        <Title>Login</Title>
        <form onSubmit={ handleRegister }>

          <InputForm
            autoComplete="off"
            name="email"
            onChange={ handleInputChange }
            placeholder="email"
            type="text"
            value={ email } 
          />
          <InputForm
            autoComplete="off"
            name="password"
            onChange={ handleInputChange }
            placeholder="contraseña"
            type="password"
            value={ password }
          />

          <ButtonRegister>Registrarse</ButtonRegister>
        </form>
        <GoogleLogin />
        <Link to="/auth/register">No tienes una cuenta?</Link>
      </ModalRegister>
    </PageContainer>
  )
}

export default Register
