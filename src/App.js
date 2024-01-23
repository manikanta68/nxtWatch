import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import BackgroundColorContext from './context/BackgroundColorContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {darkTheme: false, savedVideosList: []}

  changeBackgroundTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  addVideoToSaveList = video => {
    const {savedVideosList} = this.state
    const checkVideo = savedVideosList.find(each => each.id === video.id)
    if (checkVideo === undefined) {
      this.setState({savedVideosList: [...savedVideosList, video]})
    } else {
      this.removeVideoInSaveList(video.id)
    }
  }

  removeVideoInSaveList = id => {
    const {savedVideosList} = this.state
    const updateList = savedVideosList.filter(each => each.id !== id)
    this.setState({savedVideosList: updateList})
  }

  render() {
    const {darkTheme, savedVideosList} = this.state
    return (
      <BackgroundColorContext.Provider
        value={{
          darkTheme,
          savedVideosList,
          changeBackgroundTheme: this.changeBackgroundTheme,
          addVideoToSaveList: this.addVideoToSaveList,
        }}
      >
        {' '}
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </BackgroundColorContext.Provider>
    )
  }
}

export default App
