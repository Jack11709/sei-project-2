import React from 'react'

function App() {
  const [count, setCount] = React.useState(() => {
    const currentCount = window.localStorage.getItem('count')
    if (currentCount) return JSON.parse(currentCount)
    return { current: 0 }
  })

  React.useEffect(() => {
    window.localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <>
      <h1>Count: {count.current}</h1>
      <button onClick={() => setCount({ current: count.current + 1 })}>Increase</button>
    </>
  )
}

export default App
