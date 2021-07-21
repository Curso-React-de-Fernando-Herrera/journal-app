import { firebase } from 'firebase/config'
import { authTypes } from 'types/authTypes'
import { handleLoginErrors } from './uiErrors'

export const registerWithEmailPassword = ({ name, email, password }) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        const { uid, displayName } = user

        dispatch(register({ uid, displayName }))
      })
      .catch(
        dispatch(
          handleLoginErrors({
            errorName: 'Ya existe un usuario con esa cuenta',
          })
        )
      )
  }
}

const register = ({ uid, displayName }) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName,
  },
})
