import React, { FC, useCallback, useEffect, useState } from "react"
import { CursorRow } from "./CursorRow"

interface IOwnProps {
  contentItems: string[]
  finishTyping?: boolean
}

export const CursorRowGroup: FC<IOwnProps> = ({
  contentItems,
  finishTyping = false,
}) => {
  const [startTypingIndex, setStartTypingIndex] = useState(0)

  const onFinishTypingRow = useCallback(() => {
    setStartTypingIndex(startTypingIndex + 1)
  }, [startTypingIndex, setStartTypingIndex])

  useEffect(() => {
    if (finishTyping) {
      setStartTypingIndex(contentItems.length)
    }
  }, [finishTyping])

  return (
    <>
      {contentItems.map((section, index) => (
        <CursorRow
          text={section}
          key={index}
          startTyping={startTypingIndex === index}
          onComplete={onFinishTypingRow}
          finishTyping={finishTyping}
        />
      ))}
    </>
  )
}
