import React, { useState, useEffect, useContext } from 'react'
import { FXContext } from 'context'
import * as Tone from 'tone'

import FX from 'components/fx'
import effects from 'data/fx'

// const recorder = new Tone.Recorder()
// const pitchShift = new Tone.PitchShift(8).toDestination()
// const mic = new Tone.UserMedia().chain(pitchShift, recorder).toDestination()

export default () => {
  const { effectsArr } = useContext(FXContext)
  const [recording, setRecording] = useState(false)

  const [recorder] = useState(new Tone.Recorder())
  const [mic] = useState(
    new Tone.UserMedia()
      .chain(...effectsArr.map((fx) => fx.effect), recorder)
      .toDestination(),
  )

  const start = () => {
    Tone.start()
    mic.open()

    setRecording(true)
    recorder.start()
  }

  const stop = async () => {
    setRecording(false)

    await mic.close()
    const recording = await recorder.stop()
    const url = URL.createObjectURL(recording)

    const audio = document.createElement('audio')
    audio.src = url
    audio.controls = true
    document.body.append(audio)
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <span>2. Press rec when ready</span>
      {effectsArr.map((effect, index) => (
        <FX
          effect={effect}
          key={effect.name}
          changeEffect={(effect, key, value) => {
            effectsArr[
              effectsArr.findIndex((fx) => fx.name === effect)
            ].effect.set({
              [key]: value,
            })
          }}
        />
      ))}
      {recording ? (
        <button onClick={stop}>Stop</button>
      ) : (
        <button onClick={start}>Record</button>
      )}
    </div>
  )
}
// effects.find(effect => effect.name)
