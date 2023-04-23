import React from 'react'
import json from './index.json'
import Samp1 from './components1/Samp1'

function App3() {
  const myJson = '{}'

  function click(){
    // const jsonValue:any = JSON.parse(myJson)
    console.log(json)
  }
  return (
    <div>
      <button onClick={click}>Click</button>
      <h1>helo</h1>
      <Samp1/>
    </div>
  )
}

export default App3