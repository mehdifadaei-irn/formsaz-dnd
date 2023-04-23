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
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
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
} from "../components"
import { SortableItem } from "./SortableItem"

export default {
  title: "Core/Droppable/useDroppable",
}

interface Props {
  collisionDetection?: CollisionDetectionType
  containers?: string[]
  modifiers?: Modifiers
  value?: string
}

export function DroppableStory({
  containers = ["A"],
  collisionDetection,
  modifiers,
}: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [parent, setParent] = useState<UniqueIdentifier | null>(null)
  const [dropItems, setDropItems] = useState<string[]>([])
  const [dItems, setDItems] = useState<string[]>([])
  const [staticItems, setStaticItems] = useState<string[]>([
    "Text",
    "Number",
    "Password",
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function clicked() {
    console.log(dropItems)
  }
  function handleOver({active, over}:any){
    console.log(active, over)
    

  }

  // const item = <DraggableItem  />

  return (
    <DndContext
      collisionDetection={collisionDetection}
      modifiers={parent === null ? undefined : modifiers}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over, active }) => {
        setParent(over ? over.id : null)
        if (over !== null) console.log(active.id, over.id)

        // @ts-ignore
        setDropItems((items) => [...items, active.id])
        // if (over !== null || over === undefined) {
        //   // console.log(over?.id)
        //   // console.log(active.id)
        //   // @ts-ignore
        //   setDropItems((items) => [...items, active.id])
        // }
        setIsDragging(false)
      }}
      onDragCancel={() => setIsDragging(false)}
    >
      <Wrapper>
        <button onClick={clicked}>cli</button>
        <Wrapper
          style={{
            width: 350,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* {parent === null ? item : null} */}
          <SortableContext
            items={staticItems}
            strategy={verticalListSortingStrategy}
          >
            {staticItems.map((it, i) => (
              <DraggableItem id={it} key={i} idd={i} />
            ))}
          </SortableContext>
        </Wrapper>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragOver={handleOver}
        >
          <GridContainer columns={1}>
            <SortableContext
              items={dropItems}
              strategy={verticalListSortingStrategy}
            >
              {dropItems.map((it, i) => (
                <SortableItem key={i} id={it} uid={i} />
              ))}
            </SortableContext>
          </GridContainer>
        </DndContext>
      </Wrapper>
      <DraggableOverlay />
    </DndContext>
  )

  function handleDragEnd(event:any) {
    const { active, over } = event
    console.log(active, over)
    if (active.id !== over.id) {
      setDropItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(dropItems, oldIndex, newIndex)
      })
    }
  }
}

interface DraggableProps {
  handle?: boolean
  id: any
  idd: number | string
}

function DraggableItem({ handle, id, idd }: DraggableProps) {
  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: id,
  })

  return (
    <Draggable
      dragging={isDragging}
      ref={setNodeRef}
      handle={handle}
      listeners={listeners}
      style={{
        opacity: isDragging ? 0 : undefined,
      }}
      id={id}
    />
  )
}
