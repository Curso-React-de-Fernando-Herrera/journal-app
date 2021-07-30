import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { journalActive } from 'actions/journal'
import { handleGetDate } from 'helpers/getDateWithMoment'
import { JournalBox, Title, JournalContent, DayContent, InformationContent, DayText, DayNumber } from './styles'

const SingleJournalList = ({ id, title = "", body = "", date, imgUrl = "" }) => {
  const dispatch = useDispatch()
  const { id: activeId } = useSelector(({ journal }) => journal.active) || ''

  const [activeJournal, setActiveJournal] = useState(false)

  const { formatedDate } = handleGetDate(date)

  const handleActive = () => {
    dispatch(journalActive(
      id,
      {
        title,
        body,
        imgUrl,
        date
      }
    ))
  }

  useEffect(() => {
    id === activeId && setActiveJournal(true)

    return () => {
      setActiveJournal(false)
    }
  }, [id, activeId])

  return (
    <JournalBox onClick={handleActive} isActive={activeJournal}>
      <InformationContent>
        <Title>{title}</Title>
        <JournalContent>{body}</JournalContent>
      </InformationContent>
      <DayContent>
        <DayText>{formatedDate.format('ddd')}</DayText>
        <DayNumber>{formatedDate.format('DD')}</DayNumber>
      </DayContent>
    </JournalBox>
  )
}

SingleJournalList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  imgUrl: PropTypes.string,
  date: PropTypes.number,
}

export default SingleJournalList
