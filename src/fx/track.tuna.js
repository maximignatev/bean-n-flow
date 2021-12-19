import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
// import useSound from 'use-sound'

import Tuna from 'tunajs'
import { Howler, Howl } from 'howler'
import 'howler-plugin-effect-chain'

const Track = ({ track }) => {
  const { selectedTrack, setSelectedTrack, screen } = useContext(AppContext)
  // const [playTrack, { stop }] = useSound(track.url)
  const [isActive, setActive] = useState(
    selectedTrack && selectedTrack.name === track.name,
  )

  useEffect(() => {
    if (selectedTrack && selectedTrack.name === track.name) {
      setActive(true)

      const sound = new Howl({ src: track.url })

      const tuna = new Tuna(Howler.ctx)
      const chorus = new tuna.Chorus({})

      var overdrive = new tuna.Overdrive({
        outputGain: -9.154, //-42 to 0 in dB
        drive: 0.197, //0 to 1
        curveAmount: 0.979, //0 to 1
        algorithmIndex: 0, //0 to 5, selects one of the drive algorithms
        bypass: 0,
      })
      var delay = new tuna.Delay({
        feedback: 1, //0 to 1+
        delayTime: 10000, //1 to 10000 milliseconds
        wetLevel: 0.5, //0 to 1+
        dryLevel: 1, //0 to 1+
        cutoff: 20000, //cutoff frequency of the built in lowpass-filter. 20 to 22050
        bypass: 100,
      })

      Howler.addEffect(chorus)
      Howler.addEffect(overdrive)
      Howler.addEffect(delay)

      sound.play()

      // var context = window.Howler.ctx
      // var tuna = new Tuna(context)

      // const chorus = new tuna.Chorus({
      //   rate: 1.5,
      //   feedback: 0.2,
      //   delay: 0.0045,
      //   bypass: 0,
      // })
      // var overdrive = new tuna.Overdrive({
      //   outputGain: -9.154, //-42 to 0 in dB
      //   drive: 0.197, //0 to 1
      //   curveAmount: 0.979, //0 to 1
      //   algorithmIndex: 0, //0 to 5, selects one of the drive algorithms
      //   bypass: 0,
      // })
      // var delay = new tuna.Delay({
      //   feedback: 1, //0 to 1+
      //   delayTime: 10000, //1 to 10000 milliseconds
      //   wetLevel: 0.5, //0 to 1+
      //   dryLevel: 1, //0 to 1+
      //   cutoff: 20000, //cutoff frequency of the built in lowpass-filter. 20 to 22050
      //   bypass: 100,
      // })

      // overdrive.connect(window.Howler.ctx.destination)
      // delay.connect(window.Howler.ctx.destination)
      // chorus.connect(window.Howler.ctx.destination)

      // playTrack()
    } else {
      setActive(false)
      // stop()
    }
  }, [selectedTrack, track, screen])

  // on unmount stop playing
  // useEffect(() => {
  //   return () => {
  //     stop()
  //   }
  // }, [stop])

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
