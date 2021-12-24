import React, { createContext, useState } from 'react'
import tracks from 'data/tracks'

import * as Tone from 'tone'

const AppContext = createContext()

const player = new Tone.Player().toDestination()

const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState(1)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [voice, setVoice] = useState(null)

  const startSong = async (url, toLoad = true) => {
    if (toLoad) {
      await player.load(url)
    }

    player.start()
  }

  const stopSong = () => {
    player.stop()
  }

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

        player,
        startSong,
        stopSong,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
