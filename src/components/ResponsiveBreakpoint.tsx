import { FC, ReactElement, useLayoutEffect, useState } from "react"

interface Props {
  desktopView: ReactElement
  mobileView: ReactElement
  breakpoint: number
}

export const ResponsiveBreakpoint: FC<Props> = ({
  desktopView,
  mobileView,
  breakpoint,
}) => {
  const [currentView, setView] = useState<"desktop" | "mobile">("desktop")
  useLayoutEffect(() => {
    setView(window.innerWidth >= breakpoint ? "desktop" : "mobile")
  })

  switch (currentView) {
    case "mobile":
      return mobileView
    case "desktop":
      return desktopView
  }
}
