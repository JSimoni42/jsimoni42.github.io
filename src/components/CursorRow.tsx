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

      const intervalId = setInterval(tick, 100);

      return () => clearInterval(intervalId);
    }
  }, [ startTyping ]);

  return (
    <Row className={ className }>
      <TextContainer>
        { typedText }
      </TextContainer>
      <Cursor />
    </Row>
  );
};

const TextContainer = styled.span`
  color: white;
  font-family: 'Roboto Mono', monospace;
`;

const Row = styled.div`
  &::selection {
    background-color: white;
    color: black;
  }
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
  height: 23px;
  width: 10px;
  animation: ${Blinking} 1s linear infinite;
  vertical-align: text-top;
`;