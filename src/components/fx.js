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

const FX = ({ effect }) => {
  const {} = useContext(AppContext)
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex flex-col w-full px-16">
      <div className="flex items-center" onClick={() => setEnabled(!enabled)}>
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
      </div>

      {effect.params.map((param) => (
        <Slider
          label={param.name}
          value={param.defaultValue}
          min={param.min}
          max={param.max}
          step={param.step}
          key={param.name}
        />
      ))}
    </div>
  )
}

export default FX
