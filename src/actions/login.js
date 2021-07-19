import { authTypes } from 'types/authTypes'

export const login = ({ uid, displayName }) => ({
  type: authTypes.login,
  payload: {
    uid,
    displayName
  }
})