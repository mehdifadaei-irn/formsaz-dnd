import { ReactNode, useState, useRef, HTMLInputTypeAttribute } from "react"
import styled from "styled-components"
import { FiEye } from "react-icons/fi"

type SectionProps = {
  title?: string
  children: ReactNode
  listArr: string[]
}

function SectionH({ title = "defultHead", children }: SectionProps) {
  const [first, setFirst] = useState<string>("")
  const myRef: any = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lastchar = e.target.value.charAt(e.target.value.length - 1)
    if (e.target.value.includes("m")) {
      myRef.current.blur()
    } else {
      setFirst(e.target.value)
    }
  }
  const [shown, setShown] = useState(false)

  return (
    <div>
      <h1>hello mamadDDD</h1>
      <input
        type="password"
        onChange={handleChanges}
        ref={myRef}
        value={first}
        style={{ border: "black 2px solid" }}
      />
      <input
        type={shown ? "text" : "password"}
        style={{ border: "black 2px solid" }}
      />
      <FiEye className="reveal" onClick={() => setShown(!shown)} />
      <input
        type="time"
        step="1"
        // value={this.state.time}
        className="form-control"
        style={{ border: "black 2px solid", width: 200 }}
        placeholder="3231231"
        // onChange={(ev) => {this.setState({time:ev.target.value})}
      />
      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        // value="2018-06-12T19:30"
        min="2018-06-07T00:00"
        max="2018-06-14T00:00"
      ></input>
    </div>
  )
}

export default SectionH
