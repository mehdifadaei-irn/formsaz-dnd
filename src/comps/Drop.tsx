import React from "react"
import { useDroppable } from "@dnd-kit/core"

function Drop(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: "4",
    data: {
        d:"mmdrAg"
    }
  })
  const test = useDroppable({
    id: "22222222",
  })
  const style = {
    color: isOver ? "green" : undefined,
    width: "30%",
    height: "13rem",
    backgroundColor: isOver ? "red" : "blue",

  }

  function click() {
    console.log(test)
  }

  return (
    <div ref={setNodeRef} style={style} className="mx-auto">
      {props.children}Drop
      <button onClick={click}>Cli</button>
    </div>
  )
}

export default Drop
