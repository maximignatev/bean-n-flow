import React, { createContext, useState } from 'react'
import tracks from 'data/tracks'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState(1)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [voice, setVoice] = useState(null)

  return (
    <AppContext.Provider
      value={{
        tracks,
        screen,
        setScreen,
        selectedTrack,
        setSelectedTrack,
        voice,
        setVoice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
