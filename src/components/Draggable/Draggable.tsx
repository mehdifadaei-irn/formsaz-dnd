import React, { forwardRef } from "react"
import classNames from "classnames"
import type { DraggableSyntheticListeners } from "@dnd-kit/core"
import type { Transform } from "@dnd-kit/utilities"

import { Handle } from "../Item/components/Handle"

import {
  draggable,
  draggableHorizontal,
  draggableVertical,
} from "./draggable-svg"
import styles from "./Draggable.module.css"

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

interface Props {
  axis?: Axis
  dragOverlay?: boolean
  dragging?: boolean
  handle?: boolean
  listeners?: DraggableSyntheticListeners
  style?: React.CSSProperties
  buttonStyle?: React.CSSProperties
  transform?: Transform | null
  label?:string
  content?: any
  id?:any;
}

export const Draggable = forwardRef<HTMLButtonElement, Props>(
  function Draggable(
    {
      axis,
      dragOverlay,
      dragging,
      handle,
      listeners,
      transform,
      style,
      buttonStyle,
      content,
      label,
      id,
      ...props
    },
    ref
  ) {
    return (
      <div
        className={classNames(
          styles.Draggable,
          dragOverlay && styles.dragOverlay,
          dragging && styles.dragging
        )}
        style={
          {
            ...style,
            "--translate-x": `${transform?.x ?? 0}px`,
            "--translate-y": `${transform?.y ?? 0}px`,
          } as React.CSSProperties
        }
      >
        <button
          {...props}
          aria-label="Draggable"
          data-cypress="draggable-item"
          {...(handle ? {} : listeners)}
          tabIndex={handle ? -1 : undefined}
          ref={ref}
          onClick={()=> console.log(content)}
          style={buttonStyle}
          className="mb-2"
        >
          {/* {axis === Axis.Vertical
            ? draggableVertical
            : axis === Axis.Horizontal
            ? draggableHorizontal
            : draggable} */}
          {/* {draggableHorizontal} */}
          <h2 className="text-white w-24">{content}</h2>
          {/* {draggableHorizontal} */}
        </button>
      </div>
    )
  }
)
