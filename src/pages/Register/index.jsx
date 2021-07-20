import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'hooks/useForm'

import SmallError from 'components/SmallError'
import { checkDataRegister, registerWithEmailPassword } from 'actions/register'

import {
  PageContainer,
  ModalRegister,
  Title,
  InputForm,
  ButtonRegister,
  Link
} from './styles'

const initialStates = {
  name: "",
  email: "",
  password: "" ,
  secondPassword: "" 
}

const Register = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.errorUI)

  const { handleInputChange, inputStates } = useForm(initialStates)
  const { name, email, password, secondPassword } = inputStates

  const handleRegister = e => {
    e.preventDefault()
    const { payload: _msjError } = dispatch( checkDataRegister({ name, email, password, secondPassword }) )

    _msjError === null && dispatch( registerWithEmailPassword({ name, email, password }) )
  }

  return (
    <PageContainer>
      <ModalRegister>
        <Title>Registrarse</Title>
        {
          msgError && <SmallError>{ msgError }</SmallError>
        }
        <form onSubmit={ handleRegister }>
          <InputForm
            autoComplete="off"
            name="name"
            onChange={ handleInputChange }
            placeholder="nombre"
            type="text"
            value={ name } 
          />
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
          <InputForm
            autoComplete="off"
            name="secondPassword"
            onChange={ handleInputChange }
            placeholder="repetir contraseña"
            type="password"
            value={ secondPassword } 
          />
          <ButtonRegister>Registrarse</ButtonRegister>
        </form>
        <Link to="/auth/login">Ya tienes una cuenta?</Link>
      </ModalRegister>
    </PageContainer>
  )
}

export default Register
