import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import BackgroundColorContext from '../../context/BackgroundColorContext'
import {
  ListItem,
  Thumbnail,
  CardDescription,
  ProfileImage,
  CardDetails,
  VideoTitle,
  ChannelName,
  ViewsAndDate,
  LinkButton,
} from './styledComponents'

const VideoCard = props => {
  const {eachVideo} = props

  return (
    <BackgroundColorContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <ListItem>
            <Link to={`/videos/${eachVideo.id}`}>
              <LinkButton>
                <Thumbnail src={eachVideo.thumbnailUrl} alt="video thumbnail" />
                <CardDescription>
                  <ProfileImage
                    src={eachVideo.channel.profile_image_url}
                    alt="channel logo"
                  />

                  <CardDetails>
                    <VideoTitle colorProp={darkTheme}>
                      {eachVideo.title}
                    </VideoTitle>
                    <ChannelName colorProp={darkTheme}>
                      {eachVideo.channel.name}
                    </ChannelName>
                    <ViewsAndDate colorProp={darkTheme}>
                      {' '}
                      {eachVideo.viewCount} views .{' '}
                      {formatDistanceToNow(new Date(eachVideo.publishedAt))} ago
                    </ViewsAndDate>
                  </CardDetails>
                </CardDescription>
              </LinkButton>
            </Link>
          </ListItem>
        )
      }}
    </BackgroundColorContext.Consumer>
  )
}

export default VideoCard
