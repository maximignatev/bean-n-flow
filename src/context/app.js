import React, { createContext, useState } from 'react'

import soundA from 'sounds/Cool Breeze - Assimilation.mp3'
import soundB from 'sounds/Lord Finesse - Master Ya High (Instrumental).mp3'

const tracks = [
  {
    id: 1,
    name: 'One',
    url: soundA,
  },
  {
    id: 2,
    name: 'Two',
    url: soundB,
  },
]

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
