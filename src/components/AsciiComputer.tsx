import React, { FC } from "react";
import styled from "styled-components";
import { Computer } from "../constants/siteConstants";

export const AsciiComputer: FC = ({ children }) => {
  return (
    <div>
      <div>
        <ComputerPart>
          { Computer.top }
        </ComputerPart>
      </div>
      <div>
        <ComputerPart>
          { Computer.left }
        </ComputerPart>
        <ComputerScreen>
          { children }
        </ComputerScreen>
        <ComputerPart>
          { Computer.right }
        </ComputerPart>
      </div>
      <div>
        <ComputerPart>
          { Computer.bottom }
        </ComputerPart>
      </div>
    </div>
  );
};

const ComputerScreen = styled.div`
  display: inline-block;
  background-color: white;
  width: 473px;
  height: 286px;
`;

const ComputerPart = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`;