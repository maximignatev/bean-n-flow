import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from 'context'
import * as Tone from 'tone'
import toWav from 'audiobuffer-to-wav'
import lamejs from 'lamejs'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'
import Slider from 'components/slider'

import Crunker from 'crunker'

const crunker = new Crunker()

const exportWav = (buffer) => {
  // I use recorderWorker.js to save the WAV file
  // https://webaudiodemos.appspot.com/AudioRecorder/js/recorderjs/recorderWorker.js
  // Included it in html, because couldn't find out how to do it any other way
  const workerBlob = new Blob([document.getElementById('worker').textContent])
  const worker = new Worker(window.URL.createObjectURL(workerBlob))

  worker.postMessage({
    command: 'init',
    config: {
      sampleRate: 44100,
    },
  })
  worker.postMessage({
    command: 'record',
    buffer: [buffer.getChannelData(0), buffer.getChannelData(1)],
  })
  worker.postMessage({
    command: 'exportWAV',
    type: 'audio/wav',
  })
  worker.onmessage = (event) => {
    console.log(event)
    const blob = event.data
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'test.wav')
    document.body.appendChild(link)
    link.click()
  }
}

export default () => {
  const { voice, selectedTrack } = useContext(AppContext)
  const [beatVolume, setBeatVolume] = useState(-5)
  const [voiceVolume, setVoiceVolume] = useState(0)
  const [loading, setLoading] = useState(false)

  // const context = new Tone.OfflineContext(2, 30, 44100)
  const [beatPlayer] = useState(
    new Tone.Player({
      url: selectedTrack.url,
      volume: beatVolume,
      // context,
    }).toDestination(),
  )
  const [voicePlayer] = useState(
    new Tone.Player({
      url: voice,
      volume: voiceVolume,
      // context,
    }).toDestination(),
  )

  const play = async () => {
    await beatPlayer.load(selectedTrack.url)
    console.log('beat load')
    await voicePlayer.load(voice)
    console.log('voice load')

    Tone.Transport.scheduleOnce(() => {
      console.log('start')
      beatPlayer.start()
      voicePlayer.start()
    })

    Tone.Transport.start()
  }

  const download = () => {
    const vl = voicePlayer.buffer.get().duration
    const bl = beatPlayer.buffer.get().duration
    const l = vl > bl ? vl : bl

    Tone.Offline(async ({ transport }) => {
      setLoading(true)
      const osc = new Tone.Oscillator().toDestination()
      const bp = new Tone.Player({
        // url: selectedTrack.url,
        volume: beatVolume,
      }).toDestination()
      const vp = new Tone.Player({
        // url: voice,
        volume: voiceVolume,
      }).toDestination()

      await bp.load(selectedTrack.url)
      console.log('-_-')
      await vp.load(voice)

      await transport.scheduleOnce((time) => {
        bp.start(time)
        vp.start(time)
        // osc.start(time).stop(time + 5)
      }, 5)
      // make sure to start the transport
      transport.start()
    }, l).then((buffer) => {
      // do something with the output buffer
      setLoading(false)
      console.log('then')
      exportWav(buffer)
    })
    // context.render().then((buffer) => {
    //   console.log('buffer')
    //   console.log(buffer)
    //   console.log(buffer.downloads)
    //   console.log(buffer.url)
    //   console.log(buffer.baseUrl)
    //   exportWav(buffer)
    // })
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header>
        <span>3. Your track</span>
      </Header>
      <Content>
        <div
          className="h-4/5 w-full flex items-center justify-center"
          id="track"
        >
          <button
            className="bg-blue-500 px-16 py-4 rounded-full"
            onClick={play}
          >
            Play
          </button>
        </div>
        <div className="py-4 px-6 flex flex-col items-center w-full mb-8 space-y-4">
          <Slider
            label="Beat volume"
            min={-40}
            max={0}
            step={0.01}
            value={beatVolume}
            onChange={(value) => {
              beatPlayer.volume.value = value
              setBeatVolume(value)
            }}
          />
          <Slider
            min={-40}
            max={0}
            step={0.01}
            label="Voice volume"
            value={voiceVolume}
            onChange={(value) => {
              voicePlayer.volume.value = value
              setVoiceVolume(value)
            }}
          />
        </div>
      </Content>
      <Footer>
        <button
          onClick={() => !loading && download()}
          className="w-full h-full"
        >
          {loading ? 'Please wait...' : 'Download'}
        </button>
      </Footer>
    </div>
  )
}
