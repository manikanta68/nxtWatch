import {Component} from 'react'
import Cookies from 'js-cookie'
import {FiSearch} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'

import {
  ViewContainer,
  ApisContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  InputBarContainer,
  Input,
  SearchButton,
  BannerContainer,
  BannerLogoAndClose,
  BannerLogo,
  BannerCloseButton,
  BannerDescription,
  BannerButton,
  Result,
  VideosContainer,
  VideoItemsScroll,
  HomeBgContainer,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    search: '',
    apiStatus: apiStatusConstants.initial,
    videos: [],
    banner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      // console.log(fetchedData.videos)
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
      <VideoItemsScroll>
        {videos.map(eachVideo => (
          <VideoCard key={eachVideo.id} eachVideo={eachVideo} />
        ))}
      </VideoItemsScroll>
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

  bannerClose = () => {
    this.setState({banner: false})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onSearch = () => {
    this.getVideos()
  }

  render() {
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {banner} = this.state
          return (
            <HomeBgContainer bgColor={darkTheme}>
              <Header />
              <ViewContainer>
                <Sidebar />
                <ApisContainer data-testid="home" bgColor={darkTheme}>
                  {banner && (
                    <BannerContainer data-testid="banner">
                      <BannerLogoAndClose>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerCloseButton
                          data-testid="close"
                          onClick={this.bannerClose}
                        >
                          <MdClose />
                        </BannerCloseButton>
                      </BannerLogoAndClose>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}

                  <Result>
                    <InputBarContainer>
                      <Input
                        onChange={this.onChangeSearch}
                        type="search"
                        placeholder="Username"
                        colorProp={darkTheme}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onSearch}
                        bgColor={darkTheme}
                      >
                        <FiSearch />
                      </SearchButton>
                    </InputBarContainer>
                    <VideosContainer>
                      {this.apiCallingUpdates()}
                    </VideosContainer>
                  </Result>
                </ApisContainer>
              </ViewContainer>
            </HomeBgContainer>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default Home
