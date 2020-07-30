import React, { useState } from 'react'

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i < 1000000000; i++) {}
  return num*2
}

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction(number)
  const themeStyles = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value, 10))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}
