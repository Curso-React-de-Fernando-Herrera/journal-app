import React from 'react'
import LateralMenu from 'components/LateralMenu'
import EntryForm from 'components/EntryForm'

import { JournalContainer } from './styles'

const JournalPage = () => {
  return (
    <JournalContainer>
      <LateralMenu />
      <EntryForm />
    </JournalContainer>
  )
}

export default JournalPage
