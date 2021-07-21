import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'hooks/useForm'
import { useButtonDisabled } from 'hooks/useButtonDisabled'

import SmallError from 'components/SmallError'

import { registerWithEmailPassword } from 'actions/register'
import { checkDataRegister } from 'actions/uiErrors'

import { PageContainer, ModalRegister, Title, InputForm, ButtonRegister, Link } from './styles'

const initialStates = {
  name: "",
  email: "",
  password: "",
  secondPassword: ""
}

const Register = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.errorUI)

  const { isDisabled, handleDisabled, handleRemoveDisabled } = useButtonDisabled()

  const { handleInputChange, inputStates } = useForm(initialStates)
  const { name, email, password, secondPassword } = inputStates

  const handleRegister = async (e) => {
    e.preventDefault()

    handleDisabled()
    const { payload: _msjError } = await dispatch(checkDataRegister({ name, email, password, secondPassword }))
    await _msjError === null && await dispatch(registerWithEmailPassword({ name, email, password }))
    handleRemoveDisabled()
  }

  return (
    <PageContainer>
      <ModalRegister>
        <Title>Registrarse</Title>
        {
          msgError && <SmallError>{msgError}</SmallError>
        }
        <form onSubmit={handleRegister}>
          <InputForm
            autoComplete="off"
            name="name"
            onChange={handleInputChange}
            placeholder="nombre"
            type="text"
            value={name}
          />
          <InputForm
            autoComplete="off"
            name="email"
            onChange={handleInputChange}
            placeholder="email"
            type="text"
            value={email}
          />
          <InputForm
            autoComplete="off"
            name="password"
            onChange={handleInputChange}
            placeholder="contraseña"
            type="password"
            value={password}
          />
          <InputForm
            autoComplete="off"
            name="secondPassword"
            onChange={handleInputChange}
            placeholder="repetir contraseña"
            type="password"
            value={secondPassword}
          />
          <ButtonRegister
            disabled={isDisabled}
          >Registrarse</ButtonRegister>
        </form>
        <Link to="/auth/login">Ya tienes una cuenta?</Link>
      </ModalRegister>
    </PageContainer>
  )
}

export default Register
