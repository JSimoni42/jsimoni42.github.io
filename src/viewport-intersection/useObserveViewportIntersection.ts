import { useRef, useEffect } from "react"
import intersectionObserverWrapper from "./intersectionObserverWrapper"

export function useObserveViewportIntersection<
  T extends HTMLElement = HTMLElement
>() {
  const ref = useRef<T>(null)
  const observer = intersectionObserverWrapper.getObserver()

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref.current])

  return ref
}
