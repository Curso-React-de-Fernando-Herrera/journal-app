import { authTypes } from 'types/authTypes'
import { firebase } from 'firebase/config'

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}

export const logout = () => ({
  type: authTypes.logout,
})
