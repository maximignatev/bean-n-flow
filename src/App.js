import React, { useContext } from 'react'
import { AppContext } from 'context'

import MicRecorder from 'mic-recorder-to-mp3'
import Crunker from 'crunker'

import SelectScreen from './pages/select'
import RecordScreen from './pages/record'
import PlayScreen from './pages/play'

const recorder = new MicRecorder({
  bitRate: 128,
})

let crunker = new Crunker()

const App = () => {
  const { screen } = useContext(AppContext)

  // Select track screen
  if (screen === 1) {
    return <SelectScreen />
  }

  // Record screen
  if (screen === 2) {
    return <RecordScreen />
  }

  // Play/download screen
  if (screen === 3) {
    return <PlayScreen />
  }

  // const [playA] = useSound(soundA)

  // useEffect(() => {
  //   crunker
  //     .fetchAudio(soundB, '/music/Azealia Banks - Desperado (Instrumental).mp3')
  //     .then((buffers) => {
  //       console.log('buffers')
  //       // => [AudioBuffer, AudioBuffer]
  //       return crunker.mergeAudio(buffers)
  //     })
  //     .then((merged) => {
  //       // => AudioBuffer
  //       return crunker.export(merged, 'audio/mp3')
  //     })
  //     .then((output) => {
  //       // => {blob, element, url}
  //       // crunker.download(output.blob)
  //       document.body.append(output.element)
  //       console.log(output.url)
  //     })
  //     .catch((error) => {
  //       // => Error Message
  //     })

  // }, [])

  // return (
  //   <div style={{ margin: 64 }}>
  //     <button onClick={playA}>play</button>
  //   </div>
  // )
}

export default App
