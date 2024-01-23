import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {FaFire, FaGamepad, FaSave} from 'react-icons/fa'
import BackgroundColorContext from '../../context/BackgroundColorContext'

import {
  SidebarContainer,
  RoutesContainer,
  IconAndRouteContainer,
  Item,
  ContactUsContainer,
  ContactUs,
  ContactIconsContainer,
  ContactLogo,
  ContactDescription,
} from './styledComponents'

const Sidebar = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <SidebarContainer bgColor={darkTheme}>
          <RoutesContainer>
            <Link to="/" style={{textDecoration: 'none'}}>
              <IconAndRouteContainer>
                <AiFillHome color={darkTheme ? '#ffffff' : '#000000'} />
                <Item colorProp={darkTheme}>Home</Item>
              </IconAndRouteContainer>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <IconAndRouteContainer>
                <FaFire color={darkTheme ? '#ffffff' : '#000000'} />
                <Item colorProp={darkTheme}>Trending</Item>
              </IconAndRouteContainer>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <IconAndRouteContainer>
                <FaGamepad color={darkTheme ? '#ffffff' : '#000000'} />
                <Item colorProp={darkTheme}>Gaming</Item>
              </IconAndRouteContainer>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <IconAndRouteContainer>
                <FaSave color={darkTheme ? '#ffffff' : '#000000'} />
                <Item colorProp={darkTheme}>Saved Videos</Item>
              </IconAndRouteContainer>
            </Link>
          </RoutesContainer>
          <ContactUsContainer>
            <ContactUs colorProp={darkTheme}>CONTACT US</ContactUs>
            <ContactIconsContainer>
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactIconsContainer>
            <ContactDescription colorProp={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default Sidebar
