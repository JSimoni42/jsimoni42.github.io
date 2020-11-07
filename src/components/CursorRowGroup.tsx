import React, { FC, useCallback, useState } from "react"
import { CursorRow } from "./CursorRow"

interface IOwnProps {
  contentItems: string[]
}

export const CursorRowGroup: FC<IOwnProps> = ({ contentItems }) => {
  const [startTypingIndex, setStartTypingIndex] = useState(0)

  const onFinishTypingRow = useCallback(() => {
    setStartTypingIndex(startTypingIndex + 1)
  }, [startTypingIndex, setStartTypingIndex])

  return (
    <>
      {contentItems.map((section, index) => (
        <CursorRow
          text={section}
          key={index}
          startTyping={startTypingIndex === index}
          onComplete={onFinishTypingRow}
        />
      ))}
    </>
  )
}
