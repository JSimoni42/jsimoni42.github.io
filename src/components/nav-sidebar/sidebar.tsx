import React, {FC, useState, useEffect} from "react";
import { SidebarElement } from "./models";

interface Props {
  elements: SidebarElement[];
}

export const Sidebar: FC<Props> = ({
  elements,
}) => {
  const [ activeElementIndex, setActiveElementIndex ] = useState(0);

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries.length > 1) {
      console.error(entries);
    }

    const entry = entries[0];
    const newElementIndex = elements.findIndex((element) => element.elementId == entry.target.id);
    if (newElementIndex !== -1) {
      setActiveElementIndex(newElementIndex);
    }
  };

  const [ intersectionObserver, setObserver ] = useState(new IntersectionObserver(onIntersect));

  useEffect(() => {
    if (elements.length > 0)  {
      elements.forEach((element) => {
        const foundElement = document.getElementById(element.elementId);
        if (foundElement) {
          intersectionObserver.observe(foundElement);
        }
      });
    }

    return intersectionObserver.disconnect;
  }, [ elements ]);

  const navElements = elements.map((element, index) => {
    return (
      <li key={ index } style={{
        ...( index === activeElementIndex ? { color: 'purple' } : {}),
       }}>{ element.title }</li>
    );
  });

  return (
    <ol>
      { navElements }
    </ol>
  );
};