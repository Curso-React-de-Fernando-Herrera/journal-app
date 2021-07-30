import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { journalActive } from 'actions/journal'
import { handleGetDate } from 'helpers/getDateWithMoment'
import { JournalBox, Title, JournalContent, DayContent, InformationContent, DayText, DayNumber } from './styles'

const SingleJournalList = ({ id, title = "", body = "", date, imgUrl = "" }) => {
  const dispatch = useDispatch()

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
  console.log(imgUrl)
  return (
    <JournalBox onClick={handleActive}>
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
