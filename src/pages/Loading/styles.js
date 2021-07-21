import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border: 4px solid ${colors.aquaGreen};
  border-left-color: transparent;
  border-radius: 50%;
  animation: spinner infinite linear 1.5s;
  transform: rotate(0);

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
`
