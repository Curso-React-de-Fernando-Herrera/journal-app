import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const MenuContainer = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  max-width: 360px;
  height: calc(100vh - 2rem);
  margin: 1rem;
  border-radius: 30px;
  background: ${ colors.gradient };
  padding: 1rem;
  box-sizing: border-box;
`

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 60px;
`
