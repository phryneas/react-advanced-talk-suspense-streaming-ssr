"use client";

import {
  Children,
  ReactNode,
  isValidElement,
  useEffect,
  useState,
} from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const [visibleChildren, setVisibleChildren] = useState(1);
  const childCount = Children.count(children);
  useEffect(() => {
    function handler(ev: KeyboardEvent) {
      if (ev.key === "ArrowDown") {
        setVisibleChildren((visibleChildren) =>
          Math.min(childCount, visibleChildren + 1)
        );
      }
      if (ev.key === "ArrowUp") {
        setVisibleChildren((visibleChildren) =>
          Math.max(1, visibleChildren - 1)
        );
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });
  return Children.map(children, (child, idx) => {
    if (!isValidElement(child)) return;
    const Tag = child.type;
    return (
      <Tag
        {...child.props}
        className={
          (child.props.className || "") +
          (idx >= visibleChildren ? " invisible" : "")
        }
      >
        {child.props.children}
      </Tag>
    );
  });
}
