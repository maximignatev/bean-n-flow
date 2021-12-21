import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, startSong, stopSong } =
    useContext(AppContext)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
      startSong(track.url)
      setActive(true)
    } else {
      stopSong()
      setActive(false)
    }
  }, [selectedTrack, track, startSong, stopSong])

  // on unmount stop playing
  useEffect(() => {
    return () => {
      stopSong()
    }
  }, [stopSong])

  return (
    <div
      className={`truncate flex items-center px-2 py-1.5 ${
        isActive ? 'border border-red-500' : ''
      }`}
      onClick={() => setSelectedTrack(track)}
    >
      {track.name}
    </div>
  )
}

export default Track
