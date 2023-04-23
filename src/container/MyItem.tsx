import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

function MyItem({ value }: any) {
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
    attributes,
    setDraggableNodeRef
  } = useSortable({
    id: value,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <h1 ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {value}
    </h1>
  )
}

export default MyItem
