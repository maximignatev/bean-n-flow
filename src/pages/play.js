import React, { useContext } from 'react'
import { AppContext } from 'context'
import * as Tone from 'tone'
import toWav from 'audiobuffer-to-wav'
import lamejs from 'lamejs'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'
import Crunker from 'crunker'

const crunker = new Crunker()

function wavToMp3(channels, sampleRate, samples) {
  var buffer = []
  var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128)
  var remaining = samples.length
  var samplesPerFrame = 1152
  for (var i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
    var mono = samples.subarray(i, i + samplesPerFrame)
    var mp3buf = mp3enc.encodeBuffer(mono)
    if (mp3buf.length > 0) {
      buffer.push(new Int8Array(mp3buf))
    }
    remaining -= samplesPerFrame
  }
  var d = mp3enc.flush()
  if (d.length > 0) {
    buffer.push(new Int8Array(d))
  }

  var mp3Blob = new Blob(buffer, { type: 'audio/mp3' })
  var bUrl = window.URL.createObjectURL(mp3Blob)

  // send the download link to the console
  console.log('mp3 download:', bUrl)
}

export default () => {
  const { voice, selectedTrack } = useContext(AppContext)

  // const context = new Tone.OfflineContext(1, 0.5, 44100)
  const voicePlayer = new Tone.Player({
    url: voice,
    // context
  }).toDestination()
  const beatPlayer = new Tone.Player({
    url: selectedTrack.url,
    // context,
  }).toDestination()

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
    // song.connect(context.destination)

    // context.render().then((buffer) => {
    //   console.log('buffer')
    //   console.log(buffer)
    //   console.log(buffer.downloads)
    //   console.log(buffer.url)
    //   console.log(buffer.baseUrl)

    //   var wav = toWav(buffer.get())
    //   // const blob = new Blob([wav], { type: 'audio/wav' })
    //   // console.log(wav)

    //   const mp = wavToMp3(wav)
    //   console.log(mp)
    //   // var song = context.createBufferSource()
    //   // song.buffer = buffer.get()
    //   // // song.connect(context.destination)
    //   // console.log(song)
    //   // song.start()

    //   // const url = URL.createObjectURL(wav)
    //   // const audio = document.createElement('audio')
    //   // audio.src = url
    //   // audio.controls = true
    //   // document.body.append(audio)

    //   // console.log(buffer.numberOfChannels, buffer.duration)
    //   // console.log(buffer.numberOfChannels, buffer.duration)
    // })
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
