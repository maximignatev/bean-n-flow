import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

export default () => {
  const [ready, setReady] = useState(false)
  const [result, setResult] = useState(false)
  const { voice, selectedTrack } = useContext(AppContext)

  useEffect(() => {
    const audio = document.createElement('audio')
    audio.src = voice
    audio.controls = true
    document.getElementById('track').append(audio)
  }, [voice])

  const downloadTrack = () => {
    const anchor = document.createElement('a')
    anchor.download = 'recording.webm'
    anchor.href = voice
    anchor.click()
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header>
        <span>3. Your track</span>
      </Header>
      <Content>
        <div
          className="h-full w-full flex items-center justify-center"
          id="track"
        ></div>
      </Content>
      <Footer>
        <button onClick={downloadTrack} className="w-full h-full">
          Download
        </button>
      </Footer>
    </div>
  )
}
