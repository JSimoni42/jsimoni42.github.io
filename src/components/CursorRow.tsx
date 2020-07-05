import React, { FC, HTMLAttributes, useState, useEffect, useRef } from "react";
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
  const callback = useRef<() => void>();

  useEffect(() => {
    callback.current = (): void =>  {
      if (text === typedText) {
        return;
      } else {
        const currentIndex = typedText.length;
        setTypedText(t => t + text[currentIndex]);
      }
    }
  }, [ text, typedText ])

  useEffect(() => {
    if (startTyping) {
      const tick = () => {
        callback.current?.();
      }

      const intervalId = setInterval(tick, 200);

      return () => clearInterval(intervalId);
    }
  }, [ startTyping ]);

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

  font-family: 'Roboto Mono', monospace;
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