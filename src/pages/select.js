import React, { useContext } from 'react'
import { AppContext } from 'context'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'
import Content from 'components/layout/content'

import Track from 'components/track'

export default () => {
  const { tracks, setScreen } = useContext(AppContext)

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header>
        <span>1. Select track</span>
      </Header>
      <Content>
        <div className="flex flex-col px-4 py-4 space-y-1">
          {tracks.map((track) => (
            <Track track={track} key={track.name} />
          ))}
        </div>
      </Content>
      <Footer>
        <button onClick={() => setScreen(2)} className="w-full h-full">
          Choose
        </button>
      </Footer>
    </div>
  )
}
