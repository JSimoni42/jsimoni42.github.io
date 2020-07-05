import { FC } from "react";
import { SiteHelmet } from "./site-helmet";
import React from "react";

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <SiteHelmet />
      { children }
    </>
  );
};
