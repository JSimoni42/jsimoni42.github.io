import React, { FC, HTMLAttributes, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  startTyping: boolean;
}

export const CursorRow: FC<Props> = ({
  text,
  startTyping,
  className = '',
}) => {
  const [ typedText, setTypedText ] = useState("");
  const [ currentTypedIndex, setCurrentTypedIndex ] = useState(0);
  const [ typingIntervalId, setTypingIntervalId ] = useState(-1);

  useEffect(() => {
    if (startTyping && typedText === "") {
      const intervalId = window.setInterval(() => {
        setTypedText(typedText + text[currentTypedIndex]);
        setCurrentTypedIndex(currentTypedIndex + 1);
      }, 1000);

      setTypingIntervalId(intervalId);
    }
  }, [ startTyping ]);

  useEffect(() => {
    if (currentTypedIndex >= text.length) {
      clearInterval(typingIntervalId);
    }
  }, [ currentTypedIndex ])

  return (
    <Row className={ className }>
      { typedText }
      <Cursor />
    </Row>
  );
};

const Row = styled.div`
  height: 1em;
  color: white;
`;

const Blinking = keyframes`
  from {
    background-color: white;
  }

  to {
    background-color: black;
  }
`;

const Cursor = styled.div`
  display: inline-block;
  background-color: white;
  height: 1em;
  width: 10px;
  animation: ${Blinking} 1s linear infinite;
`;