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

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-size: cover;

  flex-grow: 1;
  margin-bottom: 20px;
`
export const BannerLogoAndClose = styled.div`
  display: flex;
  align-items: center;
  font-size: 35px;
  background-color: ${props => (props.bgColor ? '#313131' : '#f4f4f4')};
  padding-left: 10px;
`
export const BannerLogo = styled.img`
  height: 30px;
  width: 100%;
`

export const BannerDescription = styled.h1`
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 35px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`

export const BannerSymbolContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#000000' : '#ebebeb')};
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
  flex-direction: column;
`
export const ListItem = styled.li`
  background-color: transparent;
  width: 100%;
  margin-right: 29px;
  margin-bottom: 29px;
`
export const Thumbnail = styled.img`
  height: 150px;
  margin-bottom: 17px;
  width: 30%;
`

export const CardDescription = styled.div`
  display: flex;
  width: 100%;
  margin-left: 15px;
`
export const ProfileImage = styled.img`
  height: 20px;
  margin-right: 10px;
  width: 100%;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const VideoTitle = styled.h1`
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
  margin: 0px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
`
export const LinkButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  width: 100%;
`
