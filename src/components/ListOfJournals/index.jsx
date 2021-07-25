import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SingleJournalList from 'components/SingleJournalList'

import { BoxJournals } from './styles'

const ListOfJournals = () => {
  const listOfJournals = useSelector(({ journal }) => journal.journals)

  const [journals, setJournals] = useState(listOfJournals)

  useEffect(() => {
    setJournals(listOfJournals)
  }, [listOfJournals])

  return (
    <BoxJournals>
      {
        journals.map(({ id, title, body, date }) => <SingleJournalList
          key={id}
          id={id}
          title={title}
          body={body}
          date={date}
        />
        )
      }
    </BoxJournals>
  )
}

export default ListOfJournals
