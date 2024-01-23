import React from 'react'

const BackgroundColorContext = React.createContext({
  darkTheme: false,
  changeBackgroundTheme: () => {},
})

export default BackgroundColorContext
