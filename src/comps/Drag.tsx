import React from "react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { v4 as uuidv4 } from "uuid"

function Drag(props: any) {
  const dataa = Date.now()
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })

  // const style = transform
  //   ? {
  //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  //     }
  //   : undefined
  const style = {
    transform: CSS.Translate.toString(transform),
  }
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.id}Drag
    </button>
  )
}

export default Drag
