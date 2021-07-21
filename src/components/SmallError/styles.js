import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Alert = styled.span`
  display: block;
  margin: 1rem 0.25rem;
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: ${colors.error};
  font-size: 14px;
  text-align: center;
`
