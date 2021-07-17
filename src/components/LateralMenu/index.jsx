import React from 'react'
import LoginButton from 'components/LoginButton'
import HeaderName from 'components/HeaderName'
import ListOfJournals from 'components/ListOfJournals'
import NewJournalButton from 'components/NewJournalButton'

import { MenuContainer, HeaderBox } from './styles'

const LateralMenu = () => {
  return (
    <MenuContainer>
      <HeaderBox>
        <HeaderName />
        <LoginButton />
      </HeaderBox>
      <ListOfJournals />
      <NewJournalButton />
    </MenuContainer>
  )
}

export default LateralMenu
