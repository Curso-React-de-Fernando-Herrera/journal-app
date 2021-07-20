import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Alert = styled.span`
  display: block;
  margin: 1rem .25rem;
  padding: .25rem 0;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: ${ colors.error };
  font-size: 14px;
  text-align: center;
`