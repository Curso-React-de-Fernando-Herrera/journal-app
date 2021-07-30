import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Button = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  background-color: ${colors.white};
  border-radius: 30px;
  color: ${colors.aquaGreen};
  padding: 0.5rem 2rem;
  box-shadow: 0 0 4px ${colors.shadow};
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: ${({ isBig = false }) => {
    return isBig ? '36px' : '18px'
  }};
  font-family: 'poppins-light';
`
