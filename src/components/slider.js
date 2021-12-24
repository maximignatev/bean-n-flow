import React, { useState } from 'react'

const Slider = ({
  label = 'Range',
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: propValue,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(propValue)

  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        style={{ transform: 'scale(1.5)' }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e)
        }}
      />
    </div>
  )
}
// onChange={(e) => setValue(e.target.value)}

export default Slider
