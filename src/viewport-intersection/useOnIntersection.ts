import { useEffect } from "react"
import intersectionObserverWrapper from "./intersectionObserverWrapper"

export function useOnIntersection(callback: IntersectionObserverCallback) {
  useEffect(() => {
    intersectionObserverWrapper.addIntersectionListener(callback)
    ;() => intersectionObserverWrapper.removeIntersectionListener(callback)
  }, [])
}
