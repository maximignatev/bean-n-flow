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
    <div className="flex flex-col w-full">
      <label className="text-sm">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
// onChange={(e) => setValue(e.target.value)}

export default Slider
