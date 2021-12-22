import React, { useContext } from 'react'
import { AppContext } from 'context'
import * as Tone from 'tone'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'
import Crunker from 'crunker'

const crunker = new Crunker()

export default () => {
  const { voice, selectedTrack } = useContext(AppContext)

  const voicePlayer = new Tone.Player(voice).toDestination()
  const beatPlayer = new Tone.Player(selectedTrack.url).toDestination()

  const play = async () => {
    await beatPlayer.load(selectedTrack.url)
    await voicePlayer.load(voice)

    Tone.Transport.scheduleOnce(() => {
      beatPlayer.start()
      voicePlayer.start()
    })

    Tone.Transport.start()
  }

  const download = () => {
    // https://tonejs.github.io/docs/14.7.77/Merge
    // or use merge here
    // (in case you want change volume of tracks)
    crunker
      .fetchAudio(selectedTrack.url, voice)
      .then((buffers) => crunker.mergeAudio(buffers))
      .then((merged) => crunker.export(merged, 'audio/mp3'))
      .then((output) => crunker.download(output.blob))
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
        >
          <button
            className="bg-blue-500 px-16 py-4 rounded-full"
            onClick={play}
          >
            Play
          </button>
        </div>
      </Content>
      <Footer>
        <button onClick={download} className="w-full h-full">
          Download
        </button>
      </Footer>
    </div>
  )
}
