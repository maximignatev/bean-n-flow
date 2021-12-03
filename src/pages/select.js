import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import useSound from 'use-sound'

export default () => {
  const { tracks, setScreen } = useContext(AppContext)

  return (
    <div className="w-full h-full flex flex-col items-center">
      <span>1. Select track</span>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <Track track={track} key={track.name} />
        ))}
      </div>
      <button onClick={() => setScreen(2)}>Choose</button>
    </div>
  )
}

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  const [playTrack, { stop }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.id === track.id,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.id === track.id) {
      setActive(true)
      playTrack()
    } else {
      setActive(false)
      stop()
    }
  }, [selectedTrack, track, playTrack, stop, screen])

  // on unmount stop playing
  useEffect(() => {
    return () => {
      stop()
    }
  }, [stop])

  return (
    <div
      className={isActive ? 'border border-red-500' : ''}
      onClick={() => setSelectedTrack(track)}
    >
      {track.name}
      <span />
    </div>
  )
}
