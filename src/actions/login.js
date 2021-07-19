import { firebase, googleAuthProvider } from 'firebase/config'
import { authTypes } from 'types/authTypes'

export const startLogin = ({ uid, displayName }) => {
  return dispatch => {
    setTimeout(() => {
      dispatch( login({ uid, displayName }) )
    }, 3500);
  }
}

export const startLoginWithGoogle = () => {
  return dispatch => {
    console.log('before')
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then(({ user: { uid, displayName } }) => {
        dispatch( login({ uid, displayName }) )
      })
      .catch(console.log)
  }
}

const login = ({ uid, displayName }) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName
  }
})