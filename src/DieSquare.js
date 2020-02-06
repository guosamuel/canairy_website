import React from 'react'

function DieSquare({ red, children }) {
  // console.log(children)
  const fill = red ? 'red' : 'black'
  const stroke = red ? 'black' : 'red'

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default DieSquare
