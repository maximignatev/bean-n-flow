import React, { useState } from 'react'
import { Range } from 'react-range'

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
      <Range
        type="range"
        min={min}
        max={max}
        step={step}
        values={[value]}
        onChange={(values) => {
          setValue(values)
          onChange(values[0])
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999',
            }}
          />
        )}
      />
    </div>
  )
}
// onChange={(e) => {
//   setValue(e.target.value)
//   onChange(e)
// }}

export default Slider
