import React from 'react'
import SingleJournalList from 'components/SingleJournalList'

import { BoxJournals } from './styles'

const ListOfJournals = () => {
  return (
    <BoxJournals>
      <SingleJournalList />
    </BoxJournals>
  )
}

export default ListOfJournals
