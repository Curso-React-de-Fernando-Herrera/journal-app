import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Button = styled.button`
  padding: 1rem;
  border: none;
  margin: 1rem 0 0;
  background: ${ colors.gradient };
  outline: none;
  font-size: 26px;
  color: ${ colors.white };
  border-radius: 30px;
  cursor: pointer;
`