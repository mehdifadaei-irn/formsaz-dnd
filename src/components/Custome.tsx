import React from 'react'

interface CustomeProps{
    myJson: string
}

function Custome({myJson}: CustomeProps) {

    function Clicked(){
        console.log(JSON.parse(myJson));
    }
    
  return (
    <div>
        <h1>helloCustome</h1>
        <button onClick={Clicked}>Click</button>
    </div>
  )
}

export default Custome