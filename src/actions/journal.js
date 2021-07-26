import { db } from 'firebase/config'
import { journalTypes } from 'types/journalTypes'
import { loadJournals } from 'helpers/loadJournals'

export const journalAdd = () => {
  return (dispatch, getStates) => {
    const { uid } = getStates().auth

    const newJournal = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    db.collection(`${uid}/journal/note`)
      .add(newJournal)
      .then((data) => {
        console.log({ data })
        dispatch(journalActive(data.id, newJournal))
        dispatch(startLoadingNotes(uid))
      })
      .catch(console.log)
  }
}

export const journalActive = (id, newJornal) => ({
  type: journalTypes.journalActive,
  payload: {
    id,
    ...newJornal,
  },
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const { notes } = await loadJournals(uid)
    dispatch(journalLoad({ notes }))
  }
}

export const journalUpdate = (journal) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    db.doc(`${uid}/journal/note/${journal.id}`).update(journal)
    dispatch(updateJournals(journal))
  }
}

export const updateJournals = (journal) => {
  return {
    type: journalTypes.journalUpdated,
    payload: {
      ...journal,
    },
  }
}

export const journalLoad = ({ notes }) => ({
  type: journalTypes.journalLoadAll,
  payload: notes,
})
