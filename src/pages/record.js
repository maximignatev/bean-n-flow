import React, { useState, useContext, useEffect, useCallback } from 'react'
import { AppContext, FXContext } from 'context'
import * as Tone from 'tone'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

import FX from 'components/fx'

// const recorder = new Tone.Recorder()
// const mic = new Tone.UserMedia().chain(recorder)

export default ({ withFx = false }) => {
  const [recording, setRecording] = useState(false)
  const { selectedTrack, setVoice, setScreen, startSong, stopSong, player } =
    useContext(AppContext)
  const { effectsArr, toggleConnect, connected } = useContext(FXContext)

  const [recorder] = useState(new Tone.Recorder())
  const [mic] = useState(
    withFx
      ? new Tone.UserMedia().chain(
          ...effectsArr.map((fx) => fx.effect),
          recorder,
        )
      : new Tone.UserMedia().chain(recorder),
  )

  useEffect(() => {
    // request microphone permission
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    })
  }, [])

  const record = async () => {
    setRecording(true)

    Tone.Transport.scheduleOnce(async () => {
      await mic.open()
      recorder.start()
      player.start()
    })

    Tone.Transport.start()

    // await startSong(selectedTrack.url, false)
    // recorder.start()
  }

  const stopRecording = async () => {
    setRecording(false)
    stopSong()

    await mic.close()
    const recording = await recorder.stop()
    const url = URL.createObjectURL(recording)
    setVoice(url)
    setScreen(3)
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header>
        <span>2. Record voice</span>
      </Header>
      <Content>
        <div className="h-full w-full flex flex-col items-center justify-center">
          {recording ? 'Press stop to finish' : 'Press rec when ready'}

          {withFx && (
            <>
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

              <div>
                <input
                  type="checkbox"
                  id="hearYourVoice"
                  name="hearYourVoice"
                  value={connected}
                  onChange={useCallback(() => {
                    if (connected) {
                      if (!recording) {
                        mic.close()
                        mic.disconnect(Tone.getDestination())
                      }
                    } else {
                      mic.open()
                      mic.connect(Tone.getDestination())
                    }

                    toggleConnect()
                  }, [connected, recording])}
                />
                <label for="hearYourVoice">Hear your voice?</label>
              </div>
            </>
          )}
        </div>
      </Content>
      <Footer>
        <button
          onClick={() => (recording ? stopRecording() : record())}
          className="w-full h-full"
        >
          {recording ? 'Stop' : 'Record'}
        </button>
      </Footer>
    </div>
  )
}
