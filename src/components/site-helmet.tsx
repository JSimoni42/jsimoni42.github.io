import React, { FC } from "react";
import { Helmet } from "react-helmet";

export const SiteHelmet: FC = () => {
  return (
    <Helmet>
      <title>John Simoni - Swell Person</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"></link>
    </Helmet>
  );
};

