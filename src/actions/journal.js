import { db } from 'firebase/config'
import { journalTypes } from 'types/journalTypes'
import { loadJournals } from 'helpers/loadJournals'
import { loadingImage } from 'helpers/loadingImage'

export const journalAdd = () => {
  return (dispatch, getStates) => {
    const { uid } = getStates().auth

    const newJournal = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imgUrl: '',
    }

    db.collection(`${uid}/journal/note`)
      .add(newJournal)
      .then((data) => {
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
  console.log({ journal })
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    db.doc(`${uid}/journal/note/${journal.id}`)
      .update(journal)
      .catch((err) => console.log(err))
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

export const startUploadImage = ({ note, file }) => {
  return async (dispatch) => {
    const imgUrl = await loadingImage(file)
    dispatch(journalUpdate({ ...note, imgUrl: imgUrl }))
  }
}
