import React, { FC, HTMLAttributes } from "react"
import { RecordPlayer as PlayerComponents } from "../constants/siteConstants"
import styled, { keyframes, css } from "styled-components"

interface Props extends HTMLAttributes<HTMLDivElement> {
  isArmRotating: boolean
}

export const RecordPlayer: FC<Props> = ({ className = "", isArmRotating }) => {
  return (
    <PlayerContainer className={className}>
      <PlayerArm isArmRotating={isArmRotating}>
        {PlayerComponents.arm}
      </PlayerArm>
      <Player>{PlayerComponents.playerWithoutArm}</Player>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  position: relative;
  display: inline-block;
`

const startingPosition = `
    transform: rotate(0deg);
    top: 9px;
    right: 12px;
`

const endingPosition = `
    transform: rotate(90deg);
    top: 2px;
    right: -25px;
`

const rotateArm = keyframes`
    from {
        ${startingPosition}
    }

    to {
        ${endingPosition}
    }
`

const PlayerArm = styled.pre<{ isArmRotating: boolean }>`
  position: absolute;
  margin: 0;
  transform-origin: top left;

  ${({ isArmRotating }) => {
    if (isArmRotating) {
      return css`
        animation: ${rotateArm} 2s linear;
        ${endingPosition}
      `
    } else {
      return `
                ${startingPosition}
            `
    }
  }}
`

const Player = styled.pre`
  margin: 0;
`
