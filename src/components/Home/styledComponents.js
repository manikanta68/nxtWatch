import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const ViewContainer = styled.div`
  display: flex;
`
export const ApisContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
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
export const InputBarContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 40px;
  width: 80%;
  margin-left: 40px;
`
export const Input = styled.input`
  align-self: flex-start;
  outline: none;
  cursor: pointer;
  padding: 5px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  color: ${props => (props.colorProp ? '#ffffff' : '#000000')};
  width: 40%;
  height: 34px;
  border-right-width: 0px;
`

export const SearchButton = styled.button`
  background-color: ${props => (props.bgColor ? '#313131' : '#f4f4f4')};
  border-style: solid;
  border-width: 1px;
  border-left-width: 0px;
  width: 9%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 34px;
  outline: none;
  cursor: pointer;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  background-color: lightblue;

  flex-grow: 1;
  margin-bottom: 20px;
`
export const BannerLogoAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const BannerLogo = styled.img`
  height: 30px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  border-style: solid;
  border-width: 1px;
  width: 10%;
  padding: 10px;
  margin-top: 10px;
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
  flex-wrap: wrap;
  padding-right: 10px;
`
