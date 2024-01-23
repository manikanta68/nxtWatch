import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {FaSave} from 'react-icons/fa'

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
  VideosContainer,
  VideoItemDetailsContainer,
  VideoItemDescription,
  VideoItemTitle,
  ViewAndLikeContainer,
  ViewsAndLike,
  LikeIconContainer,
  LikeAndDisLikeIconsContainer,
  LikeIconText,
  CardDescription,
  ProfileImage,
  CardDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  ChannelProfileImage,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    video: {},
    Like: false,
    Dislike: false,
    Save: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      // console.log(fetchedData.video_details)
      const videoDetails = fetchedData.video_details
      const updatedData = {
        channel: videoDetails.channel,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      // console.log(updatedData)
      this.setState({
        video: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeLike = () => {
    this.setState(prevState => ({
      Like: !prevState.Like,
      Dislike: false,
    }))
  }

  onChangeDisLike = () => {
    this.setState(prevState => ({
      Dislike: !prevState.Dislike,
      Like: false,
    }))
  }

  failureReloading = () => {
    this.getVideos()
  }

  renderVideosList = () => {
    const {video} = this.state
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {darkTheme, addVideoToSaveList} = value
          const {Like, Dislike, Save} = this.state
          const addVideo = () => {
            addVideoToSaveList(video)
            this.setState(prevState => ({Save: !prevState.Save}))
          }

          return (
            <VideoItemDetailsContainer bgColor={darkTheme}>
              <ReactPlayer height="600px" width="1300px" url={video.videoUrl} />
              <VideoItemDescription>
                <VideoItemTitle>{video.title}</VideoItemTitle>
                <ViewAndLikeContainer>
                  <ViewsAndLike>
                    {' '}
                    {video.viewCount} views .{' '}
                    {formatDistanceToNow(new Date(video.publishedAt))} ago
                  </ViewsAndLike>
                  <LikeAndDisLikeIconsContainer>
                    <LikeIconContainer onClick={this.onChangeLike}>
                      <BiLike color={Like ? '#2563eb' : '#64748b'} />
                      <LikeIconText colorProp={Like}>Like</LikeIconText>
                    </LikeIconContainer>
                    <LikeIconContainer onClick={this.onChangeDisLike}>
                      <BiDislike color={Dislike ? '#2563eb' : '#64748b'} />
                      <LikeIconText colorProp={Dislike}>Dislike</LikeIconText>
                    </LikeIconContainer>
                    <LikeIconContainer onClick={addVideo}>
                      <FaSave color={Save ? '#2563eb' : '#64748b'} />
                      <LikeIconText colorProp={Save}>
                        {Save ? 'Saved' : 'Save'}
                      </LikeIconText>
                    </LikeIconContainer>
                  </LikeAndDisLikeIconsContainer>
                </ViewAndLikeContainer>
              </VideoItemDescription>
              <hr
                style={{
                  backgroundColor: '#64748b',
                  height: '1px',
                  width: '100%',
                }}
              />
              <div>
                <CardDescription>
                  <ChannelProfileImage>
                    <ProfileImage
                      src={video.channel.profile_image_url}
                      alt="channel logo"
                    />
                  </ChannelProfileImage>

                  <CardDetails>
                    <VideoTitle colorProp={darkTheme}>
                      {video.channel.name}
                    </VideoTitle>
                    <ChannelName colorProp={darkTheme}>
                      {video.channel.subscriber_count} subscribers
                    </ChannelName>
                    <ViewsAndDate colorProp={darkTheme}>
                      {video.description}
                    </ViewsAndDate>
                  </CardDetails>
                </CardDescription>
              </div>
            </VideoItemDetailsContainer>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
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
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureButton onClick={this.failureReloading}>Retry</FailureButton>
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
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
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
                <ApisContainer
                  data-testid="videoItemDetails"
                  bgColor={darkTheme}
                >
                  <VideosContainer>{this.apiCallingUpdates()}</VideosContainer>
                </ApisContainer>
              </ViewContainer>
            </div>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default VideoItemDetails
