import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const BoxJournals = styled.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 16px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.lightTransparent};
    border-radius: 30px;
  }
`
