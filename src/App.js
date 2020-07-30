import React, { useState, useMemo, useEffect } from 'react'

function slowFunction(num) {
  console.log('Calling Slow Function')
  for (let i = 0; i < 10000000; i++) {}
  return num*2
}

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value, 10))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}
