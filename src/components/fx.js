import React, { useState, useContext } from 'react'
import { AppContext } from 'context'
import Slider from './slider'

// const effect = {
//   name: 'Reverb',
//   parameters: [
//     {
//       name: 'Frequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//     {
//       name: 'Frequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//     {
//       name: 'Frequency',
//       defaultValue: 100,
//       min: 0,
//       max: 1600,
//       step: 100,
//     },
//   ],
// }

const FX = ({ effect, changeEffect }) => {
  const {} = useContext(AppContext)
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center" onClick={() => setEnabled(!enabled)}>
        {/*
        <input
          type="checkbox"
          checked={enabled}
          name={effect.name}
          onChange={(e) => setEnabled(e.target.value)}
          className="mr-1"
        />
        <label htmlFor={effect.name} className="font-medium">
          {effect.name}
        </label>
        */}
      </div>

      <div className="flex flex-col space-y-4">
        {effect.params.map((param) => {
          return (
            <Slider
              label={param.name}
              value={effect.effect[param.key].value}
              min={param.min}
              max={param.max}
              step={param.step}
              key={param.name}
              onChange={(value) => {
                changeEffect(effect.name, param.key, value)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FX
