import React, { useState } from "react"
import {
  closestCenter,
  closestCorners,
  rectIntersection,
  pointerWithin,
  DndContext,
  useDraggable,
  UniqueIdentifier,
  CollisionDetection as CollisionDetectionType,
  Modifiers,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import {
  Draggable,
  DraggableOverlay,
  Droppable,
  GridContainer,
  Wrapper,
} from "./components"
import { SortableItem } from "./container/SortableItem"

// export default {
//   title: "Core/Droppable/useDroppable",
// }

interface Props {
  collisionDetection?: CollisionDetectionType
  containers?: string[]
  modifiers?: Modifiers
  value?: string
}

export default function DroppableStory({
  containers = ["A"],
  collisionDetection,
  modifiers,
}: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [parent, setParent] = useState<UniqueIdentifier | null>(null)
  const [staticItems, setStaticItems] = useState<string[]>([
    "Input",
    "Text",
    "Number",
  ])
  const [sortItems, setSortItems] = useState<any[]>([])

  function click() {
    console.log(sortItems)
  }

  return (
    <DndContext
      collisionDetection={collisionDetection}
      modifiers={parent === null ? undefined : modifiers}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over, active }) => {
        // console.log(over)
        setParent(over ? over.id : null)
        if (over === null) {
          setSortItems([...sortItems, active.data.current?.content])
        }
        setIsDragging(false)
      }}
      onDragCancel={() => setIsDragging(false)}
    >
      <button onClick={click}>cli</button>
      <Wrapper>
        <Wrapper
          style={{
            width: 350,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* {parent === null ? <DraggableItem content={"mmd"} /> : null} */}
          {staticItems.map((item, index) => {
            return (
              <DraggableItem key={index + 2} content={item} id={index + 1} />
            )
          })}
          {/* {parent === null ? item : null} */}
        </Wrapper>
        <div className="bg-slate-400 w-[30%] h-68">
          {containers.map((idd, i) => (
            <div key={i} className="bo  border">
              <SortableContext
                items={sortItems}
                strategy={verticalListSortingStrategy}
              >
                {sortItems.map((id, i) => (
                  <SortableItem key={i} id={id} />
                ))}
              </SortableContext>
            </div>
          ))}
        </div>
      </Wrapper>
      <DraggableOverlay />
    </DndContext>
  )
}

interface DraggableProps {
  handle?: boolean
  id?: any
  content: any
}

function DraggableItem({ handle, id, content }: DraggableProps) {
  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: id,
    data: {
      content,
    },
  })

  return (
    <Draggable
      dragging={isDragging}
      content={content}
      ref={setNodeRef}
      handle={handle}
      listeners={listeners}
      style={{
        opacity: isDragging ? 0.5 : undefined,
      }}
      id={id}
      label="MMD"
    />
  )
}
