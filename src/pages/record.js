import React, { useState, useContext } from 'react'
import { AppContext } from 'context'
import * as Tone from 'tone'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

const recorder = new Tone.Recorder()
const mic = new Tone.UserMedia().chain(recorder)

export default () => {
  const [recording, setRecording] = useState(false)
  const { selectedTrack, setVoice, setScreen, startSong, stopSong } =
    useContext(AppContext)

  const record = () => {
    setRecording(true)
    mic.open()
    recorder.start()
    startSong(selectedTrack.url)
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
        <div className="h-full w-full flex items-center justify-center">
          {recording ? 'Press stop to finish' : 'Press rec when ready'}
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
