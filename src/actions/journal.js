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
      .then(() => {
        dispatch(journalActive(uid, newJournal))
      })
      .catch(console.log)
  }
}

const journalActive = (uid, newJornal) => ({
  type: journalTypes.journalActive,
  payload: {
    uid,
    ...newJornal,
  },
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const { notes } = await loadJournals(uid)
    dispatch(journalLoad({ notes }))
  }
}

export const journalLoad = ({ notes }) => ({
  type: journalTypes.journalLoadAll,
  payload: notes,
})
