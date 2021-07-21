import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'hooks/useForm'
import { useButtonDisabled } from 'hooks/useButtonDisabled'

import GoogleLogin from 'components/GoogleLogin'
import SmallError from 'components/SmallError'

import { startLogin } from 'actions/login'

import { PageContainer, ModalRegister, Title, InputForm, ButtonRegister, Link } from './styles'

const Register = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.errorUI)

  const { isDisabled, handleDisabled, handleRemoveDisabled } = useButtonDisabled()
  const { handleInputChange, inputStates } = useForm({
    name: "",
    email: ""
  })

  const { email, password } = inputStates

  const handleRegister =  async (e) => {
    e.preventDefault();
    handleDisabled()
    dispatch( startLogin({ email, password }) )
      .then( () => handleRemoveDisabled())
      .catch( () => handleRemoveDisabled())
  }
  

  return (
    <PageContainer>
      <ModalRegister>
        <Title>Login</Title>
        {
          msgError && <SmallError>{ msgError }</SmallError>
        }
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

          <ButtonRegister disabled= { isDisabled }>Entrar a la cuenta</ButtonRegister>
        </form>
        <GoogleLogin />
        <Link to="/auth/register">No tienes una cuenta?</Link>
      </ModalRegister>
    </PageContainer>
  )
}

export default Register
