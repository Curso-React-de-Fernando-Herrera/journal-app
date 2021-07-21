import { firebase } from 'firebase/config';
import { authTypes } from 'types/authTypes'

export const registerWithEmailPassword = ({ name, email, password }) => {
  return dispatch => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        await user.updateProfile({ displayName: name })
        const { uid, displayName } = user

        dispatch( register({ uid, displayName }) )
      })
      
  }
}

const register = ({ uid, displayName }) => ({

  type: authTypes.login,
  payload: {
    uid,
    displayName
  }

})
