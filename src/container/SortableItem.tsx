import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Password from "./inputs/Password"
import Text from "./inputs/Text"
import Number from "./inputs/Number"

export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    isDragging,
  } = useSortable({
    id: props.uid,
    data: {
      isStatic: false,
      uid: props.uid,
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props?.id === "Password" ? (
        <Password isOver={isOver} />
      ) : props?.id === "Text" ? (
        <Text isOver={isOver} />
      ) : props?.id == "Number" ? (
        <Number isOver={isOver} />
      ) : (
        <p className="bg-red-300 my-14">{props?.id}</p>
      )}
    </div>
  )
}

//  <Droppable key={id} id={id} dragging={isDragging}>
//   {/* {parent === id ? <DraggableItem content={"eh"} /> : null} */}
//   {sortItems.map((item, index) => {
//     return <DraggableItem content={item} key={index + 10} id={index + 10} />
//   })}
// </Droppable>
