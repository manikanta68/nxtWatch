import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  ViewContainer,
  ApisContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

const NotFound = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <div>
          <Header />
          <ViewContainer>
            <Sidebar />
            <ApisContainer bgColor={darkTheme}>
              <FailureViewContainer>
                <FailureImage
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
                <FailureHeading colorProp={darkTheme}>
                  Page Not Found
                </FailureHeading>
                <FailureDescription colorProp={darkTheme}>
                  We are sorry, the page you requested could not be found.
                </FailureDescription>
              </FailureViewContainer>
            </ApisContainer>
          </ViewContainer>
        </div>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default NotFound
