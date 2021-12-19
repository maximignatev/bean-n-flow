// const { addWebpackPlugin } = require('customize-cra')
// const webpack = require('webpack')
// addWebpackPlugin(
//   new webpack.ProvidePlugin({
//     p5: 'p5',
//   }),
// ),

import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import useSound from 'use-sound'

import p5 from 'p5'
import 'p5/lib/addons/p5.sound'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  const [playTrack, { stop, sound }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
      setActive(true)

      const delay = new p5.Delay()

      const soundFile = new p5.SoundFile(track.url, function () {
        // alert('success')
        delay.process(soundFile, 0.12, 0.7, 2300)
        soundFile.play()
      })
      // soundFile.play()

      // sound.play()
      // console.log(sound.source)
      // console.log(sound)
      // console.log(delay)
      // delay.process(window.Howler.ctx.destination, 0.12, 0.7, 2300)
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
