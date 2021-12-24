import React, { createContext, useState } from 'react'
import effects from 'data/fx'

import * as Tone from 'tone'

const FXContext = createContext()

const FXProvider = ({ children }) => {
  const [connected, setConnected] = useState(false)

  const [effectsArr] = useState(
    effects.map((effect) => ({
      ...effect,
      effect: new Tone[effect.name](
        Object.assign(
          {},
          ...effect.params.map((item) => ({ [item.key]: item.defaultValue })),
        ),
      ),
    })),
  )

  const connect = () => {
    effectsArr.map((eff) => {
      eff.effect.connect(Tone.getDestination())
    })
    setConnected(true)
  }

  const disconnect = () => {
    effectsArr.map((eff) => {
      eff.effect.disconnect(Tone.getDestination())
    })
    setConnected(false)
  }

  const toggleConnect = () => {
    if (connected) {
      disconnect()
    } else {
      connect()
    }
  }

  return (
    <FXContext.Provider
      value={{
        effectsArr,
        toggleConnect,
        connected,
        toggleConnect,
      }}
    >
      {children}
    </FXContext.Provider>
  )
}

export { FXProvider, FXContext }
