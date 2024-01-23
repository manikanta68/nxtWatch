import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  ViewContainer,
  ApisContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
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
  ViewsAndDate,
  BannerSymbolContainer,
  LinkButton,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      //  console.log(fetchedData.videos)
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideosList = () => {
    const {videos} = this.state
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <BannerContainer>
              <BannerLogoAndClose bgColor={darkTheme}>
                <BannerSymbolContainer bgColor={darkTheme}>
                  <FaGamepad color="#ff0000" />
                </BannerSymbolContainer>

                <BannerDescription colorProp={darkTheme}>
                  Gaming
                </BannerDescription>
              </BannerLogoAndClose>
              <VideoItemsScroll>
                {videos.map(eachVideo => (
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
                            <ViewsAndDate colorProp={darkTheme}>
                              {eachVideo.viewCount} Watching World Wide
                            </ViewsAndDate>
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
  }

  failureReload = () => {
    this.getVideos()
  }

  renderVideosFailureView = () => (
    <BackgroundColorContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureViewContainer>
            <FailureImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading colorProp={darkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription colorProp={darkTheme}>
              We are having some trouble
            </FailureDescription>
            <FailureButton onClick={this.failureReload}>Retry</FailureButton>
          </FailureViewContainer>
        )
      }}
    </BackgroundColorContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  failureReload = () => {
    this.getVideos()
  }

  apiCallingUpdates = () => {
    const {apiStatus, videos} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        if (videos.length === 0) {
          return (
            <BackgroundColorContext.Consumer>
              {value => {
                const {darkTheme} = value
                return (
                  <FailureViewContainer>
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      alt="no videos"
                    />
                    <FailureHeading colorProp={darkTheme}>
                      No Search Results Found
                    </FailureHeading>
                    <FailureDescription colorProp={darkTheme}>
                      Try different key words or remove search filter
                    </FailureDescription>
                    <FailureButton onClick={this.failureReload}>
                      Retry
                    </FailureButton>
                  </FailureViewContainer>
                )
              }}
            </BackgroundColorContext.Consumer>
          )
        }
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

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
                <ApisContainer data-testid="gaming" bgColor={darkTheme}>
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

export default Gaming
