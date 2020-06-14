import { FC } from "react";
import { SiteHelmet } from "./site-helmet";
import React from "react";
import styled from "styled-components";

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <SiteHelmet />
      { children }
      <SiteFooter>
        Icons graciously sourced from&nbsp;<a href="https://icons8.com/">Icons8.com</a>
      </SiteFooter>
    </>
  );
};

const SiteFooter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin: 5px auto;
`;
