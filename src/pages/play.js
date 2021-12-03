import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from 'context'
import Crunker from 'crunker'

let crunker = new Crunker()

export default () => {
  const { setScreen, voice, selectedTrack } = useContext(AppContext)

  useEffect(() => {
    crunker
      .fetchAudio(selectedTrack.url, voice)
      .then((buffers) => {
        console.log('buffers')
        // => [AudioBuffer, AudioBuffer]
        return crunker.mergeAudio(buffers)
      })
      .then((merged) => {
        // => AudioBuffer
        return crunker.export(merged, 'audio/mp3')
      })
      .then((output) => {
        // => {blob, element, url}
        // crunker.download(output.blob)
        document.body.append(output.element)
        console.log(output.url)
        alert('check')
      })
      .catch((error) => {
        // => Error Message
      })

    crunker.notSupported(() => {
      // Handle no browser support
    })
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <span>3. Your track</span>
      <div className="flex flex-col"></div>
      <button onClick={() => setScreen(1)}>Choose</button>
    </div>
  )
}
