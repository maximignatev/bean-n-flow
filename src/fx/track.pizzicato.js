import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import useSound from 'use-sound'

import Pizzicato from 'pizzicato'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  const [playTrack, { stop }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
      setActive(true)
      // var sound = new Pizzicato.Sound({ source: 'input' }, function () {
      var sound = new Pizzicato.Sound(track.url, function () {
        var distortion = new Pizzicato.Effects.Distortion({
          gain: 0.8,
        })

        var pingPongDelay = new Pizzicato.Effects.PingPongDelay({
          feedback: 0.6,
          time: 0.4,
          mix: 0.5,
        })
        sound.addEffect(pingPongDelay)
        sound.addEffect(distortion)
        sound.play()
      })

      // playTrack()
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
