import styled from '@emotion/styled'

export const Content = styled.section`
  height: calc(100vh - 2rem);
  margin: 1rem;
  width: 100%;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const TitleInput = styled.input`
  width: 100%;
  padding: .5rem 1rem;
  font-size: 42px;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-bottom: 1rem;
`

export const TextAreaInput = styled.textarea`
  resize: none;
  width: 100%;
  flex: 1;
  font-family: 'poppins-regular';
  padding: .5rem 1rem;
  font-size: 16px;
  outline: none;
  border: none;
  box-sizing: border-box;
`