import styled from '@emotion/styled'
import { Link as LinkStyled } from 'wouter'

import { colors } from 'styles/variables/colors'

export const PageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: ${ colors.gradient }
`

export const ModalRegister = styled.article`
min-width: 400px;
  padding: 2rem 2rem 1rem;
  background-color: ${ colors.white };
  border-radius: 30px;
  box-shadow: 0 0 4px ${ colors.shadow };
`

export const Title = styled.h1`
  font-weight: 400;
  font-family: 'poppins-medium';
  margin: 0 0 1rem;
`

export const InputForm = styled.input`
  display: block;
  margin: .5rem 0;
  border: 1px solid ${ colors.lightGray };
  font-family: 'poppins-regular';
  padding: .5rem 1rem;
  outline: none;
  border-radius: 30px;
  width: 100%;
  box-sizing: border-box;
  
  :focus {
    box-shadow: 0 0 4px ${ colors.shadow };
  }
`

export const ButtonRegister = styled.button`
  margin-top: 1.5rem;
  padding: .25rem .5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: ${ colors.aquaGreen };
  color: ${ colors.white };
  font-size: 16px;
  font-weight: 400;
  font-family: 'poppins-light';
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  
  :hover {
    background-color: ${ colors.white };
    color: ${ colors.aquaGreen };
    box-shadow: 0 0 4px ${ colors.shadow };
  }
  
  :active {
    box-shadow: 0 0 8px ${ colors.shadow };
  }

  :disabled {
    cursor: not-allowed;
    filter: contrast(0.5);
  }
`

export const Link = styled(LinkStyled)`
  display: block;
  margin-top: 1rem;
  outline: none;
  text-align: center;
  font-size: 14px;
  color: #000000
`