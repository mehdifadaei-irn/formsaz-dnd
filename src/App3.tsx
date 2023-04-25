import React from "react"
import json from "./index.json"
import Samp1 from "./components1/Samp1"
import App2 from "./App2"
import { MultipleContainers } from "./container/MultipleContainer"
// @ts-ignore
// import { FormBuilder } from "th-react-formbuilder"

const items = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-header",
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    icon: "fa fa-paragraph",
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    icon: "fa fa-caret-square-o-down",
  },
]
function App3() {
  const myJson = "{}"

  function click() {
    // const jsonValue:any = JSON.parse(myJson)
    console.log(json)
  }
  return (
    <div className="">
      <App2 />
      {/* <MultipleContainers/> */}
    </div>
  )
}

export default App3
