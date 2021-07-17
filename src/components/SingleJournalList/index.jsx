import React from 'react'
import { JournalBox, Title, JournalContent, DayContent, InformationContent, DayText, DayNumber } from './styles'

const SingleJournalList = () => {
  return (
    <JournalBox>
      <InformationContent>
        <Title>Title</Title>
        <JournalContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error provident, nam natus quos libero rem, sunt est ullam consequatur omnis officia. Neque provident perspiciatis officia omnis voluptatem, ratione dolorem repellendus!</JournalContent>
      </InformationContent>
      <DayContent>
        <DayText>Lun.</DayText>
        <DayNumber>21</DayNumber>
      </DayContent>
    </JournalBox>
  )
}

export default SingleJournalList
