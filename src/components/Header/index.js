import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {FiLogOut, FiSun, FiMenu} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import BackgroundColorContext from '../../context/BackgroundColorContext'

import {
  Navbar,
  NavLogo,
  MobileButtonIconsContainer,
  ThemeButton,
  TriggerButton,
  PopupContainer,
  PopupLogoutButton,
  PopupLogoutContainer,
  PopupButtonsContainer,
  DesktopButtonIconsContainer,
  ProfilePic,
  LogoutButton,
  Alert,
} from './styledComponents'
import 'reactjs-popup/dist/index.css'

const Header = props => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {darkTheme, changeBackgroundTheme} = value
      const themeChange = () => {
        changeBackgroundTheme()
      }

      const removeToken = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Navbar bgColor={darkTheme ? '#212121' : '#ffffff'}>
          <Link to="/">
            <NavLogo
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>

          <MobileButtonIconsContainer>
            <ThemeButton
              data-testid="theme"
              color={darkTheme ? '#ffffff' : '#212121'}
              onClick={themeChange}
            >
              {darkTheme ? <FiSun /> : <FaMoon />}
            </ThemeButton>
            <PopupContainer>
              <Popup
                trigger={
                  <TriggerButton color={darkTheme ? '#ffffff' : '#212121'}>
                    <FiMenu />
                  </TriggerButton>
                }
              >
                <div>
                  <p>React is a popular and widely used programming language</p>
                </div>
              </Popup>
            </PopupContainer>
            <PopupContainer>
              <Popup
                trigger={
                  <TriggerButton color={darkTheme ? '#ffffff' : '#212121'}>
                    <FiLogOut />
                  </TriggerButton>
                }
                modal
              >
                {close => (
                  <>
                    <PopupLogoutContainer>
                      <Alert>Are your Sure Want to Logout</Alert>

                      <PopupButtonsContainer>
                        <PopupLogoutButton onClick={() => close()}>
                          Close
                        </PopupLogoutButton>
                        <PopupLogoutButton onClick={removeToken}>
                          Conform
                        </PopupLogoutButton>
                      </PopupButtonsContainer>
                    </PopupLogoutContainer>
                  </>
                )}
              </Popup>
            </PopupContainer>
          </MobileButtonIconsContainer>
          <DesktopButtonIconsContainer>
            <ThemeButton
              color={darkTheme ? '#ffffff' : '#212121'}
              onClick={themeChange}
            >
              {darkTheme ? <FiSun /> : <FaMoon />}
            </ThemeButton>
            <ProfilePic
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <PopupContainer>
              <Popup
                trigger={
                  <LogoutButton color={darkTheme ? '#ffffff' : '#3b82f6'}>
                    Logout
                  </LogoutButton>
                }
                modal
              >
                {close => (
                  <>
                    <PopupLogoutContainer>
                      <Alert>Are you sure, you want to logout</Alert>
                      <PopupButtonsContainer>
                        <PopupLogoutButton onClick={() => close()}>
                          Cancel
                        </PopupLogoutButton>
                        <PopupLogoutButton onClick={removeToken}>
                          Confirm
                        </PopupLogoutButton>
                      </PopupButtonsContainer>
                    </PopupLogoutContainer>
                  </>
                )}
              </Popup>
            </PopupContainer>
          </DesktopButtonIconsContainer>
        </Navbar>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default withRouter(Header)
