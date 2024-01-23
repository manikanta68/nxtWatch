import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 20px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
`

export const NavLogo = styled.img`
  height: 50px;
`

export const MobileButtonIconsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 786px) {
    display: none;
  }
`
export const DesktopButtonIconsContainer = styled.div`
  display: none;
  @media screen and (min-width: 786px) {
    display: flex;
    align-items: center;
  }
`

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.color};
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  margin: 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  color: ${props => props.color};
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupLogoutButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: white;
  padding: 8px 15px 8px 15px;
  margin: 10px;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  outline: none;
`
export const PopupLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
`

export const ProfilePic = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 8px;
`
export const LogoutButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  padding: 4px 15px 4px 15px;
  margin: 10px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  border-style: solid;
  border-color: ${props => props.color};
  border-width: 1px;
  color: ${props => props.color};
`

export const Alert = styled.p`
  font-family: 'Roboto';
`
