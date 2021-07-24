import { db } from 'firebase/config'

export const loadJournals = async (uid) => {
  const journals = await db.collection(`${uid}/journal/note`).get()
  const notes = []

  journals.forEach(journal => {
    notes.push({
      id: journal.id,
      ...journal.data()
    })
  })

  return { notes }
}
