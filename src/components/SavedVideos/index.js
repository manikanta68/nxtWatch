import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import {FaFire} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  ViewContainer,
  ApisContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  BannerContainer,
  BannerLogoAndClose,
  BannerDescription,
  Result,
  VideosContainer,
  VideoItemsScroll,
  ListItem,
  Thumbnail,
  CardDescription,
  CardDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  BannerSymbolContainer,
  LinkButton,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

class SavedVideos extends Component {
  renderVideosList = () => (
    <BackgroundColorContext.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value
        return (
          <BannerContainer>
            <BannerLogoAndClose bgColor={darkTheme}>
              <BannerSymbolContainer bgColor={darkTheme}>
                <FaFire color="#ff0000" />
              </BannerSymbolContainer>

              <BannerDescription colorProp={darkTheme}>
                Saved Videos
              </BannerDescription>
            </BannerLogoAndClose>
            <VideoItemsScroll>
              {savedVideosList.map(eachVideo => (
                <ListItem key={eachVideo.id}>
                  <Link
                    to={`/videos/${eachVideo.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <LinkButton>
                      <Thumbnail
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <CardDescription>
                        <CardDetails>
                          <VideoTitle colorProp={darkTheme}>
                            {eachVideo.title}
                          </VideoTitle>
                          <ChannelName colorProp={darkTheme}>
                            {eachVideo.channel.name}
                          </ChannelName>
                          <div>
                            <ViewsAndDate colorProp={darkTheme}>
                              {eachVideo.viewCount} views.
                            </ViewsAndDate>
                            <ViewsAndDate colorProp={darkTheme}>
                              {formatDistanceToNow(
                                new Date(eachVideo.publishedAt),
                              )}
                              ago
                            </ViewsAndDate>
                          </div>
                        </CardDetails>
                      </CardDescription>
                    </LinkButton>
                  </Link>
                </ListItem>
              ))}
            </VideoItemsScroll>
          </BannerContainer>
        )
      }}
    </BackgroundColorContext.Consumer>
  )

  apiCallingUpdates = () => (
    <BackgroundColorContext.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value
        console.log(savedVideosList)
        if (savedVideosList.length === 0) {
          console.log('a')
          return (
            <FailureViewContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailureHeading colorProp={darkTheme}>
                No Saved Videos Found
              </FailureHeading>
              <FailureDescription colorProp={darkTheme}>
                You can save your videos while watching them
              </FailureDescription>
            </FailureViewContainer>
          )
        }
        return this.renderVideosList()
      }}
    </BackgroundColorContext.Consumer>
  )

  render() {
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <div>
              <Header />
              <ViewContainer>
                <Sidebar />
                <ApisContainer data-testid="savedVideos" bgColor={darkTheme}>
                  <Result>
                    <VideosContainer>
                      {this.apiCallingUpdates()}
                    </VideosContainer>
                  </Result>
                </ApisContainer>
              </ViewContainer>
            </div>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default SavedVideos
