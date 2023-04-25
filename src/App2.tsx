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
import { v4 as uuidv4 } from "uuid"

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
  collisionDetection = closestCenter,
  modifiers,
}: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [parent, setParent] = useState<UniqueIdentifier | null>(null)
  const [staticItems, setStaticItems] = useState<string[]>([
    "Password",
    "Text",
    "Number",
  ])

  const [sortItems, setSortItems] = useState<any[]>([])

  const [mainItems, setMainItems] = useState({
    A: ["Password", "Text", "Number"],
    B: [],
  })

  function click() {
    console.log(sortItems)
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={parent === null ? undefined : modifiers}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={({ over, active }) => {
        let newIndex = sortItems.length
        sortItems.map((it, i) => {
          if (it.id === over?.data.current?.uid) {
            console.log("not")
            newIndex = i
          }
        })

        console.log(`newis = ${newIndex}`)
        // console.log(lllg)
        // console.log(active.data?.current?.isStatic)
        setParent(over ? over.id : null)
        if (active.data?.current?.isStatic) {
          // in  static items
          // console.log(active)

          console.log(over)
          // setSortItems([...sortItems, active.data.current?.content])
          if (true) {
          if (sortItems.length === 0) {
            setSortItems((item): any => {
              let itemLenght = sortItems.length
              if (itemLenght > 2) {
                return [
                  ...sortItems.slice(0, newIndex),
                  { name: active.data.current?.content, id: uuidv4() },
                  ...sortItems.slice(newIndex, sortItems.length),
                ]
              } else {
                return [
                  ...item,
                  { name: active.data.current?.content, id: uuidv4() },
                ]
              }
            })
          } else if (over !== null) {
            setSortItems((item): any => {
              let itemLenght = sortItems.length
              if (itemLenght > 2) {
                return [
                  ...sortItems.slice(0, newIndex),
                  { name: active.data.current?.content, id: uuidv4() },
                  ...sortItems.slice(newIndex, sortItems.length),
                ]
              } else {
                return [
                  ...item,
                  { name: active.data.current?.content, id: uuidv4() },
                ]
              }
            })
          }
          }
        } else {
          // in sort Items
          if (active.id !== over?.id) {
            setSortItems((items) => {
              // const oldIndex = items.indexOf(active.id)
              let oi
              const oldIndex = items.map((it, i) => {
                if (it.id === active.id) {
                  oi = i
                }
              })

              // const newIndex = items.indexOf(over?.id)
              let ni
              const newIndex = items.map((it, i) => {
                if (it.id === over?.id) {
                  ni = i
                }
              })

              console.log({ ni, oi })

              // @ts-ignore
              return arrayMove(sortItems, oi, ni)
            })
          }
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
            <div key={i} className="bo  border bg-red-400">
              <SortableContext
                items={sortItems}
                strategy={verticalListSortingStrategy}
                
              >
                {sortItems.map((id, i) => (
                  <SortableItem key={i} id={id.name} uid={id.id} />
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
      isStatic: true,
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
