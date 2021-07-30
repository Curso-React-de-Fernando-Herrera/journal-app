import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const JournalBox = styled.div`
  display: flex;
  background-color: ${colors.lightTransparent};
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 30px;
  position: relative;
  min-width: 280px;
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive) {
      return `
        background-color: ${colors.shadow};
        color: ${colors.white};
        
        & div:last-child {
          background-color: ${colors.shadow};
          color: ${colors.white};
        }
        `
    }
  }};
  :hover,
  :hover > div:last-child {
    background-color: ${colors.shadow};
    color: ${colors.white};
  }
`

export const InformationContent = styled.div`
  width: 85%;
`

export const Title = styled.h2`
  font-weight: 400;
  margin: 0 0.25rem;
  font-size: 16px;
  color: ${colors.white};
`

export const JournalContent = styled.p`
  font-family: 'poppins-light';
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  color: ${colors.white};
  max-height: 4rem;
  overflow: hidden;
`

export const DayContent = styled.div`
  display: block;
  position: relative;
  flex-direction: column;
  height: 80px;
  width: 80px;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  background-color: ${colors.lightTransparent};
  right: -2rem;
`

export const DayText = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
`
export const DayNumber = styled.p`
  margin: 0;
  font-size: 26px;
  text-align: center;
`
