import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{ height: '80vh', maxHeight: '80vh', maxWidth: '100vw' }}
      className="overflow-auto"
    >
      {children}
    </div>
  )
}
