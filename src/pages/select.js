import React, { useContext } from 'react'
import { AppContext } from 'context'
import Track from 'components/track'

export default () => {
  const { tracks, setScreen } = useContext(AppContext)

  return (
    <div className="w-full h-full flex flex-col items-center">
      <span>1. Select track</span>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <Track track={track} key={track.name} />
        ))}
      </div>
      <button onClick={() => setScreen(2)}>Choose</button>
    </div>
  )
}
