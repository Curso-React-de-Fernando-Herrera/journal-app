import styled from '@emotion/styled'
import { colors } from 'styles/variables/colors'

export const Content = styled.section`
  height: calc(100vh - 2rem);
  margin: 1rem;
  margin-right: 0;
  width: 100%;
`

export const FormContent = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`

export const TextContent = styled.div`
  border-radius: 30px 0 0 30px;
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${colors.white};
  flex: 1;
`

export const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 42px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
`

export const TextAreaInput = styled.textarea`
  resize: none;
  height: 100%;
  width: 100%;
  flex: 1;
  font-family: 'poppins-regular';
  padding: 0.5rem 1rem;
  font-size: 16px;
  outline: none;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
`

export const ButtonContainers = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const DateText = styled.p`
  display: inline-block;
  width: max-content;
  padding: 0.5rem 2rem;
  color: ${colors.white};
  background: ${colors.gradient};
  border-radius: 30px;
  font-family: 'poppins-light';
  margin-top: 0;
  text-transform: capitalize;
  font-size: 18px;
`

export const Image = styled.img`
  position: absolute;
  max-width: 400px;
  max-height: 200px;
  right: 2rem;
  transform: translateY(50%);
`
