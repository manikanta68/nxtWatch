import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import BackgroundColorContext from '../../context/BackgroundColorContext'

import {
  LoginContainer,
  LoginLogo,
  LoginForm,
  InputBoxCont,
  CheckInput,
  Label,
  Input,
  RadioInputBoxCont,
  SubmitButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeCheck = () => {
    console.log('hoi')
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {checked, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {username, password} = this.state
          return (
            <LoginContainer bgColor={darkTheme}>
              <LoginLogo
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
              <LoginForm onSubmit={this.submitDetails}>
                <InputBoxCont>
                  <Label htmlFor="userInput" colorProp={darkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    id="userInput"
                    onChange={this.usernameChange}
                    type="text"
                    placeholder="Username"
                    colorProp={darkTheme}
                    value={username}
                  />
                </InputBoxCont>
                <InputBoxCont>
                  <Label htmlFor="password" colorProp={darkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    onChange={this.passwordChange}
                    type={checked ? 'text' : 'password'}
                    placeholder="Password"
                    colorProp={darkTheme}
                    value={password}
                  />
                </InputBoxCont>
                <RadioInputBoxCont>
                  <CheckInput
                    id="checkbox"
                    onChange={this.onChangeCheck}
                    type="checkbox"
                  />
                  <Label htmlFor="checkbox" colorProp={darkTheme}>
                    Show Password
                  </Label>
                </RadioInputBoxCont>
                <SubmitButton type="submit">Login</SubmitButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default Login
