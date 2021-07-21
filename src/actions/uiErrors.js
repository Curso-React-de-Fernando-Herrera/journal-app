import validator from 'validator'
import { errorTypes } from 'types/errorTypes'

const handleRegisterValidator = ({ name, email, password, secondPassword }) => {
  if (validator.isEmpty(name)) return 'Introduzca un nombre'
  if (!validator.isEmail(email)) return 'Email incorrecto'
  if (!validator.isStrongPassword(password))
    return 'A tu contraseña le falta calle rey. ¡¡¡MEJORALA!!! 🤬'
  if (!(password === secondPassword))
    return 'Revise que ambas contrasegñas sean iguales'
}

export const removeErrors = () => ({
  type: errorTypes.uiRemoveError,
})

export const handleLoginErrors = ({ errorName }) => {
  return {
    type: errorTypes.uiSetError,
    payload: errorName,
  }
}

export const checkDataRegister = ({
  name,
  email,
  password,
  secondPassword,
}) => {
  return {
    type: errorTypes.uiSetError,
    payload:
      handleRegisterValidator({ name, email, password, secondPassword }) ||
      null,
  }
}
