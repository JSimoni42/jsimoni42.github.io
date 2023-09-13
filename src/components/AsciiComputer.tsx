import React, { FC } from "react"
import styled from "styled-components"
import { Computer } from "../constants/siteConstants"

export const AsciiComputer: FC = ({ children }) => {
  return (
    <div>
      <div>
        <ComputerPart>{Computer.top}</ComputerPart>
      </div>
      <div>
        <ComputerPart>{Computer.left}</ComputerPart>
        <ComputerScreen>{children}</ComputerScreen>
        <ComputerPart>{Computer.right}</ComputerPart>
      </div>
      <div>
        <ComputerPart>{Computer.bottom}</ComputerPart>
      </div>
    </div>
  )
}

const ComputerScreen = styled.div`
  display: inline-block;
  width: 15vw;
  height: 7vw;
`

const ComputerPart = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`
