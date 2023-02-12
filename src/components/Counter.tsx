import React, { ReactNode, useState } from "react"

type CounterProps ={
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

function Counter({children, setCount}: CounterProps) {
//   const [count, setCount] = useState<number>(1)

  return (
    <div>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>down</button>
      <button onClick={() => setCount((prev) => prev + 1)}>UP</button>
    </div>
  )
}

export default Counter
