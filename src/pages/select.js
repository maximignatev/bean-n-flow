import React, { useContext } from 'react'
import { AppContext } from 'context'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

import Track from 'components/track'

export default () => {
  const { tracks, setScreen, selectedTrack } = useContext(AppContext)

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
        <button
          onClick={() => {
            alert('upload')
          }}
          className="w-full h-full flex items-center justify-center border-t border-gray-300 fixed"
          style={{
            height: '10vh',
            // position: fixed;
            bottom: '10vh',
            background: 'white',
          }}
        >
          Upload track
        </button>
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
