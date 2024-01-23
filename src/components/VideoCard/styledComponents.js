import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: transparent;
  width: 20%;
  margin-right: 29px;
  margin-bottom: 29px;
`
export const Thumbnail = styled.img`
  height: 150px;
  margin-bottom: 17px;
`

export const CardDescription = styled.div`
  display: flex;
`
export const ProfileImage = styled.img`
  height: 20px;
  margin-right: 10px;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  text-align: left;
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
`
