import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Button = styled.button`
  color: ${colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 30px;
  background-color: ${colors.lightTransparent};
  border: none;
  outline: none;

  :hover {
    background-color: ${colors.white};
    color: ${colors.aquaGreen};
    cursor: pointer;
    box-shadow: 0 0 4px ${colors.shadow};
  }
`
