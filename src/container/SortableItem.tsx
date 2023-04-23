import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    isDragging,
  } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p className="bg-red-300 my-14">{props?.id}</p>
      <p>{isDragging ? "over" : null}</p>
    </div>
  )
}

//  <Droppable key={id} id={id} dragging={isDragging}>
//   {/* {parent === id ? <DraggableItem content={"eh"} /> : null} */}
//   {sortItems.map((item, index) => {
//     return <DraggableItem content={item} key={index + 10} id={index + 10} />
//   })}
// </Droppable>
