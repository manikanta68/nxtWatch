import styled from 'styled-components'

export const ViewContainer = styled.div`
  display: flex;
`
export const ApisContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 200px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const FailureButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Result = styled.div`
  padding: 10px;
  flex-grow: 1;
  width: 100%;
`

export const VideosContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const VideoItemsScroll = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const ListItem = styled.li`
  background-color: transparent;

  margin-bottom: 29px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`
export const Thumbnail = styled.img`
  height: 300px;
  margin-bottom: 17px;
  width: 190px;
`

export const CardDescription = styled.div`
  display: flex;
  margin-top: 15px;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-top: 9px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';

  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
`
export const ViewAndLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cbd5e1;
`
export const ViewsAndLike = styled.p`
  font-family: 'Roboto';
  margin: 0px;

  color: #94a3b8;
`

export const LikeAndDisLikeIconsContainer = styled.div`
  display: flex;
  color: #cbd5e1;
`
export const LikeIconContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  margin-left: 5px;
`
export const LikeIconText = styled.p`
  font-family: 'Roboto';
  margin-left: 5px;
  color: ${props => (props.colorProp ? '#2563eb' : '#64748b')};
`

export const ChannelProfileImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: lightblue;
`
