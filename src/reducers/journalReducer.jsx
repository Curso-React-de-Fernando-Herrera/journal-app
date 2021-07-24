import { journalTypes } from 'types/journalTypes'

const initialState = {
  journals: [],
  active: null
}

export const journalReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {

    case journalTypes.journalLoadAll:
      return {
        ...state,
        journals: [...payload]
      }

    case journalTypes.journalNew:
      return {
        ...state
      }

    case journalTypes.journalActive:
      return {
        ...state,
        active: { ...payload }
      }

    default:
      return state
  }
}