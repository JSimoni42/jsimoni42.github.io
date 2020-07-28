import React, { FC, useState, useEffect } from "react"
import { SidebarElement } from "./models"
import { useOnIntersection } from "../../viewport-intersection/useOnIntersection"

interface Props {
  elements: SidebarElement[]
}

export const Sidebar: FC<Props> = ({ elements }) => {
  const [activeElementIndex, setActiveElementIndex] = useState(0)

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries.length > 1) {
      console.error(entries)
    }

    const entry = entries[0]
    const newElementIndex = elements.findIndex(
      element => element.elementId == entry.target.id
    )
    if (newElementIndex !== -1) {
      setActiveElementIndex(newElementIndex)
    }
  }

  useOnIntersection(onIntersect)

  const navElements = elements.map((element, index) => {
    return (
      <li
        key={index}
        style={{
          ...(index === activeElementIndex ? { color: "purple" } : {}),
        }}
      >
        {element.title}
      </li>
    )
  })

  return <ol>{navElements}</ol>
}
