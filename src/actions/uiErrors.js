import validator from 'validator';
import { errorTypes } from 'types/errorTypes'

const handleValidator = ({ name, email, password, secondPassword }) => {
  if ( validator.isEmpty( name ) ) return "Introduzca un nombre"
  if ( !validator.isEmail( email ) ) return "Email incorrecto"
  if ( !validator.isStrongPassword( password ) ) return "A tu contraseña le falta calle rey. ¡¡¡MEJORALA!!! 🤬"
  if ( !(password === secondPassword) ) return "Revise que ambas contrasegñas sean iguales"
}

export const checkDataRegister = ({ name, email, password, secondPassword }) => {
  return {
    type: errorTypes.uiSetError,
    payload: handleValidator({ name, email, password, secondPassword }) || null
  }
}
