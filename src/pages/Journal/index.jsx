import React from 'react'
import { useSelector } from 'react-redux'

import LateralMenu from 'components/LateralMenu'
import EntryForm from 'components/EntryForm'
import JournalNotSelect from 'components/JournalNotSelect'

import { JournalContainer } from './styles'

const JournalPage = () => {
  const { active } = useSelector(state => state.journal)

  return (
    <JournalContainer>
      <LateralMenu />
      {
        active
          ? <EntryForm content={active} />
          : <JournalNotSelect />
      }
    </JournalContainer>
  )
}

export default JournalPage
