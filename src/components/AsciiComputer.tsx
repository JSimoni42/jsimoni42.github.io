import React, { FC } from "react";
import styled from "styled-components";
import { Computer } from "../constants/siteConstants";

export const AsciiComputer: FC = () => {
  return (
    <>
      <div>
        <ComputerPart>
          { Computer.top }
        </ComputerPart>
      </div>
      <div>
        <ComputerPart>
          { Computer.left }
        </ComputerPart>
        <ComputerScreen />
        <ComputerPart>
          { Computer.right }
        </ComputerPart>
      </div>
      <div>
        <ComputerPart>
          { Computer.bottom }
        </ComputerPart>
      </div>
    </>
  );
};

const ComputerScreen = styled.div`
  display: inline-block;
  background-color: white;
  width: 470px;
  height: 280px;
`;

const ComputerPart = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`;