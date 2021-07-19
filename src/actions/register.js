import validator from 'validator';
import { errorTypes } from 'types/errorTypes'

const handleValidator = ({ name, email, password, secondPassword }) => {
  if ( validator.isEmpty( name ) ) return "Introduzca un nombre"
  if ( !validator.isEmail( email ) ) return "Email incorrecto"
  if ( !(password === secondPassword) ) return "Revise que ambas contrasegnas sean iguales"
  if ( !validator.isStrongPassword( password ) ) return "Escriba una contrasegna con mayor seguridad"
}

export const register = ({ name, email, password, secondPassword }) => {
  return {
    type: errorTypes.uiSetError,
    payload: handleValidator({ name, email, password, secondPassword }) || null
  }
}