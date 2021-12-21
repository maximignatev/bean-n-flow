import React, { useState, useEffect } from 'react'

const Slider = ({
  label = 'Range',
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  // onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Slider
