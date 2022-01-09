import React, { createContext, useState } from 'react'
import initTracks from 'data/tracks'

import * as Tone from 'tone'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [tracks, setTracks] = useState(initTracks)
  const [screen, setScreen] = useState(1)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [voice, setVoice] = useState(null)

  const [beatPlayer] = useState(new Tone.Player().toDestination())
  const [voicePlayer] = useState(new Tone.Player().toDestination())

  const startSong = async (url, toLoad = true) => {
    if (toLoad) {
      await beatPlayer.load(url)
    }

    beatPlayer.start()
  }

  const stopSong = () => {
    beatPlayer.stop()
  }

  return (
    <AppContext.Provider
      value={{
        tracks,
        setTracks,
        screen,
        setScreen,
        selectedTrack,
        setSelectedTrack,
        voice,
        setVoice,

        beatPlayer,
        voicePlayer,
        startSong,
        stopSong,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
