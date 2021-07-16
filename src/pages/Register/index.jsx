import { useForm } from 'hooks/useForm'

import {
  PageContainer,
  ModalRegister,
  Title,
  InputForm,
  ButtonRegister,
  Link
} from './styles'

const Register = () => {

  const initialStates = {
    name: "",
    email: "",
    password: "" ,
    secondPassword: "" 
  }

  const { handleInputChange, inputStates } = useForm(initialStates)
  const { name, email, password, secondPassword } = inputStates

  const handleRegister = e => {
    e.preventDefault()
  }

  return (
    <PageContainer>
      <ModalRegister>
        <Title>Registrarse</Title>
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
