import { journalTypes } from 'types/journalTypes'

const initialState = {
  journals: [],
  active: null
}

export const journalReducer = (state = initialState, { type, payload }) => {

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
        active: { title: "", body: "", imgUrl: "", ...payload }
      }

    case journalTypes.journalUpdated:
      const { journals } = state
      const newJournals = journals.map((journal) => journal.id === payload.id
        ? payload
        : journal
      )

      return {
        ...state,
        journals: newJournals
      }

    default:
      return state
  }
}