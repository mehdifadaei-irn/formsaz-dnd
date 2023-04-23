import React, { useCallback, useEffect, useRef, useState } from "react"
import { createPortal, unstable_batchedUpdates } from "react-dom"
import {
  CancelDrop,
  closestCenter,
  pointerWithin,
  rectIntersection,
  CollisionDetection,
  DndContext,
  DragOverlay,
  DropAnimation,
  getFirstCollision,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  Modifiers,
  useDroppable,
  UniqueIdentifier,
  useSensors,
  useSensor,
  MeasuringStrategy,
  KeyboardCoordinateGetter,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core"
import {
  AnimateLayoutChanges,
  SortableContext,
  useSortable,
  arrayMove,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
  SortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { DroppableStory } from "./container/Droppable"

import Drag from "./comps/Drag"
import Drop from "./comps/Drop"
import { SortStatic } from "./comps/SortStatic"
import { coordinateGetter as multipleContainersCoordinateGetter } from "./container/multipleContainersKeyboardCoordinates"
import { Item } from "./components"
import MyItem from "./container/MyItem"
import Samp1 from "./components1/Samp1"

function SortableItem({
  disabled,
  id,
  index,
  handle,
  renderItem,
  style,
  containerId,
  getIndex,
  wrapperStyle,
}: any) {
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
  } = useSortable({
    id,
  })
  const mounted = useMountStatus()
  const mountedWhileDragging = isDragging && !mounted

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      handleProps={handle ? { ref: setActivatorNodeRef } : undefined}
      index={index}
      wrapperStyle={wrapperStyle({ index })}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
      renderItem={renderItem}
    />
  )
}

function App() {
  const [staticItems, setStaticItems] = useState(["input", "text", "number"])
  // const [items, setItems] = useState(["One", "Tow", "SEc"])
  const [container, setContainer] = useState(["A", "B"])
  const [Items, setItems] = useState({
    A: ["input", "text", "number"],
    B: ["One", "Tow", "SEc"],
  })
  
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      // @ts-ignore
      multipleContainersCoordinateGetter,
    })
  )

  // const addToSort = () => {
  //   const first = new Date()
  //   console.log(first)
  //   setItems((items) => [...items, `mamal${first}`])
  // }

  function findContainer(it: any) {
    // "input", "text", "number"
    if (it === "input" || it === "text" || it === "number") {
      return "A"
    } else return "B"
  }

  return (
    <div>
      {/* <Samp1/> */}
      <h1>gel</h1>
    </div>
  )

  // function handleOver(e: any) {
  //   console.log("-")
  //   console.log(e)
  //   console.log("-")
  // }
  // function handleDragEnd1(e: any) {
  //   console.log(e.active.id)
  //   setItems((item) => [...item, e.active.id])
  // }

  // function handleDragEnd(event: any) {
  //   const { active, over } = event
  //   console.log(`ac=${active.id} --- ov=${over.id}`)
  //   console.log(over)
  //   // setItems((items) => [...items, "drag"])
  //   if (active.id !== over.id) {
  //     setItems((items) => {
  //       const oldIndex = items.indexOf(active.id)
  //       const newIndex = items.indexOf(over.id)

  //       return arrayMove(items, oldIndex, newIndex)
  //     })
  //   }
  // }
}

function useMountStatus() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)

    return () => clearTimeout(timeout)
  }, [])

  return isMounted
}

function getColor(id: UniqueIdentifier) {
  switch (String(id)[0]) {
    case "A":
      return "#7193f1"
    case "B":
      return "#ffda6c"
    case "C":
      return "#00bcd4"
    case "D":
      return "#ef769f"
  }

  return undefined
}

export default App
