import React, { useState, useEffect } from 'react'
import * as Tone from 'tone'

import FX from 'components/fx'
import effects from 'data/fx'

// const recorder = new Tone.Recorder()
// const pitchShift = new Tone.PitchShift(8).toDestination()
// const mic = new Tone.UserMedia().chain(pitchShift, recorder).toDestination()

export default () => {
  const [recording, setRecording] = useState(false)
  const [pitch, setPitch] = useState('8')

  const [recorder] = useState(new Tone.Recorder())
  const [effectsArr] = useState(
    effects.map((effect) =>
      new Tone[effect.name](
        Object.assign(
          {},
          ...effect.params.map((item) => ({ [item.label]: item.defaultValue })),
        ),
      ).toDestination(),
    ),
  )
  const [pitchShift] = useState(new Tone.PitchShift(8).toDestination())
  const [mic] = useState(
    new Tone.UserMedia()
      .chain(...effectsArr, pitchShift, recorder)
      .toDestination(),
  )

  // do this if preview instantly
  // useEffect(() => {
  //   Tone.start()
  //   mic.open()
  // }, [])

  useEffect(() => {
    pitchShift.pitch = +pitch
  }, [pitch])

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
      <input
        type="range"
        id="volume"
        name="volume"
        step="0"
        min="-12"
        max="12"
        value={pitch}
        onChange={(e) => setPitch(e.target.value)}
      />
      {/*
       */}
      {effects.map((effect) => (
        <FX effect={effect} key={effect.name} />
      ))}
      {recording ? (
        <button onClick={stop}>Stop</button>
      ) : (
        <button onClick={start}>Record</button>
      )}
    </div>
  )
}
