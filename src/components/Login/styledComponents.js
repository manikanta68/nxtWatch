import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-radius: 6px;
  width: 20%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  padding: 30px;
  box-shadow: 1px 3px 4px 1px;
  margin: 30px;
`
export const LoginLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
`
export const LoginForm = styled.form`
  padding: 10px;
`
export const InputBoxCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
export const RadioInputBoxCont = styled.div`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 3px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const Input = styled.input`
  outline: none;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const CheckInput = styled.input`
  margin-right: 10px;
  background-color: transparent;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const SubmitButton = styled.button`
  background-color: #3b82f6;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 6px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
`
