import React from "react"
import { useDndContext } from "@dnd-kit/core"

function Password({ isOver }: any) {
  const dnd = useDndContext()

  function cli() {
    console.log("jan")
  }

  return (
    <div className="h-11">
      <input type="password" placeholder="Password" className={`${isOver ? 'border': ''}`} />
    </div>
  )
}

export default Password
