import validator from 'validator';
import { errorTypes } from 'types/errorTypes'
import { firebase } from 'firebase/config';

import { authTypes } from 'types/authTypes'

const handleValidator = ({ name, email, password, secondPassword }) => {
  if ( validator.isEmpty( name ) ) return "Introduzca un nombre"
  if ( !validator.isEmail( email ) ) return "Email incorrecto"
  if ( !validator.isStrongPassword( password ) ) return "A tu contraseña le falta calle rey. ¡¡¡MEJORALA!!! 🤬"
  if ( !(password === secondPassword) ) return "Revise que ambas contrasegñas sean iguales"
}

export const registerWithEmailPassword = ({ name, email, password }) => {
  console.log('hola')
  return dispatch => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        await user.updateProfile({ displayName: name })
        const { uid, displayName } = user

        dispatch( register({ uid, displayName }) )
      })
  }
}

export const checkDataRegister = ({ name, email, password, secondPassword }) => {
  return {
    type: errorTypes.uiSetError,
    payload: handleValidator({ name, email, password, secondPassword }) || null
  }
}

const register = ({ uid, displayName }) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName
  }
})