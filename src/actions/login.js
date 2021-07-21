import { firebase, googleAuthProvider } from 'firebase/config'
import { authTypes } from 'types/authTypes'
import { handleLoginErrors } from './uiErrors'

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user: { uid, displayName } }) => {
        dispatch(login({ uid, displayName }))
      })
      .catch(() => {
        dispatch(
          handleLoginErrors({
            errorName:
              'La contraseña no es válida o el usuario no tiene contraseña',
          })
        )
      })
  }
}

export const startLoginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user: { uid, displayName } }) => {
        dispatch(login({ uid, displayName }))
      })
      .catch(console.log)
  }
}

export const login = ({ uid, displayName }) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName,
  },
})
