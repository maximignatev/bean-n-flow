import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{ height: '10vh' }}
      className="flex items-center justify-center w-full border-b border-gray-300"
    >
      {children}
    </div>
  )
}
