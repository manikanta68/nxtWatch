import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
`
export const RoutesContainer = styled.ul`
  font-family: 'Roboto';
  padding: 0px;
  list-style-type: none;
`
export const IconAndRouteContainer = styled.li`
  display: flex;
  margin-bottom: 20px;
`
export const Item = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 15px;
  background-color: transparent;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactUs = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const ContactIconsContainer = styled.div`
  display: flex;
`

export const ContactLogo = styled.img`
  height: 30px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const navLink = styled.p`
  text-decoration: none;
`
