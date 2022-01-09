import React, { useContext, useState } from 'react'
import { AppContext } from 'context'
import * as Tone from 'tone'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

import Track from 'components/track'

export default () => {
  const { tracks, setTracks, setScreen, selectedTrack, setSelectedTrack } =
    useContext(AppContext)

  const changeHandler = async (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    const track = { url, name: file.name }

    setTracks([track, ...tracks])

    setSelectedTrack(track)
    Tone.start()
  }

  return (
    <div className="w-full h-full flex flex-col items-center max-h-screen">
      <Header>
        <span>1. Select track</span>
      </Header>
      <Content>
        <div
          className="flex flex-col px-4 py-4 space-y-1"
          style={{ marginBottom: '10vh' }}
        >
          {tracks.map((track) => (
            <Track track={track} key={track.name} />
          ))}
        </div>
        <input
          id="file-upload"
          type="file"
          name="file"
          onChange={changeHandler}
        />
        <label
          htmlFor="file-upload"
          onClick={() => {
            // alert('upload')
          }}
          className="w-full h-full flex items-center justify-center border-t border-gray-300 fixed cursor-pointer"
          style={{
            height: '10vh',
            bottom: '10vh',
            background: 'white',
          }}
        >
          Upload track
        </label>
      </Content>
      <Footer>
        <button
          onClick={() => selectedTrack && setScreen(2)}
          className="w-full h-full flex items-center justify-center"
        >
          Choose
        </button>
      </Footer>
    </div>
  )
}
