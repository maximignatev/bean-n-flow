import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import useSound from 'use-sound'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  const [playTrack, { stop }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
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

export default Track
