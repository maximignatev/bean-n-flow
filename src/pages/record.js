import React, { useState, useContext } from 'react'
import { AppContext } from 'context'
import MicRecorder from 'mic-recorder-to-mp3'
import Crunker from 'crunker'
import useSound from 'use-sound'

const recorder = new MicRecorder({
  bitRate: 128,
})

let crunker = new Crunker()

export default () => {
  const [recording, setRecording] = useState(false)
  const { selectedTrack, setVoice, setScreen } = useContext(AppContext)
  const [play, { stop }] = useSound(selectedTrack.url)

  const record = () => {
    setRecording(true)
    recorder.start()
    play()
    //
  }

  const stopRecording = () => {
    setRecording(true)
    stop()

    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, 'me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now(),
        })

        console.log(URL.createObjectURL(file))
        console.log(file)

        const voiceUrl = URL.createObjectURL(file)
        // crunker
        //   .fetchAudio(selectedTrack.url, voiceUrl)
        //   .then((buffers) => {
        //     console.log('buffers')
        //     // => [AudioBuffer, AudioBuffer]
        //     return crunker.mergeAudio(buffers)
        //   })
        //   .then((merged) => {
        //     // => AudioBuffer
        //     return crunker.export(merged, 'audio/mp3')
        //   })
        //   .then((output) => {
        //     // => {blob, element, url}
        //     // crunker.download(output.blob)
        //     document.body.append(output.element)
        //     console.log(output.url)
        //     alert('check')
        //   })
        //   .catch((error) => {
        //     // => Error Message
        //   })

        // crunker.notSupported(() => {
        //   // Handle no browser support
        // })

        setVoice(URL.createObjectURL(file))
        setScreen(3)
        // const player = new Audio(URL.createObjectURL(file))
        // alert('ok')
      })
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <span>2. Press rec when ready</span>
      {recording ? (
        <button onClick={() => stopRecording()}>Stop</button>
      ) : (
        <button onClick={() => record()}>Record</button>
      )}
    </div>
  )
}
