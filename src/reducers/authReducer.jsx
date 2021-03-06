import { authTypes } from 'types/authTypes'

export const authReducer = (state = {}, action) => {
  switch (action.type) {

    case authTypes.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName
      }

    case authTypes.logout:
      return {}

    default:
      return state

  }
}