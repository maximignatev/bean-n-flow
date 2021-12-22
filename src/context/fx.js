import React, { createContext, useState } from 'react'
import effects from 'data/fx'

import * as Tone from 'tone'

const FXContext = createContext()

const FXProvider = ({ children }) => {
  const [effectsArr] = useState(
    effects.map((effect) => ({
      ...effect,
      effect: new Tone[effect.name](
        Object.assign(
          {},
          ...effect.params.map((item) => ({ [item.key]: item.defaultValue })),
        ),
      ).toDestination(),
    })),
  )

  return (
    <FXContext.Provider
      value={{
        effectsArr,
      }}
    >
      {children}
    </FXContext.Provider>
  )
}

export { FXProvider, FXContext }
