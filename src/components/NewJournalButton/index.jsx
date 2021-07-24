import React from 'react'
import { useDispatch } from 'react-redux'
import { journalAdd } from 'actions/journal'
import { Button } from './styles'

const NewJournalButton = () => {
  const dispatch = useDispatch()

  const handleNewJournal = () => {
    dispatch(journalAdd())
  }

  return (
    <Button onClick={handleNewJournal}>Nueva entrada</Button>
  )
}

export default NewJournalButton
