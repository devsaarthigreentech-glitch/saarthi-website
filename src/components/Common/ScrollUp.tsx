"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  // Block body (no implicit return): an arrow that implicitly returns a
  // non-function would be treated by React as a cleanup and throw
  // "destroy is not a function" on unmount.
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
