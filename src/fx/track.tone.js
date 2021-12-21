import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import useSound from 'use-sound'

import * as Tone from 'tone'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  const [playTrack, { stop, sound }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
      setActive(true)

      const player = new Tone.Player({
        url: track.url,
        autostart: true,
      })
      const filter = new Tone.Filter(400, 'lowpass').toDestination()
      const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination()
      var autoWah = new Tone.AutoWah(50, 6, -30).toDestination()
      const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination()
      const cheby = new Tone.Chebyshev(50).toDestination()
      const phaser = new Tone.Phaser({
        frequency: 15,
        octaves: 5,
        baseFrequency: 1000,
      }).toDestination()
      const vibrato = new Tone.Vibrato().toDestination()

      // create a monosynth connected to our cheby

      // connect the player to the feedback delay and filter in parallel
      player.connect(filter)
      player.connect(feedbackDelay)
      player.connect(autoWah)
      player.connect(chorus)
      player.connect(cheby)
      player.connect(phaser)
      player.connect(vibrato)

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
