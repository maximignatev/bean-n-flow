import React, { useState, useCallback, useEffect } from 'react'
import { TweenLite, TimelineMax, Back, Power4 } from 'gsap'
import { useEventListener } from 'hooks'
import useSound from 'use-sound'
import MicRecorder from 'mic-recorder-to-mp3'

import Landing from 'components/Landing'
import Player from 'components/Player'

import recSound from 'sounds/VideoRecord.ogg'
import stopSound from 'sounds/VideoRecordori.ogg'
import playSound from 'sounds/Lockori.ogg'
import playEndSound from 'sounds/Unlockori.ogg'

import soundA from 'sounds/Cool Breeze - Assimilation.mp3'
import soundB from 'sounds/Lord Finesse - Master Ya High (Instrumental).mp3'

import { RECORD_COLOR, STOP_COLOR, PLAY_COLOR } from 'styles/colors'

import Crunker from 'crunker'

const recorder = new MicRecorder({
  bitRate: 128
})

let crunker = new Crunker()

const App = () => {
  const [playA] = useSound(soundA)

  useEffect(() => {
    console.log('crunker')
    console.log(crunker)
    crunker
      .fetchAudio(soundB, '/music/Azealia Banks - Desperado (Instrumental).mp3')
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
      })
      .catch((error) => {
        // => Error Message
      })

    crunker.notSupported(() => {
      // Handle no browser support
    })
  }, [])

  return (
    <div style={{ margin: 64 }}>
      <button onClick={playA}>play</button>
    </div>
  )
  // const [actions, setActions] = useState([])
  // const [audio, setAudio] = useState(undefined)
  // const [isRecording, setRecording] = useState(false)
  // const [isRecorded, setRecorded] = useState(false)
  // const [isPlaying, setPlaying] = useState(false)

  // const [playRecSound] = useSound(recSound)
  // const [playStopSound] = useSound(stopSound)
  // const [playPlaySound] = useSound(playSound)
  // const [playPlayEndSound] = useSound(playEndSound)

  // useEffect(() => {
  //   window.MorphSVGPlugin.convertToPath(
  //     'circle, rect, ellipse, line, polygon, polyline'
  //   )

  //   TweenLite.set('svg', {
  //     visibility: 'visible'
  //   })
  // }, [])

  // var tl = new TimelineMax({
  //   delay: 0
  // })

  // const morphToSquare = () =>
  //   tl.to('#circle', 0.5, {
  //     morphSVG: {
  //       shape: '#square'
  //     },
  //     stroke: STOP_COLOR,
  //     fill: STOP_COLOR,
  //     ease: Back.easeInOut
  //   })

  // const morphToTriangle = () =>
  //   tl.to('#circle', 0.5, {
  //     morphSVG: {
  //       shape: '#star'
  //     },
  //     stroke: PLAY_COLOR,
  //     fill: PLAY_COLOR,
  //     ease: Power4.easeOut
  //   })

  // const morphToCircle = () =>
  //   tl.to('#circle', 0.5, {
  //     morphSVG: {
  //       shape: '#circle'
  //     },
  //     stroke: RECORD_COLOR,
  //     fill: RECORD_COLOR,
  //     ease: Back.easeInOut
  //   })

  // const recordCoordinates = ({ clientX: x, clientY: y }, type = 'Move') => {
  //   const action = {
  //     type,
  //     x,
  //     y,
  //     time: Date.now()
  //   }

  //   setActions((actions) => [...actions, action])
  // }

  // const recordScroll = (e, type = 'Scroll') => {
  //   const action = {
  //     type,
  //     scroll: window.scrollY,
  //     time: Date.now()
  //   }

  //   setActions((actions) => [...actions, action])
  // }

  // const recordClick = (target, type = 'Click') => {
  //   const action = {
  //     type,
  //     target,
  //     time: Date.now()
  //   }

  //   setActions((actions) => [...actions, action])
  // }

  // const recordKeyUp = (input, type = 'KeyUp') => {
  //   const action = {
  //     type,
  //     input,
  //     value: input.value,
  //     time: Date.now()
  //   }

  //   setActions((actions) => [...actions, action])
  // }

  // const onMove = useCallback(
  //   (e) => isRecording && recordCoordinates(e, 'Move'),
  //   [isRecording]
  // )

  // const onScroll = useCallback(
  //   (e) => isRecording && recordScroll(e, 'Scroll'),
  //   [isRecording]
  // )

  // const onClick = useCallback(
  //   (e) => isRecording && recordClick(e.target, 'Click'),
  //   [isRecording]
  // )

  // const onKeyUp = useCallback((e) => isRecording && recordKeyUp(e.target), [
  //   isRecording
  // ])

  // const onInputFocus = useCallback(
  //   (e) =>
  //     isRecording &&
  //     setActions((actions) => [
  //       ...actions,
  //       {
  //         type: 'InputFocus',
  //         time: Date.now()
  //       }
  //     ]),
  //   [isRecording]
  // )

  // const onInputBlur = useCallback(
  //   (e) =>
  //     isRecording &&
  //     setActions((actions) => [
  //       ...actions,
  //       {
  //         type: 'InputBlur',
  //         time: Date.now()
  //       }
  //     ]),
  //   [isRecording]
  // )

  // useEventListener('mousemove', onMove)
  // useEventListener('scroll', onScroll)
  // useEventListener('click', onClick)
  // useEventListener('keyup', onKeyUp)
  // useEventListener('focus', onInputFocus, document.getElementById('input'))
  // useEventListener('blur', onInputBlur, document.getElementById('input'))

  // const record = () => {
  //   setRecording(true)
  //   recorder.start()

  //   document.title = 'Recording...'
  //   document.getElementById('favicon').href = '/icons/stop.svg'

  //   playRecSound()
  //   morphToSquare()
  // }

  // const stop = () => {
  //   if (actions.length > 0) {
  //     setRecording(false)
  //     setRecorded(true)
  //     recorder
  //       .stop()
  //       .getMp3()
  //       .then(([buffer, blob]) => {
  //         // do what ever you want with buffer and blob
  //         // Example: Create a mp3 file and play
  //         const file = new File(buffer, 'me-at-thevoice.mp3', {
  //           type: blob.type,
  //           lastModified: Date.now()
  //         })

  //         const player = new Audio(URL.createObjectURL(file))
  //         setAudio(player)
  //       })

  //     document.title = 'Play'
  //     document.getElementById('favicon').href = '/icons/play.svg'

  //     playStopSound()
  //     morphToTriangle()
  //   }
  // }

  // const play = () => {
  //   setPlaying(true)
  //   if (audio) {
  //     audio.play()
  //   }

  //   document.title = 'Playing...'

  //   playPlaySound()
  //   morphToSquare()
  // }

  // const onPlayed = () => {
  //   setPlaying(false)

  //   // Erase previous recording
  //   setRecorded(false)
  //   setActions([])
  //   setAudio(undefined)

  //   document.title = 'Pointcap'
  //   document.getElementById('favicon').href = '/icons/rec.svg'

  //   playPlayEndSound()
  //   morphToCircle()
  // }

  // const toggleRecording = () => {
  //   if (!isRecorded) {
  //     if (isRecording) {
  //       stop()
  //     } else {
  //       record()
  //     }
  //   }

  //   if (isRecorded && !isPlaying) {
  //     play()
  //   }
  // }

  // return (
  //   <>
  //     <Landing
  //       isRecording={isRecording}
  //       isPlaying={isPlaying}
  //       onShapeClick={toggleRecording}
  //       showTip={isRecording && actions.length < 50}
  //     />
  //     <Player isPlaying={isPlaying} onPlayed={onPlayed} actions={actions} />
  //   </>
  // )
}

export default App
