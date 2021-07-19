import { errorTypes } from 'types/errorTypes'

const initialState = {
  msgError: null
}

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorTypes.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }
  
    case errorTypes.uiRemoveError:
      return {
        ...state,
        msgError: action.payload
      }

    default:
      return state
  }
}