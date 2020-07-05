import React, { FC, HTMLAttributes, useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  startTyping: boolean;
  delay?: number;
}

export const CursorRow: FC<Props> = ({
  text,
  startTyping,
  className = '',
  delay = 100,
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

      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [ startTyping ]);

  return (
    <div className={ className }>
      <TextContainer>
        { typedText }
      </TextContainer>
      <Cursor />
    </div>
  );
};

const TextContainer = styled.span`
  font-family: 'Roboto Mono', monospace;

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